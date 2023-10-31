"use strict";
var LanguageType;
(function (LanguageType) {
    LanguageType["Java"] = "#b07219";
})(LanguageType || (LanguageType = {}));
var Local;
(function (Local) {
    Local[Local["KOR"] = 0] = "KOR";
    Local[Local["ENG"] = 1] = "ENG";
    Local[Local["JAP"] = 2] = "JAP";
})(Local || (Local = {}));
const languages = Object.keys(LanguageType);
class Library {
    constructor(title, eng_title, jap_title, content, eng_content, jap_content, url, language) {
        this.title = title;
        this.eng_title = eng_title;
        this.jap_title = jap_title;
        this.content = content;
        this.eng_content = eng_content;
        this.jap_content = jap_content;
        this.url = url;
        this.language = language;
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
}
function createLibrary(item) {
    const content = `<a href="${item.url}">
    <span class="repo-language-color" style="background-color: ${item.language}; 
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%"></span>
    <span></span>
</a>`;
}
