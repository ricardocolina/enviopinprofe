let coord_x = 0
let coord_y = 0
let envio = ""
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    coord_x = randint(0, 4)
    coord_y = randint(0, 4)
    led.plot(coord_x, coord_y)
    envio = "" + coord_x + coord_y
    radio.sendString(envio)
    radio.setGroup(parseFloat(envio))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
