/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aarav Singhal
 * Created on: Dec 2025
 * This program displays neo strip with light
*/

// variables
let lightOf: number
let neoPixelStrip: neopixel.Strip = null

// clean
neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// lights
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    lightOf = input.lightLevel()
    basic.showNumber(lightOf)

    // none on
    if (lightOf <= 51) {
        neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neoPixelStrip.show()
    }

    // one on
    if (lightOf > 52) {
        neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neoPixelStrip.show()
    }

    // two on
    if (lightOf > 104) {
        neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neoPixelStrip.show()
    }

    // three on
    if (lightOf > 156) {
        neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neoPixelStrip.show()
    }

    // all on
    if (lightOf > 208) {
        neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        neoPixelStrip.show()
    }

})