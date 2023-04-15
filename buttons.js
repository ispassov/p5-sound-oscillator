class Btn {
  constructor(x, y, size, color, label) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.label = label
  }

  display() {
    fill(this.color)
    circle(this.x, this.y, this.size)
    textSize(20)
    fill(255)
    text(this.label, this.x, this.y)
  }

  isPressed() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      return true
    }else {
      return false
    }
  }
}
