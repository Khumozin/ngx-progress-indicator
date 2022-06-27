import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxProgressIndicatorConfig } from './ngx-progress-indicator-config.model';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
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
