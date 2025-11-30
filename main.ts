// Lógica de las caras (Triste o Contenta) al recibir número
radio.onReceivedNumber(function (receivedNumber) {
    // Si el recibido es mayor que el mío -> Triste
    // Si el recibido es menor que el mío -> Contenta
    // Si son iguales (empate) -> Confundido
    if (receivedNumber > miNumero) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < miNumero) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
// PARTE 1: Enviar texto con Botón A
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
// PARTE 2 (EXTRA): Juego de dados con Botón B
// Genera un número, lo muestra y lo envía
input.onButtonPressed(Button.B, function () {
    miNumero = randint(1, 6)
    basic.showNumber(miNumero)
    radio.sendNumber(miNumero)
})
let miNumero = 0
radio.setGroup(1)
