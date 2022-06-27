import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxProgressIndicatorConfig } from './ngx-progress-indicator-config.model';
import { NgxProgressIndicatorComponent } from './ngx-progress-indicator.component';

@NgModule({
  declarations: [NgxProgressIndicatorComponent],
  imports: [],
  exports: [NgxProgressIndicatorComponent],
})
export class NgxProgressIndicatorModule {
  static forRoot(
    config?: Partial<NgxProgressIndicatorConfig>
  ): ModuleWithProviders<NgxProgressIndicatorModule> {
    return {
      ngModule: NgxProgressIndicatorModule,
      providers: [{ provide: NgxProgressIndicatorConfig, useValue: config }],
    };
  }
}
