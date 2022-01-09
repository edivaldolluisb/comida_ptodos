var abrir_menu_btn = window.document.querySelector('.abrir_menu')
var menu = window.document.querySelector('#nav')
var menu_li = window.document.querySelector('.menu_li')
var fechar_menu_btn = window.document.querySelector('.fechar_menu')


abrir_menu_btn.addEventListener("click", abrir_menu);
/*abrir*/
function abrir_menu() {
  menu.style.width = '100%'
  menu_li.style.display = 'block'

}

/*fechar*/
fechar_menu_btn.addEventListener("click", fechar_menu);

function fechar_menu() {
    menu.style.width = '0%'
    menu_li.style.display = 'none'
}