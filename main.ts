/**
 * number sent means :
 * 
 * 0 = stop DC motors & set Servos to 90°
 * 
 * 1 = set motor M1B to speed of 64
 * 
 * 2 = set servo1 & servo 8 to random posistions
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(80)
basic.showIcon(IconNames.Heart)
