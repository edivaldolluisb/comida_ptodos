
function pegar_id(clicked_id){

    console.log(clicked_id)
    /*alert(clicked_id)*/

    /* Get the text field */
    var copyText = clicked_id

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    /*("Copied the text: " + copyText);*/

    console.log("Copied the text: " + copyText);


}

/*colcar dados do cartão para pagamento*/
var sessao_pagamento = window.document.querySelector('#quantidade_pagamento')
var add_dados_card = window.document.querySelector('#adicionar_dados_cartao')
var fechar_sessao_doar = window.document.querySelector('#fechar_dados_card')

fechar_sessao_doar.addEventListener('click', fechar_sessao)

function abrir_sessao() {
    sessao_pagamento.style.display = 'flex'
    add_dados_card.style.display = 'flex'
}
function fechar_sessao() {
    sessao_pagamento.style.display = 'none'
}


