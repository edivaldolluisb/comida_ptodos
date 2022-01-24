
/*Estabelecimento*/

var cancelar_reserva = window.document.querySelector('.estabelecimento_cancelar_reserva')
var finalizar_reserva = window.document.querySelector('.estabelecimento_finalizar_reserva')

finalizar_reserva.addEventListener('click', est_finalizar_reserva)
cancelar_reserva.addEventListener('click', est_cancelar_reserva)

function est_finalizar_reserva() {
    window.location = 'https://edivaldolluisb.github.io/comida_ptodos/processo_finalizado.html'
}

function est_cancelar_reserva() {
    history.go(-1)
}

