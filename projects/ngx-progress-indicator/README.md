# NgxProgressIndicator

A progress indicator library for [Angular](https://angular.io/) apps.

## Installation

You can install it through **Angular CLI**:

```bash
ng add ngx-progress-indicator
```

or with **npm**:

```bash
# For Angular version >= 13
npm i ngx-progress-indicator
```

When you install using **npm**, you will also need to import `NgxProgressIndicatorModule` in your `app.module`. You can also set global NgxProgressIndicator config ([`Partial<NgxProgressIndicatorConfig>`](#ngxprogressindicatorconfig)) here.:

```typescript
import { NgxProgressIndicatorModule } from 'ngx-progress-indicator';
@NgModule({
  imports: [NgxProgressIndicatorModule.forRoot({ color: '#0083ff' })],
})
class AppModule {}
```

## Basic Usage

```typescript
import { Component } from '@angular/core';
import { NgxProgressIndicatorService } from 'ngx-progress-indicator';
import { interval, take } from 'rxjs';
@Component({
  ...
})
export class AppComponent {
    constructor(private service: NgxProgressIndicatorService) {
        // show ngx progress indicator
        this.service.start();
        interval(3000)
            .pipe(take(1))
            .subscribe({
                next: () => this.service.finish() // hide ngx progress indicator after 3 seconds
            });
    }
}
```

## NgxProgressIndicatorConfig

| Name         | Type      | Description                                                       |
| ------------ | --------- | ----------------------------------------------------------------- |
| size | `number` or `string` | The size (height) of the progress indicator. Numeric values get converted to px.<br>_Default: false_ |
| color | `string` | Color of the progress bar. Also used for the glow around the bar.<br>_Default: false_ |
| className | `string` | Class name used for the progress bar element.<br>_Default: false_ |
| delay | `number` | How many milliseconds to wait before the progress bar animation starts after calling .start().<br>_Default: false_ |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
