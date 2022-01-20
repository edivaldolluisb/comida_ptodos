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

if (!window.Notification) {
    console.log('Browser does not support notifications.');
} else {
    console.log('Suporta notificação')
}


console.log(Notification.permission);

if (Notification.permission === "granted") {
    console.log("we have permission");
} else if (Notification.permission !== "denied") {
    alert('Conceda permissão ao site')
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}

function showNotification(estabelecimento) {

    var x, i;
    x = document.querySelectorAll(".nome_associacao");
    

    for (i = 0; i < x.length; i++) {
        console.log(x[i].innerText)
    }


    const notification = new Notification("New message incoming", {
        body: "O seu pedido foi aceite por " + estabelecimento,
        icon: "../imagens/favicon.png"
    })
    notification.onclick = (e) => {
        window.location.href = "http://127.0.0.1:5500/associacao/pedidos.html";
    };
}
showNotification()

