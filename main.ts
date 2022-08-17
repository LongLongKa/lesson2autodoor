let distance = 0
basic.showIcon(IconNames.Angry)
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
basic.forever(function () {
    distance = microIoT.ultraSonic(PIN.P1, PIN.P2)
    microIoT.microIoT_showUserNumber(1, distance)
    basic.pause(200)
    if (distance <= 60 && distance != 0) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
        basic.pause(1000)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        basic.pause(200)
    }
})
