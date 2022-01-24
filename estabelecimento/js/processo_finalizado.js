
/*Estabelecimento*/


/*
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
*/


/*fazer atualização*/

var btn_f_atualizacao = window.document.querySelector('#f_atualizacao')
var p_finalizado_succes = window.document.querySelector('#processo_finalizado_succes')


btn_f_atualizacao.addEventListener('click', f_atualizacao)

function f_atualizacao() {
    p_finalizado_succes.style.display = 'grid'
}

/*cancelar ação*/

var cancel = window.document.querySelector('#cancel')
cancel.addEventListener('click', cancel_action)
function cancel_action() {
    history.go(-2)
}
