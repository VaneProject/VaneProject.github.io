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
const libraryList = [];
(function () {
    // developer
    const persestitan = [new Developer("PersesTitan")];
    // language
    const javas = [LanguageType.Java];
    const rubys = [LanguageType.Ruby];
    // bad-word-filtering
    let title_kor = "bad-word-filtering";
    let title_eng = title_kor;
    let title_jap = title_kor;
    let content_kor = "욕설, 비속어등을 확인하고 처리하는 라이브러리 입니다. 필터링용 욕설 및 비속어가 보일 수 있으니 참고해주세요.";
    let content_eng = "This is a library that checks and processes abusive language and profanity. " +
        "Please note that you may see abusive language and profanity for filtering.";
    let content_jap = "悪口、卑俗語などを確認して処理するライブラリです。 フィルタリング用の悪口や卑俗語が見えることがありますので、ご参考ください。";
    let github = "https://github.com/VaneProject/bad-word-filtering";
    let web = "./web/library/bad-word-filtering.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap, true, github, javas, persestitan, web));
    // language-pack
    title_kor = "language-pack";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "다양한 언어를 다룰때 유용하게 사용할 수 있는 라이브러리 입니다.";
    content_eng = "It is a library that can be useful when dealing with various languages.";
    content_jap = "さまざまな言語を扱うときに役立つライブラリです。";
    github = "https://github.com/VaneProject/language-pack";
    web = "";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap, true, github, javas, persestitan, web));
    // simple-math
    title_kor = "simple-math";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "간단한 수학 관련 함수";
    content_eng = "A simple mathematical function";
    content_jap = "単純な数学関連関数";
    github = "https://github.com/VaneProject/simple-math";
    web = "./web/library/simple-math.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap, true, github, rubys, persestitan, web));
}).call(null);
function createLibrary(local) {
    let body = '';
    for (const library of libraryList)
        body += library.create(local);
    document.getElementsByClassName("library_header")[0].innerHTML = body;
}
