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
function showNotification() {

    var x, i;
    x = document.querySelectorAll(".nome_associacao");

    for (i = 0; i < x.length; i++) {
        
        const notification = new Notification("Comida p'ra todos", {
            body: "O seu pedido foi aceite por " + x[i].innerText,
            icon: "../imagens/favicon.png"
        })
        notification.onclick = (e) => {
            window.location.href = "https://edivaldolluisb.github.io/comida_ptodos/associacao/pedidos.html";
        };
    }

}
showNotification()

