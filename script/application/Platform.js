"use strict";
class Platform {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    create() {
        return `<li class="application_list_text">
                    <img src="${this.icon}" alt="${this.name}" class="svg application_list_icon">
                    ${this.name}
                </li>`;
    }
}
