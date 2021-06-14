export default class Dropmenu {
    constructor (dropMenu) {
        this.dropMenu = dropMenu;
    }
    show() {
        this.dropMenu.classList.add('header__drop-menu_is_opened');
    }

    hide() {
        this.dropMenu.classList.remove('header__drop-menu_is_opened');
    }
}