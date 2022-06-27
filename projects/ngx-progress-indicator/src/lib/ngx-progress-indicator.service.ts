import { Injectable, Optional, Renderer2, RendererFactory2 } from '@angular/core';
import { interval, take } from 'rxjs';

import { NgxProgressIndicatorConfig } from './ngx-progress-indicator-config.model';

const assign = Object.assign;

@Injectable({
  providedIn: 'root',
})
export class NgxProgressIndicatorService {
  /** Show the progress bar and begin animating it. */
  public start!: () => void;

  /** End the progress bar animation. */
  public finish!: () => void;

  private renderer!: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Optional() config: NgxProgressIndicatorConfig
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.initialize(config);
  }

  private initialize(config: NgxProgressIndicatorConfig): void {
    const options: NgxProgressIndicatorConfig = assign(
      {
        size: 2,
        color: '#0083ff',
        className: 'ngx-progress-indicator',
        delay: 80,
      },
      config
    );

    const initialStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      borderRadius: 0,
      backgroundColor: config.color,
      zIndex: 10000,
      height:
        typeof config.size === 'number' ? config.size + 'px' : config.size,
      color: config.color,
      opacity: 0,
      width: '0%',
    };

    const startedStyle = {
      opacity: 1,
      width: '99%',
      transition: 'width 10s cubic-bezier(0.1, 0.05, 0, 1)',
    };

    const finishedStyle = {
      opacity: 0,
      width: '100%',
      transition: 'width 0.1s ease-out, opacity 0.5s ease 0.2s',
    };

    const glowStyle = {
      opacity: 0.4,
      boxShadow: '3px 0 8px',
      height: '100%',
    };

    let parent!: HTMLElement;

    this.start = () => {
      if (parent && parent.parentNode) {
        this.renderer.removeChild(parent.parentNode, parent);
      }

      parent = this.renderer.createElement('div');
      parent.className = options.className + ' stopped';

      this.renderer.appendChild(document.body, parent);

      assign(parent.style, initialStyle);

      let child = this.renderer.createElement('div');
      child.className = 'glow';
      this.renderer.appendChild(parent, child);
      assign(child.style, glowStyle);

      interval(options.delay)
        .pipe(take(1))
        .subscribe({
          next: () => {
            parent.className = options.className + ' started';
            assign(parent.style, startedStyle);
          },
        });

      parent.scrollTop = 0;
    };

    this.finish = () => {
      if (parent) {
        parent.className = options.className + ' finished';
        assign(parent.style, finishedStyle);
      }
    };
  }
}
