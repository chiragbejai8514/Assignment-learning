class todo {




}
class todoCustom extends HTMLElement {
    constructor() {

    }

    /*on load*/
    connectedCallback() {
        this.innerHTML = ``;

    }

    /*on destroy*/
    disconnectedCallback() { }

    /*setters and getters */


}
window.customElements.define('to-do', todoCustom);