import chroma from "chroma-js";
import {removeUndef} from "../remove-undefined.ts";
import {PIXEL_RATIO} from "../pixel-ratio.ts";
import {DeepOptional} from "deep-utility-types";
import {observeResize} from "../observe-resize.ts";
import merge from "ts-deepmerge";

type StatsOptions = {
  color: string;
  lineThickness: number;
  background: boolean;
  backgroundColor?: string;
  graphStyle: "line" | "filled" | "gradient",
  width: number;
  height: number;
  bufferLengthSeconds: number;
  autoAddToDom: boolean;
  autoRender: boolean;
  min?: number;
  max?: number;
  position: (
    | { top: number; left: number; }
    | { top: number; right: number; }
    | { bottom: number; left: number; }
    | { bottom: number; right: number; }
    )
}

const DEFAULT_STATS_OPTIONS: StatsOptions = {
  color: "green",
  graphStyle: "gradient",
  lineThickness: 2,
  background: false,
  width: 300,
  height: 100,
  bufferLengthSeconds: 5,
  autoAddToDom: true,
  autoRender: true,
  position: {top: 0, left: 0}
}

export type GraphStyleOptions = {
  fill: "gradient" | "solid" | "none",
  color: string,
  lineThickness: number,
  interpolation: "linear" | "step",
};

type FullGraphOptions = {
  style: GraphStyleOptions,
  autoRender: boolean,
  bounds: {
    y?: {
      min?: number,
      max?: number,
    },
    x?: {
      min?: number,
      max?: number,
    }
  } | undefined,
}

export type GraphOptions = DeepOptional<FullGraphOptions, (
  | "style"
  | `style.color`
  | `style.fill`
  | `style.lineThickness`
  | `style.interpolation`
  | "autoRender"
  | "bounds"
  )>;

const DEFAULT_GRAPH_OPTIONS: FullGraphOptions = {
  autoRender: true,
  bounds: undefined,
  style: {
    fill: "gradient",
    color: "red",
    lineThickness: 2,
    interpolation: "linear",
  }
}

export type CoordinatesMapper = (data: [number, number]) => [number, number];

export class Graph {
  protected options: FullGraphOptions;
  protected height: number = 0;
  protected width: number = 0;
  protected data: Array<[number, number]> = [];
  private context: CanvasRenderingContext2D;
  private animationFrame: number | null = null;
  private disposeResizeObserver: Dispose | null = null;
  private gradient: CanvasGradient;

  constructor(options?: GraphOptions) {
    this.options = merge(DEFAULT_GRAPH_OPTIONS, options ?? {}) as FullGraphOptions;
    this.context = this.createCanvas();

    this.handleResize(this.context.canvas);
    observeResize(this.context.canvas, this.handleResize.bind(this));

    this.gradient = this.createGradient();

    if (this.options.autoRender) {
      this.handleAnimationFrame();
    }
  }

  public get canvas() {
    return this.context.canvas;
  }

  public update(x: number, y: number) {
    this.data.push([x, y]);
  }

  public dispose() {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }

    this.disposeResizeObserver?.();
    this.disposeResizeObserver = null;
  }

  public render() {
    // Clear
    this.context.clearRect(0, 0, this.width, this.height);

    if (this.data.length === 0) {
      return;
    }

    // Draw Graph
    this.context.strokeStyle = this.options.style.color;
    this.context.lineWidth = this.options.style.lineThickness;
    this.context.beginPath();

    const dataToCanvasCoordinates = this.createDataToCanvasCoordinates();

    let firstCoords = dataToCanvasCoordinates(this.data[0] ?? [0, 0]);
    let lastCoords = dataToCanvasCoordinates(this.data[this.data.length - 1] ?? [0, 0]);

    // Line
    let prevY: number | null = null;

    for (let i = 0; i < this.data.length; i++) {
      const [x, y] = dataToCanvasCoordinates(this.data[i]!);

      if (prevY !== null && this.options.style.interpolation === "step") {
        this.context.lineTo(x, prevY);
      }

      this.context.lineTo(x, y);

      prevY = y;
    }

    this.context.stroke();
    // Fill
    if (this.options.style.fill !== "none") {
      this.context.beginPath();
      this.context.lineTo(firstCoords[0], this.height);

      prevY = null;

      for (let i = 0; i < this.data.length; i++) {
        const [x, y] = dataToCanvasCoordinates(this.data[i]!);

        if (prevY !== null && this.options.style.interpolation === "step") {
          this.context.lineTo(x, prevY);
        }

        this.context.lineTo(x, y);

        prevY = y;
      }

      this.context.lineTo(lastCoords[0], this.height);

      this.context.fillStyle = this.options.style.fill === "gradient"
        ? this.gradient
        : this.options.style.color;
      this.context.fill();
    }
  }

  protected createDataToCanvasCoordinates(): CoordinatesMapper {
    const findDataMinX = () => this.data.length > 0 ? Math.min(...this.data.map(([x,]) => x)) : -1;
    const findDataMaxX = () => this.data.length > 0 ? Math.max(...this.data.map(([x,]) => x)) : 1;
    const findDataMinY = () => this.data.length > 0 ? Math.min(...this.data.map(([, y]) => y)) : -1;
    const findDataMaxY = () => this.data.length > 0 ? Math.max(...this.data.map(([, y]) => y)) : 1;

    const minX = this.options.bounds?.x?.min ?? findDataMinX();
    const maxX = this.options.bounds?.x?.max ?? findDataMaxX();
    const minY = this.options.bounds?.y?.min ?? findDataMinY();
    const maxY = this.options.bounds?.y?.max ?? findDataMaxY();

    const xRange = maxX - minX;
    const yRange = maxY - minY;

    const xFactor = this.width / xRange;
    const yFactor = this.height / yRange;

    return (
      data: [number, number],
    ): [number, number] => {
      const [x, y] = data;
      const xScaled = (x - minX) * xFactor;
      const yScaled = (y - minY) * yFactor;

      return [
        xScaled,
        this.height - yScaled
      ];
    };
  }


  private handleAnimationFrame() {
    this.render();
    this.animationFrame = requestAnimationFrame(this.handleAnimationFrame.bind(this));
  }

  private createCanvas(): CanvasRenderingContext2D {
    const canvasElement = document.createElement("canvas");
    const canvasContext = canvasElement.getContext("2d");

    if (canvasContext === null) {
      throw new Error("Canvas context could not be created.");
    }

    return canvasContext;
  }

  private handleResize(canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();

    const unscaledWidth = rect.width;
    const unscaledHeight = rect.height;

    const scaledWidth = unscaledWidth * PIXEL_RATIO;
    const scaledHeight = unscaledHeight * PIXEL_RATIO;

    canvas.width = scaledWidth;
    canvas.height = scaledHeight;

    canvas.style.width = `${unscaledWidth}px`;
    canvas.style.height = `${unscaledHeight}px`;

    this.width = scaledWidth;
    this.height = scaledHeight;

    this.gradient = this.createGradient();
  }

  private createGradient(): CanvasGradient {
    const gradient = this.context.createLinearGradient(
      0,
      0,
      0,
      this.height,
    );

    const chromeGraphColor = chroma(this.options.style.color);

    gradient.addColorStop(0, chromeGraphColor.alpha(0.75).css());
    gradient.addColorStop(1, chromeGraphColor.alpha(0).css());

    return gradient;
  }
}

type FullTimeGraphOptions = Omit<FullGraphOptions, "bounds"> & {
  bounds: {
    y?: {
      min?: number,
      max?: number,
    },
    timeMs: number
  },
}

export type TimeGraphOptions = Omit<GraphOptions, "bounds"> & {
  bounds?: {
    y?: {
      min?: number,
      max?: number,
    },
    timeMs?: number
  },
}

const DEFAULT_TIME_GRAPH_OPTIONS: FullTimeGraphOptions = {
  ...DEFAULT_GRAPH_OPTIONS,
  bounds: {
    timeMs: 5 * 1000,
  }
}

export class TimeGraph extends Graph {
  private timeOptions: FullTimeGraphOptions;

  constructor(options?: TimeGraphOptions) {
    super({
      ...options,
      bounds: {
        y: options?.bounds?.y,
      }
    } as FullGraphOptions);

    this.timeOptions = merge(DEFAULT_TIME_GRAPH_OPTIONS, options ?? {}) as FullTimeGraphOptions;
  }

  public update(timeMs: number, value: number) {
    while (this.data.length > 1 && this.data[1]![0] < timeMs - this.timeOptions.bounds.timeMs) {
      this.data.shift();
    }

    super.update(timeMs, value);
  }

  protected createDataToCanvasCoordinates(): CoordinatesMapper {
    const now = performance.now();

    const findDataMinY = () => this.data.length > 0 ? Math.min(...this.data.map(([, y]) => y)) : -1;
    const findDataMaxY = () => this.data.length > 0 ? Math.max(...this.data.map(([, y]) => y)) : 1;

    const minX = now - this.timeOptions.bounds.timeMs;
    const maxX = now;
    const minY = this.options.bounds?.y?.min ?? findDataMinY();
    const maxY = this.options.bounds?.y?.max ?? findDataMaxY();

    const xRange = Math.max(maxX - minX, 1);
    const yRange = Math.max(maxY - minY, 1);

    const xFactor = this.width / xRange;
    const yFactor = this.height / yRange;

    return (
      data: [number, number],
    ): [number, number] => {
      const [x, y] = data;
      const xScaled = (x - minX) * xFactor;
      const yScaled = (y - minY) * yFactor;

      return [
        xScaled,
        this.height - yScaled
      ];
    }
  }
}

export class StopwatchGraph extends TimeGraph {
  private startTime: number | null = null;

  public start() {
    this.startTime = performance.now();
  }

  public stop() {
    if (this.startTime === null) {
      throw new Error("Stopwatch is not running.");
    }

    const endTime = performance.now();
    const deltaTime = endTime - this.startTime;

    this.update(endTime, deltaTime);
  }
}

export class FrequencyGraph extends TimeGraph {
  private sampleSize: number = 2;
  private unitMs: number = 1000;

  private samples: Array<[number, number]> = [];
  private currentFps: number | null = null;

  public measure() {
    const now = performance.now();

    this.samples.push([now, 0]);

    if (this.samples.length >= this.sampleSize) {
      const first = this.samples[0]!;
      const last = this.samples[this.samples.length - 1]!;

      const timeDelta = last[0] - first[0];
      const frequency = (this.samples.length / timeDelta) * this.unitMs;

      this.currentFps = frequency;
      this.samples = [];
    }

    if (this.currentFps !== null) {
      this.update(now, this.currentFps);
    }
  }
}

export class GraphOld {
  public options: StatsOptions;
  public data: Array<[number, number]> = [];

  private context: CanvasRenderingContext2D;
  private readonly deviceWidth: number;
  private readonly deviceHeight: number;
  private readonly gradient: CanvasGradient;

  constructor(options?: Partial<StatsOptions>) {
    this.options = {
      ...DEFAULT_STATS_OPTIONS,
      ...removeUndef(options),
    };

    if (this.options?.background && this.options.backgroundColor === undefined) {
      const chromeGraphColor = chroma(this.options.color);
      this.options.backgroundColor = chromeGraphColor.darken(1.5).css();
    }

    this.deviceWidth = this.options.width * PIXEL_RATIO;
    this.deviceHeight = this.options.height * PIXEL_RATIO;

    const canvas = this.createCanvasElement();
    if (this.options.autoAddToDom) {
      document.body.appendChild(canvas);
    }

    this.context = this.createCanvasContext(canvas);
    this.gradient = this.createGradient();

    if (this.options.autoRender) {
      this.onAnimationFrame();
    }
  }

  public update(x: number, y: number) {
    while (this.data.length > 1 && this.data[1]![0] < x - this.options.bufferLengthSeconds * 1000) {
      this.data.shift();
    }

    this.data.push([x, y]);
  }

  private onAnimationFrame() {
    this.draw();
    requestAnimationFrame(this.onAnimationFrame.bind(this));
  }

  private createCanvasElement(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");

    canvas.width = this.deviceWidth;
    canvas.height = this.deviceHeight;
    canvas.style.width = `${this.deviceWidth / PIXEL_RATIO}px`;
    canvas.style.height = `${this.deviceHeight / PIXEL_RATIO}px`;
    canvas.style.position = "fixed";
    canvas.style.zIndex = "10000";

    if ("top" in this.options.position) {
      canvas.style.top = `${this.options.position.top}px`;
    }
    if ("bottom" in this.options.position) {
      canvas.style.bottom = `${this.options.position.bottom}px`;
    }
    if ("left" in this.options.position) {
      canvas.style.left = `${this.options.position.left}px`;
    }
    if ("right" in this.options.position) {
      canvas.style.right = `${this.options.position.right}px`;
    }

    return canvas;
  }

  private createCanvasContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");

    if (context === null) {
      throw new Error("Canvas context could not be created.");
    }

    context.font = `bold ${12 * PIXEL_RATIO}px monospace`;

    return context;
  }

  private createGradient(): CanvasGradient {
    const gradient = this.context.createLinearGradient(
      0,
      0,
      0,
      this.deviceHeight,
    );

    const chromeGraphColor = chroma(this.options.color);

    gradient.addColorStop(0, chromeGraphColor.alpha(1).css());
    gradient.addColorStop(1, chromeGraphColor.alpha(0).css());

    return gradient;
  }

  draw() {
    this.context.clearRect(0, 0, this.deviceWidth, this.deviceHeight);

    this.context.beginPath();
    this.context.strokeStyle = this.options.color;
    this.context.lineWidth = this.options.lineThickness * PIXEL_RATIO;

    const yValues = this.data.map(([, y]) => y);

    let minY = this.options.min;
    if (yValues.length > 0) minY ??= Math.min(...yValues);
    minY ??= 0;

    let maxY = this.options.max;
    if (yValues.length > 0) maxY ??= Math.max(...yValues);
    maxY ??= 1;

    const range = maxY - minY;

    const paddingX = 0;
    const paddingY = 10;
    const width = this.deviceWidth - (paddingX * 2);
    const height = this.deviceHeight - (paddingY * 2);

    const scaling = (height - this.context.lineWidth * 2) / range;

    let lastX = 0;
    let lastY = 0;

    if (this.data.length > 0) {
      const now = performance.now();
      for (let i = this.data.length - 1; i >= 0; i--) {
        const [xData, yData] = this.data[i]!;

        const x = (1 - (((now - xData) / 1000) / this.options.bufferLengthSeconds)) * width;
        const y = -paddingY + this.deviceHeight - ((yData ?? 0) - minY) * scaling - this.context.lineWidth;

        if (i === this.data.length - 1) {
          this.context.moveTo(
            width,
            y,
          );
        }

        this.context.lineTo(
          x,
          y,
        );

        lastX = x;
        lastY = y;
      }

      if (this.options.graphStyle !== "line") {
        this.context.lineTo(
          lastX - this.context.lineWidth,
          lastY,
        );
        this.context.lineTo(
          lastX - this.context.lineWidth,
          this.deviceHeight + this.context.lineWidth,
        );
        this.context.lineTo(
          this.deviceWidth + this.context.lineWidth,
          this.deviceHeight + this.context.lineWidth,
        );
        this.context.lineTo(
          this.deviceWidth + this.context.lineWidth,
          lastY,
        );
      }

      this.context.fillStyle = this.options.graphStyle === "gradient"
        ? this.gradient
        : this.options.color;

      this.context.stroke();
      if (this.options.graphStyle !== "line") {
        this.context.fill()
        this.context.clearRect(
          lastX - this.context.lineWidth * 2,
          0,
          this.context.lineWidth * 2,
          this.deviceHeight,
        );
      }
    }
  }
}