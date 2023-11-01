const languages: string[] = Object.keys(LanguageType);
function getValue(type: LanguageType): string | undefined {
    const value: string|undefined = languages.find((k: string): boolean =>
        LanguageType[k as keyof typeof LanguageType] === type)
    if (value === undefined) return ''
    else return `<span>${value}</span>`;
}

function getKey(type: LanguageType): string {
    if (type === undefined) return '';
    else return `<span class="library_language" style="background-color: ${type}"></span>`;
}

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

        public maven: string,
        public gradle: string,
        public gradle_kotlin: string
    ) {}

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

    private createMaven(name: string, code: string): string {
        const details_style: string[] = [
            "display: block",
            "background: #333",
            "position: relative",
            "cursor: pointer"
        ];
        const maven: string = code
            .replaceAll('<', "&lt;")
            .replaceAll('>', "&gt;")
            .replaceAll('\n', "<br>")
            .replaceAll(' ', "&nbsp;");
        return `<ul style="margin: 0; padding: 0">
                    <details style="${details_style.join('; ')}">
                        <summary>${name}</summary>
                        <div style="padding-left: 10px; padding-bottom: 10px">
                            <code>${maven}</code>
                        </div>
                    </details>
                </ul>`;
    }

    public create(local: Local): string {
        let repository: string = ''
        if (this.maven !== '') repository += this.createMaven("Maven", this.maven);
        if (this.gradle !== '') repository += this.createMaven("Gradle", this.gradle);
        if (this.gradle_kotlin !== '') repository += this.createMaven("Gradle.kts", this.gradle_kotlin);
        const url_style: string = "display: flex; flex-direction: row; flex-wrap: wrap; margin: 0; padding: 0; align-items : center"
        let developer: string = '';
        let language: string = '';
        for (const d of this.developers) developer += d.create();
        for (const lang of this.languages) language += `
            <li class="application_list_text">
                ${getKey(lang)}
                ${getValue(lang)}
            </li>`;
        return `
            <div class="library_body">
                <span style="display: inline-block; margin: 0">
                    <span style="font-size: 1.2em">${this.getTitle(local)}</span>
                    ${createStatus(this.isPublic)}<br>
                    <span style="color: rgba(255,255,255,0.5)">${this.getContent(local)}</span>
                </span>
                <ul style="${url_style}; margin: 5px 0">
                    ${language}
                </ul>
                <ul style="${url_style}">
                    ${createGithub(this.githubUrl)}
                    ${developer}
                </ul>
            </div>`;
    }
}

const libraryList: Library[] = []
libraryList.push(new Library(
    "bad-word-filtering", "bad-word-filtering", "bad-word-filtering",
    "욕설, 비속어등을 확인하고 처리하는 라이브러리 입니다. 필터링용 욕설 및 비속어가 보일 수 있으니 참고해주세요.",
    "This is a library that checks and processes abusive language and profanity. Please note that you may see abusive language and profanity for filtering.",
    "悪口、卑俗語などを確認して処理するライブラリです。 フィルタリング用の悪口や卑俗語が見えることがありますので、ご参考ください。",
    true, "https://github.com/VaneProject/bad-word-filtering",
    [LanguageType.Java],
    [new Developer("PersesTitan")],
    "<dependency>\n" +
    "    <groupId>io.github.vaneproject</groupId>\n" +
    "    <artifactId>vane-badwordfiltering</artifactId>\n" +
    "    <version>1.0.0</version>\n" +
    "</dependency>\n",
    "", ""
))

libraryList.push(new Library(
    "language-pack", "language-pack", "language-pack",
    "다양한 언어를 다룰때 유용하게 사용할 수 있는 라이브러리 입니다.",
    "It is a library that can be useful when dealing with various languages.",
    "さまざまな言語を扱うときに役立つライブラリです。",
    true, "https://github.com/VaneProject/language-pack",
    [LanguageType.Java],
    [new Developer("PersesTitan")],
    "", "", ""
))

function createLibrary(local: Local): void {
    let body: string = ''
    for (const library of libraryList) body += library.create(local);
    document.getElementsByClassName("library_header")[0].innerHTML = body;
}