export class Camera {
  altitude = 0;
  jumpCounter = 0;
  movingFwd = false;
  movingBack = false;
  turningLeft = false;
  turningRight = false;
  x = 0;
  y = 0;
  t = 0;

  constructor(position) {
    this.x = position.x;
    this.y = position.y;
    this.t = position.t;
  }
}