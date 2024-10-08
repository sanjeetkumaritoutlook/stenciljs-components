import { Component, Prop, Watch, h, Event, EventEmitter } from "@stencil/core";
import easingAnimationFrames, {
  EasingType,
  RestartFramesFunction,
  EasingAnimationFramesOptions,
  TemplateOptions,
  ResumeFramesFunction,
  RestartFramesOptions,
} from "easing-animation-frames";
//npm i easing-animation-frames

export interface EventPayload {
  id: string;
}

export interface ProgressEventPayload {
  id: string;
  progress: number;
  percentage: number;
}

export interface ColorChangeEventPayload {
  id: string;
  color: string;
}


@Component({
  tag: 'my-progress-ring',
  styleUrl: 'my-progress-ring.css',
  shadow: true,
})
export class MyProgressRing {
 // SHAPE

  /**
   * Radius of the ring
   */
  @Prop() radius = 80;
  /**
   * Thickness of the ring
   */
  @Prop() strokeWidth = 10;
  private normalizedRadius: number;
  private circumference: number;

  @Watch("radius")
  radiusUpdated(newValue: number) {
    this.setShapeSettings({
      radius: newValue,
    });
    this.restartProgress();
  }

  @Watch("strokeWidth")
  strokeWidthUpdated(newValue: number) {
    this.setShapeSettings({
      strokeWidth: newValue,
    });
    this.restartProgress();
  }

  private setShapeSettings = ({
    radius = this.radius,
    strokeWidth = this.strokeWidth,
  }) => {
    // Caches calculation results
    this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  };

  // TEXT

  /**
   * Font size of the integer
   */
  @Prop() intSize = 30;
  /**
   * Font size of the decimal places
   */
  @Prop() decimalSize: number;
  /**
   * Hide digits
   */
  @Prop() disableDigits = false;
  /**
   * Hide decimal places
   */
  @Prop() disableDecimals = false;

  private parsePercentageText = (percentage: number) => {
    if (percentage <= 0) {
      return ["0", "0"];
    }
    return percentage.toFixed(1).split(".");
  };

  private isZeroPercent = () => {
    return this.percentage === 0;
  };

  private getDecimalSize = () => {
    return this.decimalSize === undefined
      ? Math.floor(this.intSize * 0.7)
      : this.decimalSize;
  };

  // STYLE

  /**
   * Addes rounded linecap to the ring
   */
  @Prop() roundLinecap = false;

  private getLinecap = () => {
    return this.roundLinecap ? "round" : "butt";
  };

  // COLORS

  /**
   * Color steps of the ring
   */
  @Prop() colors: string | Map<number, string> = new Map([
    [0, "#ff4f40"], // red
    [25, "#ffcd40"], // yellow
    [50, "#66a0ff"], // blue
    [75, "#30bf7a"], // green
  ]);

  /**
   * Inverts the color scheme
   */
  @Prop() invertColors = false;

  private internalColors: Map<number, string>;

  @Watch("colors")
  colorsUpdated(newValue: string | Map<number, string>) {
    this.setColorsSettings({
      colors: newValue,
    });
    this.restartProgress();
  }

  @Watch("invertColors")
  invertColorsUpdated(newValue: boolean) {
    this.setColorsSettings({
      invertColors: newValue,
    });
    this.restartProgress();
  }

  private setColorsSettings = ({
    colors = this.colors,
    invertColors = this.invertColors,
  }) => {
    const colorsMap: Map<number, string> =
      colors instanceof Map ? colors : new Map(JSON.parse(colors));
    if (!invertColors) {
      this.internalColors = colorsMap;
      return;
    }

    // If inverseColors prop is set to true
    const colorsArray = [...colorsMap];
    const colorsArrayReversed = [...colorsArray].reverse();
    this.internalColors = new Map(
      colorsArray.map((color, i) => [color[0], colorsArrayReversed[i][1]])
    );
  };

  private setColors = (percentage: number) => {
    let color: string;
    const colorsArray = [...this.internalColors];

    for (let i = 0; i < colorsArray.length; i++) {
      if (i === colorsArray.length - 1) {
        color = colorsArray[i][1];
        break;
      }
      if (percentage < colorsArray[i + 1][0]) {
        color = colorsArray[i][1];
        break;
      }
    }

    // Emits color change event
    if (this.eventId !== undefined) {
      this.prcColor.emit({
        id: this.eventId,
        color,
      });
    }

    this.ring.style.stroke = color;
    this.ringBackground.style.stroke = color;
    this.percentageText.style.fill = color;
  };

  // ANIMATION

  /**
   * Percentage value (mandatory)
   */
  @Prop({ reflect: true, mutable: true }) percentage = 0;

  /**
   * Animation duration in miliseconds
   */
  @Prop() duration = 4000;

  /**
   * Easing animation function name
   */
  @Prop() easingType: EasingType = "quartInOut";
  private internalPercentage: number;
  private start = 0;
  private progress = 0;
  private resumeFrames: ResumeFramesFunction;
  private restartFrames: RestartFramesFunction;
  private isLoaded = false;
  private isDisconnected = false;
  private complete = false;

  @Watch("percentage")
  percentageUpdated() {
    if (this.percentage < 0) {
      this.percentage = 0;
      return;
    }
    this.restartProgress();
  }

  @Watch("duration")
  durationtUpdated() {
    this.restartProgress();
  }

  @Watch("easingType")
  easingTypeUpdated() {
    this.restartProgress();
  }

  // Called for every requestAnimationFrame
  private setProgress = ({
    progress,
    stopFrames,
    resumeFrames,
    restartFrames,
  }: TemplateOptions) => {
    // Stops the animation if the component is disconnected from the DOM
    if (this.isDisconnected && typeof stopFrames === "function") {
      stopFrames();

      // Emits stop event
      if (this.eventId !== undefined) {
        this.prcStop.emit({ id: this.eventId });
      }
      return;
    }

    this.progress = progress;
    this.resumeFrames = resumeFrames;
    this.restartFrames = restartFrames;

    // Shape
    const currentPercentage =
      (this.internalPercentage - this.start) * progress + this.start;
    const offset =
      currentPercentage >= 100
        ? 0
        : this.circumference - (currentPercentage / 100) * this.circumference;
    this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string

    // Text
    const parsedPercentageText = this.parsePercentageText(currentPercentage);
    this.intText.innerHTML = parsedPercentageText[0];
    this.decimalText.innerHTML = parsedPercentageText[1];

    // Emits progress change event
    if (this.eventId !== undefined) {
      this.prcProgress.emit({
        id: this.eventId,
        progress,
        percentage: currentPercentage,
      });
    }
  };

  // Called every time the percentage attribute gets updated
  private restartProgress = () => {
    if (typeof this.restartFrames !== "function") {
      return;
    }

    // Emits restart event
    if (this.eventId !== undefined) {
      this.prcRestart.emit({ id: this.eventId });
    }

    // Resets the progresss to 0 and set the start to be the previous percentage
    const currentPercentage =
      (this.internalPercentage - this.start) * this.progress + this.start;
    this.internalPercentage = this.percentage;
    this.progress = 0;
    this.start = currentPercentage;

    // Reset the complete state
    this.complete = false;

    // Restarts the template function
    const restartSettings: RestartFramesOptions = {
      restartDuration: this.duration,
      restartEasingType: this.easingType,
      restartTemplate: this.setProgress,
      restartComplete: this.completeCallback,
    };

    this.setColors(this.percentage);
    this.restartFrames(restartSettings);
  };

  private completeCallback = () => {
    if (!this.complete) {
      this.complete = true;

      // Emits complete event
      if (this.eventId !== undefined) {
        this.prcComplete.emit({ id: this.eventId });
      }
    }
  };

  // EVENTS

  /**
   * Unique ID for the event listeners
   */
  @Prop() eventId?: string;
  /**
   * Animation progress value to be emitted (from 0 to 1)
   */
  @Event({ bubbles: true, composed: true })
  prcProgress: EventEmitter<ProgressEventPayload>;
  /**
   * Color value to be emitted
   */
  @Event({ bubbles: true, composed: true })
  prcColor: EventEmitter<ColorChangeEventPayload>;
  /**
   * OnStart event of the animation
   */
  @Event({ bubbles: true, composed: true })
  prcStart: EventEmitter<EventPayload>;
  /**
   * OnComplete event of the animation
   */
  @Event({ bubbles: true, composed: true })
  prcComplete: EventEmitter<EventPayload>;
  /**
   * OnStop event of the animation
   */
  @Event({ bubbles: true, composed: true }) prcStop: EventEmitter<EventPayload>;
  /**
   * OnResume event of the animation
   */
  @Event({ bubbles: true, composed: true })
  prcResume: EventEmitter<EventPayload>;
  /**
   * OnRestart event of the animation
   */
  @Event({ bubbles: true, composed: true })
  prcRestart: EventEmitter<EventPayload>;

  /**
   * Lifecycle Methods
   */
  componentWillLoad() {
    if (this.percentage < 0) {
      this.percentage = 0;
      return;
    }

    // We need internal percentage, which is not reactive to prop changes
    this.internalPercentage = this.percentage;

    this.setShapeSettings({
      radius: this.radius,
      strokeWidth: this.strokeWidth,
    });

    this.setColorsSettings({
      invertColors: this.invertColors,
      colors: this.colors,
    });
  }

  componentDidLoad() {
    this.isLoaded = true;
    this.setColors(this.percentage);

    // Emits restart event
    if (this.eventId !== undefined) {
      this.prcStart.emit({ id: this.eventId });
    }

    const animationSettings: EasingAnimationFramesOptions = {
      duration: this.duration,
      easingType: this.easingType,
      template: this.setProgress,
      complete: this.completeCallback,
    };

    easingAnimationFrames(animationSettings);
  }

  connectedCallback() {
    if (this.isLoaded) {
      // If the component is already loaded, that means it was loaded but
      // disconnected from the DOM and then connected to the DOM again
      this.isDisconnected = false;

      // Emits complete event
      if (this.eventId !== undefined) {
        this.prcResume.emit({ id: this.eventId });
      }

      // Resumes animation that is still in progress
      this.resumeFrames();
    }
  }

  disconnectedCallback() {
    this.isDisconnected = true;
  }

  /**
   * JSX
   */
  private ringBackground: SVGCircleElement;
  private ring: SVGCircleElement;
  private percentageText: SVGTextElement;
  private intText: SVGTSpanElement;
  private decimalText: SVGTSpanElement;

  render() {
    return (
      <div class="root">
        <h1>Progress Ring</h1>
        <svg height={this.radius * 2} width={this.radius * 2}>
          <circle
            cx={this.radius}
            cy={this.radius}
            r={this.normalizedRadius}
            stroke-width={this.strokeWidth}
            fill="transparent"
            opacity="0.1"
            ref={(el: SVGCircleElement) => (this.ringBackground = el)}
            class="background-ring"
          />
          <circle
            cx={this.radius}
            cy={this.radius}
            r={this.normalizedRadius}
            stroke-width={this.strokeWidth}
            stroke-dasharray={`${this.circumference} ${this.circumference}`}
            fill="transparent"
            stroke-linecap={this.getLinecap()}
            ref={(el: SVGCircleElement) => (this.ring = el)}
            class="ring"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dy="0.5ex"
            font-size={this.intSize}
            ref={(el: SVGTextElement) => (this.percentageText = el)}
            class={this.disableDigits ? "hide" : null}
          >
            <tspan
              font-size={this.intSize}
              ref={(el: SVGTSpanElement) => (this.intText = el)}
              class="intText"
            ></tspan>
            <tspan
              font-size={this.intSize}
              class={
                this.isZeroPercent() || this.disableDecimals
                  ? "hide"
                  : "decimalPointText"
              }
            >
              .
            </tspan>
            <tspan
              font-size={this.getDecimalSize()}
              ref={(el: SVGTSpanElement) => (this.decimalText = el)}
              class={
                this.isZeroPercent() || this.disableDecimals
                  ? "hide"
                  : "decimalText"
              }
            ></tspan>
            <tspan
              font-size={this.getDecimalSize()}
              dx="0.5ex"
              class="percentageText"
            >
              %
            </tspan>
          </text>
        </svg>
        <slot />
      </div>
    );
  }
}
