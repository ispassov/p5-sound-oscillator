let osc = new p5.Oscillator()
let slider1 = new Slider()
let slider2 = new Slider()
let button1 = new Btn(20, 600, 100, 100, [60, 60, 60], 'Play')
let button2 = new Btn(300, 600, 100, 100, [60, 60, 60], '1')


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight)
  fill(0,255,0)
  noStroke()

  slider1.x = windowWidth / 2
  slider1.y = windowHeight / 2
  slider1.start = 100
  slider1.end = windowHeight - 100
  slider1.size = 100
  slider1.color = [62, 67, 150]
  slider1.label = lerp(8000, -2480 , slider1.y / 1000).toFixed()
  slider1.suffix = 'Hz'

  slider2.x = windowWidth / 4
  slider2.y = windowHeight / 2
  slider2.start = 100
  slider2.end = windowHeight - 100
  slider2.size = 100
  slider2.color = [62, 67, 150]
  slider2.label = lerp(116, -36 , slider2.y / 1000).toFixed()
  slider2.suffix = '%'
}

function draw() {
  background(20)
  slider1.display()
  slider2.display()
  button1.display()
  button2.display()
 
}

function mousePressed() {
  slider1.isPressed()
  slider2.isPressed()

  if(button1.isPressed() && button1.label == 'Play') {
    osc.amp(+slider2.label / 100)
    osc.freq(+slider1.label)
    osc.start()
    button1.label = 'Stop'
  }else if (button1.isPressed() && button1.label == 'Stop') {
    osc.stop()
    button1.label = 'Play'
  }

  if(button2.isPressed() && button2.label == '1') {
    button2.label = '2'
  }else if (button2.isPressed() && button2.label == '2') {
    button2.label = '1'
  }
  
}



function mouseDragged() {
  slider1.isDragging(8000, -2480)
  slider2.isDragging(116, -36)
  osc.amp(+slider2.label / 100)
  osc.freq(+slider1.label)
}

function mouseReleased() {
  slider1.color = [62, 67, 150]
  slider1.locked = true

  slider2.color = [62, 67, 150]
  slider2.locked = true
}