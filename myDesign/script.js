function loadData() {
    //container-menu
    class menu extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<div class="container-menu">
        <div class="container-menu__items__item" style="border-bottom: 1px solid #ccc">
            Chirag
        </div>
        <container-menu-items></container-menu-items>           
        <div class="container-menu__items__upgrade">
            Upgrade Now
        </div>
    </div>`;
        }
    }

    class menuItemContainer extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `   <div class="container-menu__items">
        <container-menu-item item="DashBoard"></container-menu-item>
        <container-menu-item item="User Profile"></container-menu-item>
        <container-menu-item item="Table List"></container-menu-item>
        <container-menu-item item="Icons"></container-menu-item>
    </div>`;
        }
    }

    class menuItem extends HTMLElement {
        connectedCallback() {
            var item = this.getAttribute("item");
            this.innerHTML = `<div class="container-menu__items__item">${item}</div>`;
        }
    }

    ///////content-body
    class contentBody extends HTMLElement {
        connectedCallback() {
            this.innerHTML = ` <div class="container-content">
        <container-content-status></container-content-status>
        <container-content-updates></container-content-updates>
    </div>`;
        }
    }

    /////content-first
    class contentStatus extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<div class="container-content__status-container">
        <container-content-status-box status="Used space" second="49/50GB" third="#9c27b0" fourth="Get more space"></container-content-status-box>
        <container-content-status-box status="Revenue" second="$34,245" third="#9c27b0" fourth="Last 24 hours"></container-content-status-box>
        <container-content-status-box status="Fixed Issue " second="$75" third="#9c27b0" fourth="Taken from github"></container-content-status-box>
        <container-content-status-box status="Followers" second="+245" third="#9c27b0" fourth="Just updated"></container-content-status-box>
    </div>`;
        }
    }

    class contentFirstBox extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `    <div class="container-content__status">
        <div class="container-content__status-nameAndpic">
            <div class="container-content__status-image" style="background-image: url(images/pic5.jpg);   "></div>
            <div class="container-content__status-title">${this.getAttribute("first")}</div>
        </div>
        <div class="container-content__status-valueAndtaken" style="display:block">
            <div class="container-content__status-value">${this.getAttribute("second")}</div>
            <div class="container-content__status-taken" style="color:${this.getAttribute("third")}">${this.getAttribute("fourth")}</div>
        </div>
    </div>`;
        }
    }

    ///////content-2
    class contentUpdates extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<div class="container-content__updates ">
        <container-content-updates-box info1="Daily sales" info2="55% increase in today sales." info3="Updated 4 minutes ago"></container-content-updates-box>
        <container-content-updates-box info1="Email Subscriptions" info2="Last campaign sent 2 days ago" info3="compaign sent 2 days ago"></container-content-updates-box>
        <container-content-updates-box info1="Completed task" info2="Last campaign performed" info3="compaign sent 2 days ago"></container-content-updates-box>
    </div>`;
        }
    }

    class contentUpdatesBox extends HTMLElement {
        connectedCallback() {
            var info1 = this.getAttribute("info1");
            var info3 = this.getAttribute("info2");
            var info2 = this.getAttribute("info3");
            this.innerHTML = `       <div class=container-content__updates__body ">
            <div class=container-content__updates__body-image " style="background-image: url(images/pic1.jpg); "></div>
            <div class="container-content-second-part__sub ">
                <div class=container-content__updates__body-name ">${this.getAttribute("info1")}</div>
                <div class=container-content__updates__body-status ">${this.getAttribute("info2")}</div>
            </div>
            <div class=container-content__updates__third-text ">${this.getAttribute("info3")}</div>
        </div>`;
        }
    }


    //menu
    customElements.define('container-menu', menu);//1-whole menu
    customElements.define('container-menu-items', menuItemContainer);//2-menu container
    customElements.define('container-menu-item', menuItem);//3-each menu item

    //content
    customElements.define('container-content', contentBody);

    // //content-1
    customElements.define('container-content-status', contentStatus);
    customElements.define('container-content-status-box', contentFirstBox);

    // //content-2
    customElements.define('container-content-updates', contentUpdates);
    customElements.define('container-content-updates-box', contentUpdatesBox);

}
