input.onGesture(Gesture.Shake, function () {
    colorbit_51bit.showRainbow(1, 360)
    radio.sendNumber(1)
    basic.pause(2000)
    colorbit_51bit.clear()
})
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(7)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.clear()
basic.forever(function () {
	
})
