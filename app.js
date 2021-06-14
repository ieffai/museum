import Dropmenu from './blocks/header/__drop-menu/header__drop-menu.js';
import Menu from './blocks/header/__menu/header__menu.js';

///Плавный переход по якорным ссылкам///

$(function()   {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        let goTo = $(this).attr("href"),
        placeNow = $(goTo).offset().top;
        $('html, body').animate({scrollTop: placeNow}, 800);
    });
});



///Выпадающее меню///

const menuBlock = document.querySelector('.header__menu');
const dropMenuBlock = document.querySelector('.header__drop-menu');
const page = document.querySelector('.page');
const menu = new Menu(menuBlock);
const dropmenu = new Dropmenu(dropMenuBlock);


///Слушатели событий///

menuBlock.addEventListener('mouseover', () => {

    menu.close();
    dropmenu.hide();
    });

page.addEventListener('click', () => {
    menu.open();
    dropmenu.show();
    });
