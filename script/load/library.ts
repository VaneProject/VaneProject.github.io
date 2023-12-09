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

        private web: string,
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
                ${getKey(lang)}
                ${getValue(lang)}
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

const libraryList: Library[] = [];
(function(): void {
    // developer
    const persestitan: Developer[] = [new Developer("PersesTitan")];
    // language
    const javas: LanguageType[] = [LanguageType.Java];
    const rubys: LanguageType[] = [LanguageType.Ruby];
    // bad-word-filtering
    let title_kor: string = "bad-word-filtering";
    let title_eng: string = title_kor;
    let title_jap: string = title_kor;
    let content_kor: string = "욕설, 비속어등을 확인하고 처리하는 라이브러리 입니다. 필터링용 욕설 및 비속어가 보일 수 있으니 참고해주세요.";
    let content_eng: string = "This is a library that checks and processes abusive language and profanity. " +
        "Please note that you may see abusive language and profanity for filtering.";
    let content_jap: string = "悪口、卑俗語などを確認して処理するライブラリです。 フィルタリング用の悪口や卑俗語が見えることがありますので、ご参考ください。";
    let github: string = "https://github.com/VaneProject/bad-word-filtering";
    let web: string = "./web/library/bad-word-filtering.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, javas, persestitan, web));
    // language-pack
    title_kor = "language-pack";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "다양한 언어를 다룰때 유용하게 사용할 수 있는 라이브러리 입니다.";
    content_eng = "It is a library that can be useful when dealing with various languages.";
    content_jap = "さまざまな言語を扱うときに役立つライブラリです。";
    github = "https://github.com/VaneProject/language-pack";
    web = "";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, javas, persestitan, web));
    // simple-math
    title_kor = "simple-math";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "간단한 수학 관련 함수";
    content_eng = "A simple mathematical function";
    content_jap = "単純な数学関連関数";
    github = "https://github.com/VaneProject/simple-math";
    web = "./web/library/simple-math.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, rubys, persestitan, web));
}).call(null)

function createLibrary(local: Local): void {
    let body: string = ''
    for (const library of libraryList) body += library.create(local);
    document.getElementsByClassName("library_header")[0].innerHTML = body;
}