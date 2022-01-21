var registar_user = window.document.getElementById('registar_user')

registar_user.addEventListener("click", function () {

    // reference to 'scripts' select list 
    // used throughout the examples below
    var sel = document.getElementById('selecionar_tipo_cliente');

    // display value property of select list (from selected option)
    /*console.log(sel.value);*/


    let tipo_de_usuario = sel.value;
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

