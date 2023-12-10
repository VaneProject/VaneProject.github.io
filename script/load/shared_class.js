"use strict";
// all use
var Local;
(function (Local) {
    Local[Local["KOR"] = 0] = "KOR";
    Local[Local["ENG"] = 1] = "ENG";
    Local[Local["JAP"] = 2] = "JAP";
})(Local || (Local = {}));
var LanguageType;
(function (LanguageType) {
    LanguageType["Java"] = "#b07219";
    LanguageType["JavaScript"] = "#F7DF1E";
    LanguageType["TypeScript"] = "#3178C6";
    LanguageType["Ruby"] = "#701516";
})(LanguageType || (LanguageType = {}));
class Developer {
    constructor(name) {
        this.name = name;
    }
    create() {
        return `<li class="application_list_text">
                    <a href="https://github.com/${this.name}">
                        <img src="../../svg/developer.svg" alt="developer" class="svg application_list_icon">
                        ${this.name}
                    </a>
                </li>`;
    }
}
// shared function
function createStatus(isPublic) {
    const style = [
        "color: gray",
        "border: 1px solid gray",
        "border-radius: 5em",
        "padding: 1px 5px",
        "line-height: 200%",
        "font-size: 50%",
        "vertical-align: top"
    ];
    return `<span style="${style.join("; ")}">
                ${isPublic ? "Public" : "Private"}
            </span>`;
}
function createGithub(url) {
    return `<li class="application_list_text">
                <a href="${url}">
                    <img src="../../svg/github.svg" alt="github" class="svg application_list_icon">
                    Github
                </a>
            </li>`;
}
function getLocal() {
    const url = new URL(window.location.href).searchParams;
    if (url.has("language")) {
        switch (url.get("language")) {
            case "eng": return Local.ENG;
            case "jap": return Local.JAP;
            default: return Local.KOR;
        }
    }
    else
        return Local.KOR;
}
