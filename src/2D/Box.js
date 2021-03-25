export default class Box {

  width = null
  height = null
  id = ""
  x = 0
  y = 0
  packed = false

  constructor(width, height, id) {
    this.width = width;
    this.height = height;
    this.id = id;
  }

  rotate() {
    let { width, height } = this;
    this.width = height;
    this.height = width;
  }

  get label() {
    return `${id}: ${this.width}x${this.height} at [${this.x},${this.y}]`;
  }

  get area() {
    return this.width * this.height;
  }

}
