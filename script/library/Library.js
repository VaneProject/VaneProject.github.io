"use strict";
class Library {
    constructor(title, eng_title, jap_title, content, eng_content, jap_content, isPublic, githubUrl, languages, developers, web) {
        this.title = title;
        this.eng_title = eng_title;
        this.jap_title = jap_title;
        this.content = content;
        this.eng_content = eng_content;
        this.jap_content = jap_content;
        this.isPublic = isPublic;
        this.githubUrl = githubUrl;
        this.languages = languages;
        this.developers = developers;
        this.web = web;
        this.languageTypes = Object.keys(LanguageType);
    }
    getValue(type) {
        const value = this.languageTypes.find((k) => LanguageType[k] === type);
        if (value === undefined)
            return '';
        else
            return `<span>${value}</span>`;
    }
    getKey(type) {
        if (type === undefined)
            return '';
        else
            return `<span class="library_language" style="background-color: ${type}"></span>`;
    }
    getTitle(local) {
        switch (local) {
            case Local.KOR: return this.title;
            case Local.ENG: return this.eng_title;
            case Local.JAP: return this.jap_title;
        }
    }
    getContent(local) {
        switch (local) {
            case Local.KOR: return this.content;
            case Local.ENG: return this.eng_content;
            case Local.JAP: return this.jap_content;
        }
    }
    create(local) {
        const url_style = [
            "display: flex",
            "flex-direction: row",
            "flex-wrap: wrap",
            "margin: 0",
            "padding: 0",
            "align-items : center"
        ];
        let developer = '';
        let language = '';
        for (const d of this.developers)
            developer += d.create();
        for (const lang of this.languages)
            language += `
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
