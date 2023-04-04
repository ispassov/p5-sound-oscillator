let env, osc, amp
let attackTime = 0.1
let decayTime = 0.5
let attackLevel = 1
let decayLevel = 0
let slider1 = new Slider()
let slider2 = new Slider()

let btnPlay
let btnStop

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight)
  fill(0,255,0)
  noStroke()

  slider1.x = windowWidth / 2
  slider1.y = windowHeight / 2
  slider1.label = lerp(8000, -2480 , slider1.y / 1000).toFixed()
  slider1.suffix = 'Hz'

  slider2.x = windowWidth / 4
  slider2.y = windowHeight / 2
  slider2.label = lerp(116, -36 , slider2.y / 1000).toFixed()
  slider2.suffix = '%'

  env = new p5.Envelope()
  env.setADSR(attackTime, decayTime)
  osc = new p5.Oscillator()
  osc.amp(env)
  amp = new p5.Amplitude()
  osc.start()

  btnPlay = new Button({
		x: width / 8,	y: height / 1.1,
		width: 100,		height: 50,
		align_x: 0,		align_y: 0,
		content: 'Play', 
		on_press() {
      attackTime = 0.1
      decayTime = 300
      attackLevel = +slider2.label / 100
      decayLevel = 0
      osc.freq(+slider1.label)
      env.ramp(osc, 0, attackLevel, decayLevel)
		}
	})

  btnStop = new Button({
		x: width / 3,	y: height / 1.1,
		width: 100,		height: 50,
		align_x: 0,		align_y: 0,
		content: 'Stop', 
		on_press() {
      
		}
	})
}

function draw() {
  background(20)
  slider1.display()
  slider2.display()
  btnPlay.draw()
  btnStop.draw()
}

function mousePressed() {
  slider1.isPressed()
  slider2.isPressed()
}

function mouseDragged() {
  slider1.isDragging(8000, -2480)
  slider2.isDragging(116, -36)
}

function mouseReleased() {
  slider1.color = 0
  slider1.locked = true

  slider2.color = 0
  slider2.locked = true
}