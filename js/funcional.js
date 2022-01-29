var registar_user = window.document.getElementById('registar_user')

registar_user.addEventListener("click", function () {

    // reference to 'scripts' select list 
    // used throughout the examples below
    var sel = document.getElementById('selecionar_tipo_cliente');

    // display value property of select list (from selected option)
    /*console.log(sel.value);*/


    let tipo_de_usuario = sel.value;
    /*switch (tipo_de_usuario) {
        case 'cliente_comum':
            console.log('tipo de usuario(cliente_comum)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/reservas_categoria.html'
            break;
        case 'estabelecimento':
            console.log('tipo de usuario(estabelecimento)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/estabelecimento/estabelecimento_index.html'
            break;
        case 'associacao_social':
            console.log('tipo de usuario(associacao_social)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/associacao/reservas_categoria.html'
            break;

    }*/

    var nome_comp = window.document.querySelector('input[type=text]').value
    var email = window.document.querySelector('input[type=email]').value
    var nif = window.document.querySelector('input[type=number]').value
    var _password = window.document.querySelectorAll('input[type=password]')[0].value
    var password_cof = window.document.querySelectorAll('input[type=password]')[1].value
    console.log(nome_comp)
    console.log(email)
    console.log(nif)
    console.log(_password)
    console.log(password_cof)
    console.log(sel.value)

    user = {
        nome: nome_comp,
        email: email,
        nif: nif,
        password: password_cof,
        tipo: sel.value
    }
   /* localStorage.clear()*/
    localStorage.user = JSON.stringify(user)
    usuario = JSON.parse(localStorage.user)
    console.log(usuario.nome)

    /*enviar para outra página*/
    switch (tipo_de_usuario) {
        case 'cliente_comum':
            console.log('tipo de usuario(cliente_comum)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/reservas_categoria.html'
            break;
        case 'estabelecimento':
            console.log('tipo de usuario(estabelecimento)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/estabelecimento/estabelecimento_index.html'
            break;
        case 'associacao_social':
            console.log('tipo de usuario(associacao_social)')
            window.location = 'https://edivaldolluisb.github.io/comida_ptodos/associacao/reservas_categoria.html'
            break;

    }



});


