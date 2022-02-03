
/*pedidos e doações*/

var pedido_btn = window.document.querySelector('#pedidos_doacoes').querySelectorAll('button')[0]
var doacao_btn = window.document.querySelector('#pedidos_doacoes').querySelectorAll('button')[1]

var sessao_pedidos = window.document.querySelector('#listar_produtos')
var sessao_doacao = window.document.querySelector('#listar_doacoes')

pedido_btn.addEventListener('click', pedido)
doacao_btn.addEventListener('click', doacao)

function pedido() {
    console.log('pedido')
    sessao_doacao.style.display = 'none'
    sessao_pedidos.style.display = 'block'
}

function doacao() {
    console.log('doacao')
    sessao_pedidos.style.display = 'none'
    sessao_doacao.style.display = 'block'
}



/*notificação*/

/* verificar se o browser suporta notificação*/
if (!window.Notification) {
    console.log('Browser does not support notifications.');
} else {
    console.log('Suporta notificação')
}

/*pedir permissão*/
console.log(Notification.permission);

if (Notification.permission === "granted") {
    console.log("we have permission");
} else if (Notification.permission !== "denied") {
    alert('Conceda permissão ao site')
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}

/*mostrar notificação */
function showNotification(paragrafo, mensagem) {
    
    var x, i;
    /* x = document.querySelectorAll(".nome_estabelecimento"); */
    x = paragrafo;

    for (i = 0; i < x.length; i++) {
        
        const notification = new Notification("Comida p'ra todos", {
            body: mensagem + x[i].innerText,
            icon: "../imagens/favicon.png"
        })
        notification.onclick = (e) => {
            window.location.href = "https://edivaldolluisb.github.io/comida_ptodos/associacao/pedidos.html";
        };
    } 

}
showNotification(paragrafo = document.querySelectorAll(".nome_estabelecimento"), mensagem = "O seu pedido foi aceite por " )

showNotification(paragrafo = document.querySelectorAll(".doacao_recebida"), mensagem = "Você recebeu uma doação de" )





/*function myFunction() {
    var x, i;
    x = document.querySelectorAll(".example");
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
    }
  }*/

/*
console.log(Notification.permission);

if (Notification.permission === "granted") {
    alert("we have permission");
} else if (Notification.permission !== "denied") {
    alert('Conceda permissão ao site')
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}
*/

/*
function myFunction() {
    var x, i;
    x = document.querySelectorAll(".nome_associacao");
    

    for (i = 0; i < x.length; i++) {

        x[i].style.backgroundColor = "red";
        console.log(x[i].innerText)
    }
}
myFunction()*/



