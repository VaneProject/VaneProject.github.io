class Platform {
    constructor(
        private name: string,
        private icon: string
    ) {}

    public create(): string {
        return `<li class="application_list_text">
                    <img src="${this.icon}" alt="${this.name}" class="svg application_list_icon">
                    ${this.name}
                </li>`
    }
}