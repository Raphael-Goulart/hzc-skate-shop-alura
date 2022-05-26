const botaoMenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => { //adicionado um evento de clique no menu lateral
    menu.classList.toggle('menu_lateral--ativo')
})