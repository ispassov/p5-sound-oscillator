class Btn {
  constructor(x, y, sizeX, sizeY, color, label) {
    this.x = x
    this.y = y
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.color = color
    this.label = label

  }

  display() {
    fill(this.color)
    rect(this.x, this.y, this.sizeX, this.sizeY, 20)
    textSize(20)
    textAlign(CENTER, CENTER)
    fill(255)
    text(this.label, this.x + (this.sizeX / 2), this.y + (this.sizeY / 2))
  }

  isPressed() {
   
    if (mouseX > this.x && mouseX < this.x + this.sizeX && mouseY > this.y && mouseY < this.y + this.sizeY) {
      return true
    }
  }
}
