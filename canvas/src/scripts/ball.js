const img = new Image();
img.src = "./images/balle.png";
export default class Ball {
  constructor(x, y, deltaX, deltaY) {
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }
  move(canvas) {
    const posX = this.x + this.deltaX;
    const posY = this.y + this.deltaY;
    if (posX >= canvas.width - img.width || posX <= -Math.abs(this.deltaX)) {
      this.deltaX = -this.deltaX;
    }
    if (posY >= canvas.height - img.height || posY <= -Math.abs(this.deltaY)) {
      this.deltaY = -this.deltaY;
    }
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
  }
  draw(context) {
    context.drawImage(img, this.x, this.y);
  }
  collisionWith(obstacle) {
    let P1 = {
      x: Math.max(obstacle.x, this.x),
      y: Math.max(obstacle.y, this.y),
    };
    let P2 = {
      x: Math.min(obstacle.x + obstacle.width, this.x + img.width),
      y: Math.min(obstacle.y + obstacle.height, this.y + img.height),
    };
    if (P1.x < P2.x && P1.y < P2.y) {
      return true;
    }
    return false;
  }
  static get image() {
    return img;
  }
}
