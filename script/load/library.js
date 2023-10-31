"use strict";
const languages = Object.keys(LanguageType);
function getValue(type) {
    const value = languages.find((k) => LanguageType[k] === type);
    if (value === undefined)
        return '';
    else
        return `<span>${value}</span>`;
}
function getKey(type) {
    if (type === undefined)
        return '';
    else
        return `<span class="library_language" style="background-color: ${type}"></span>`;
}
class Library {
    constructor(title, eng_title, jap_title, content, eng_content, jap_content, isPublic, githubUrl, languages, developers) {
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
        const url_style = "display: flex; flex-direction: row; flex-wrap: wrap; margin: 0; padding: 0; align-items : center";
        let developer = '';
        let language = '';
        for (const d of this.developers)
            developer += d.create();
        for (const lang of this.languages)
            language += `
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
const libraryList = [];
libraryList.push(new Library("bad-word-filtering", "bad-word-filtering", "bad-word-filtering", "욕설, 비속어등을 확인하고 처리하는 라이브러리 입니다. 필터링용 욕설 및 비속어가 보일 수 있으니 참고해주세요.", "This is a library that checks and processes abusive language and profanity. Please note that you may see abusive language and profanity for filtering.", "悪口、卑俗語などを確認して処理するライブラリです。 フィルタリング用の悪口や卑俗語が見えることがありますので、ご参考ください。", true, "https://github.com/VaneProject/bad-word-filtering", [LanguageType.Java], [new Developer("PersesTitan")]));
function createLibrary(local) {
    let body = '';
    for (const library of libraryList)
        body += library.create(local);
    document.getElementsByClassName("library_header")[0].innerHTML = body;
}
