
//params options =[{}]
(function (window, document, undefined) {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    .custom-select{
        display: inline-block;
        position: relative;
        cursor: pointer;
        min-width: 100px;
        border: 0.5px solid #000;
        border-radius: 4px;
    }

    .custom-select__selected-option{
        padding: 5px; 
    }

    .custom-select__selected-option:before {
        content: ' ';
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10.5px;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #000;
    }

    .custom-select__options{
        position: absolute;
        width: 100%;
        visibility:hidden;
    }

    .custom-select__option{
        padding: 5px;
        border: 1px solid #9E9E9E;
        border-radius: 3px;
        transition:0.3s background;
    }

    .custom-select__option:hover{
        background:lightblue;
    }

    .custom-select--active__options{
        visibility:visible;
    }
    </style>
    <div class="custom-select">
        <div class="custom-select__selected-option">Select...</div>
        <div class="custom-select__options">
        </div>
    </div>
`;

    class CustomSelect extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        /*on load*/
        connectedCallback() {
            this._initElementsReference();
            this._registerEvents();
        }

        /*on destroy*/
        disconnectedCallback() { }

        /*setters and getters */

        set options(options) {
            this._options = options;
            this._populateDropdownOptions();
            this._option = this.shadowRoot.querySelectorAll('.custom-select__option');
            this._option.forEach(option => {
                option.addEventListener('click', (event) => { this._handleOptionClick(event) }, false);
            });
            this._setDisplayValue('Select...');
        }

        // get options() {
        //     return this.options.filters(option => option.id !== 'reptile');
        // }

        _initElementsReference() {
            this._selectedOption = this.shadowRoot.querySelector('.custom-select__selected-option');
            this._optionsHolder = this.shadowRoot.querySelector('.custom-select__options');
        }

        _registerEvents() {
            this._selectedOption.addEventListener('click', (event) => { this._handleSelectedOptionClick(event) }, false);
        }

        /* event handler functions */
        _handleSelectedOptionClick(event) {
            this._optionsHolder.classList.toggle('custom-select--active__options');
        }

        _handleOptionClick(event) {
            this._optionsHolder.classList.remove('custom-select--active__options');
            this._setDisplayValue(event.target.innerHTML);
            this.dispatchEvent(new CustomEvent('optionselected', {
                detail: {
                    value: event.target.textContent
                },
                bubbles: true,
                composed: true
            }));
        }

        _populateDropdownOptions() {
            this._optionsHolder.innerHTML = this._options.map(option => {
                return `<div class="custom-select__option" id="${option.id}">${option.name}</div>`;
            }).join('');
        }

        _setDisplayValue(displayValue) {
            this._selectedOption.innerHTML = displayValue;
        }
    }

    let customElementRegistry = window.customElements;
    customElementRegistry.define('custom-select', CustomSelect);
})(window, document, undefined);
