bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.previousTrack)
})
input.onGesture(Gesture.TiltLeft, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.volumeUp)
})
input.onButtonPressed(Button.AB, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.play)
})
input.onButtonPressed(Button.B, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.nextTrack)
})
input.onGesture(Gesture.Shake, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.stop)
})
input.onGesture(Gesture.TiltRight, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.volumeDown)
})
