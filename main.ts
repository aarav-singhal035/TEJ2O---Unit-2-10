/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aarav
 * Created on: Dec 2025
 * This program turns on certain amounts of light depending on the light level
*/

let lightvalue: number
lightvalue = input.lightLevel()
let neopixelStrip: neopixel.Strip = null

// Clean up
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // On button A
    lightvalue = input.lightLevel()
    if (lightvalue <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showString('0')
    }

    if (lightvalue >= 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        basic.showString('1')
    }

    if (lightvalue >= 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        basic.showString('2')
    }

    if (lightvalue >= 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        basic.showString('3')
    }

    if (lightvalue >= 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
        neopixelStrip.show()
        basic.showString('4')
    }
})

input.onButtonPressed(Button.B, function () {
    // On button B
    basic.clearScreen()
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})