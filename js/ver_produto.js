
/*colocar como favorito*/
$(".favorito").click(function(){
    console.log('jquey a funcionar')
    $("#colocar_como_favorito").toggleClass("fas");
  });



  
/*sessões*/

var sessao = window.document.querySelector('#quantidade_pagamento')

var abrir_quantidade = window.document.querySelector('#abrir_quantidade_div')
var abrir_metodo_pagamento = window.document.querySelector('#abrir_pay_metodo_div')
var abrir_dados_cartao = window.document.querySelector('#abrir_card_select_div')


var quantidade = window.document.querySelector('#selecionar_quantidade_produto_div')
var metodo_pagamento = window.document.querySelector('#selecionar_metodo_pagamento')
var dados_cartao = window.document.querySelector('#adicionar_dados_cartao')

var fechar_quantidade = window.document.querySelector('#fechar_quantidade')
var fechar_metodo_pagamento = window.document.querySelector('#fechar_metodo_pagamento')
var fechar_dados_cartao = window.document.querySelector('#fechar_dados_card')




/*abrir*/
abrir_quantidade.addEventListener("click", abrir_quant);

function abrir_quant() {
    sessao.style.display = 'block'
    quantidade.style.display = 'flex'
}
abrir_metodo_pagamento.addEventListener("click", abrir_metodo_pag);

function abrir_metodo_pag() {
    metodo_pagamento.style.display = 'flex'
}
abrir_dados_cartao.addEventListener("click", abrir_dados_card);

function abrir_dados_card() {
    dados_cartao.style.display = 'flex'
}



/*fechar*/
fechar_quantidade.addEventListener("click", fechar_quant);

function fechar_quant() {
    sessao.style.display = 'none'
}
fechar_metodo_pagamento.addEventListener("click", fechar_metodo_pag);

function fechar_metodo_pag() {
    metodo_pagamento.style.display = 'none'
}
fechar_dados_cartao.addEventListener("click", fechar_dados_card);

function fechar_dados_card() {
    dados_cartao.style.display = 'none'
}


/*Calcular total*/

var reduzir = window.document.querySelector('.fa-minus-circle')
var aumentar = window.document.querySelector('.fa-plus-circle')
var input = window.document.querySelector('#input_prod_qt')
var output = window.document.querySelector('.preco_tot_final')

reduzir.addEventListener("click", reduzir_qt);

var valor
var preco
var preco_total
preco = parseFloat(output.innerText) 


function reduzir_qt() {

    x = parseInt(input.value)
    if (x > 0) {
        valor = x - 1
        input.value = valor
        preco_total = preco * valor

        output.innerText = preco_total
    } else {
        input.value = 0
        output.innerText = preco
    }

}
aumentar.addEventListener("click", aumentar_qt);

function aumentar_qt() {
    x = parseInt(input.value) + 1
    input.value = x

    preco_total = preco * x

    output.innerText = preco_total
}