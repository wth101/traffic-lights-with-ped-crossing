input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    // Microbit at  90 angle on stop bit
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.LoopingInBackground)
    basic.pause(5000)
    music.stopAllSounds()
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
})
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
