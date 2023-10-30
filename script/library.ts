enum LanguageType {
    Java = "#b07219"
}
enum Local {
    KOR, ENG, JAP
}

const languages = Object.keys(LanguageType);

class Library {
    constructor(
        private title: string,
        private eng_title: string,
        private jap_title: string,

        private content: string,
        private eng_content: string,
        private jap_content: string,

        public url: string,
        public language: LanguageType
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
}

function createLibrary(item: Library) {
    const content =
`<a href="${item.url}">
    <span class="repo-language-color" style="background-color: ${item.language}; 
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%"></span>
    <span></span>
</a>`

}