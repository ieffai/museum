export default class Menu {
    constructor (menu) {
        this.menu = menu;
    }

    open() {
        this.menu.classList.add('header__menu_is_opened');
    }

    close() {
        this.menu.classList.remove('header__menu_is_opened');
    }
}