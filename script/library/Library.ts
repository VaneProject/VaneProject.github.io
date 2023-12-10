class Library {
    constructor(
        private title: string,
        private eng_title: string,
        private jap_title: string,

        private content: string,
        private eng_content: string,
        private jap_content: string,

        public isPublic: boolean,
        public githubUrl: string,
        public languages: LanguageType[],
        public developers: Developer[],

        private web: string,
    ) {}

    private languageTypes: string[] = Object.keys(LanguageType);
    private getValue(type: LanguageType): string | undefined {
        const value: string|undefined = this.languageTypes.find((k: string): boolean =>
            LanguageType[k as keyof typeof LanguageType] === type)
        if (value === undefined) return ''
        else return `<span>${value}</span>`;
    }

    private getKey(type: LanguageType): string {
        if (type === undefined) return '';
        else return `<span class="library_language" style="background-color: ${type}"></span>`;
    }

    public getTitle(local: Local): string {
        switch (local) {
            case Local.KOR: return this.title;
            case Local.ENG: return this.eng_title;
            case Local.JAP: return this.jap_title;
        }
    }

    public getContent(local: Local): string {
        switch (local) {
            case Local.KOR: return this.content;
            case Local.ENG: return this.eng_content;
            case Local.JAP: return this.jap_content;
        }
    }

    public create(local: Local): string {
        const url_style: string[] = [
            "display: flex",
            "flex-direction: row",
            "flex-wrap: wrap",
            "margin: 0",
            "padding: 0",
            "align-items : center"
        ]
        let developer: string = '';
        let language: string = '';
        for (const d of this.developers) developer += d.create();
        for (const lang of this.languages) language += `
            <li class="application_list_text">
                ${this.getKey(lang)}
                ${this.getValue(lang)}
            </li>`;
        return `
            <div class="library_body">
                <a href="${this.web}">
                    <span style="display: inline-block; margin: 0">
                        <span style="font-size: 1.2em">${this.getTitle(local)}</span>
                        ${createStatus(this.isPublic)}<br>
                        <span style="color: rgba(255,255,255,0.5)">${this.getContent(local)}</span>
                    </span>
                    <ul style="${url_style.join('; ')}; margin: 5px 0">
                        ${language}
                    </ul>
                    <ul style="${url_style.join('; ')}">
                        ${createGithub(this.githubUrl)}
                        ${developer}
                    </ul>
                </a>
            </div>`;
    }
}