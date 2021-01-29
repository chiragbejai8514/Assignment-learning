
class todoFirst extends HTMLElement {
    constructor() {
        super();
    }

    /*on load*/
    connectedCallback() {
        this.innerHTML = `        <div class="to-do__first">
        <div class="to-do__first-title">TO-DO LIST</div>
        <button class="to-do__first-sign" onclick="myFunction()">+</button>
    </div>`;
    }
}

class todoSecond extends HTMLElement {
    constructor() {
        super();
    }

    /*on load*/
    connectedCallback() {
        this.innerHTML = ` <div class="to-do__second" id="demo">`;

    }
}


window.customElements.define('to-do-first', todoFirst);
window.customElements.define('to-do-second', todoSecond);
