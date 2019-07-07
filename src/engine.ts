enum DOTS_STYLE {
  COLOR = '#111',
  WIDTH = 15,
  HEIGHT = 15,
  MARGIN = 3,
}

declare type Axis = {
  x: number,
  y: number,
};

export class GameOfLifeEngine {
  axis: Axis;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(axis: Axis) {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');

    if (ctx) {
      cvs.width = this.getCoordinateX(axis.x + 1) + DOTS_STYLE.MARGIN;
      cvs.height = this.getCoordinateY(axis.y + 1) + DOTS_STYLE.MARGIN;
      ctx.fillStyle = DOTS_STYLE.COLOR;

      this.axis = axis;
      this.canvas = cvs;
      this.context = ctx;
    } else {
      throw 'Failed to create context';
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getCoordinateX(x: number) {
    return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
  }

  getCoordinateY(y: number) {
    return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
  }

  drawDot(x: number, y: number) {
    this.context.fillRect(
      this.getCoordinateX(x),
      this.getCoordinateY(y),
      DOTS_STYLE.WIDTH,
      DOTS_STYLE.HEIGHT,
    );
  }

  draw1D(arr: Array<boolean>) {
    this.clear();
    arr.forEach((yn, i) => (
      yn && this.drawDot(i, 0)
    ));
  }

  draw2D(arr1: Array<Array<boolean>>) {
    this.clear();
    arr1.forEach((arr2, i) => {
      arr2.forEach((yn, j) => (
        yn && this.drawDot(j, i)
      ));
    });
  }
}
