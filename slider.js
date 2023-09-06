class Slider {
  constructor(x, y, start, end, size, locked, color, opacity, label, suffix) {
    this.x = x
    this.y = y
    this.start = start
    this.end = end
    this.size = size
    this.locked = true
    this.color = color
    this.opacity = opacity
    this.label = label
    this.suffix = suffix
  }

  display() {
    this.color = [134, 141, 251, this.opacity]
    fill(this.color)
    stroke(195, 198, 253)
    line(this.x, this.start, this.x, this.end)
    circle(this.x, this.y, this.size)
    textSize(20)
    textAlign(CENTER, CENTER)
    fill(255)
    text(`${this.label} ${this.suffix}`, this.x, this.y)
  }

  isPressed() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      this.color = [134, 141, 251, this.opacity]
      this.locked = false
    }
  }

  isDragging(min, max) {
    if (!this.locked && mouseY > this.start && mouseY < this.end) {
      this.y = mouseY
      this.opacity = lerp(255, 0 , this.y / 610)
      this.color = [134, 141, 251, this.opacity]
      this.label = lerp(min, max , this.y / 1000).toFixed()
    }
  }
}