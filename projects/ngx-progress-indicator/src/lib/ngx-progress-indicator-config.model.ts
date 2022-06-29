export class NgxProgressIndicatorConfig {
  /**
   * The size (height) of the progress indicator.
   * Numeric values get converted to px. */
  size!: number | string;
  /**
   * Color of the progress indicator. Also used for the glow
   * around the indicator. */
  color!: string;
  /**
   * Class name used for the progress indicator element. */
  className!: string;
  /**
   * How many milliseconds to wait before the progress indicator
   * animation starts after calling .start(). */
  delay!: number;
}
