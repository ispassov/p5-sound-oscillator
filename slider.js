class Slider {
  constructor(x, y, size, locked, color, label, suffix) {
    this.x = x
    this.y = y
    this.size = 100
    this.locked = true
    this.color = 0
    this.label = label
    this.suffix = suffix
  }

  display() {
    fill(this.color)
    stroke(255)
    line(this.x, 100, this.x, windowHeight - 100)
    circle(this.x, this.y, this.size)
    textSize(20)
    fill(255)
    text(`${this.label} ${this.suffix}`, this.x, this.y)
  }

  isPressed() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      this.locked = false
    }
  }

  isDragging(min, max) {
    if (!this.locked && mouseY > 100 && mouseY < windowHeight - 100) {
      this.y = mouseY
      this.color = 75
      this.label = lerp(min, max , this.y / 1000).toFixed()
    }
  }
}