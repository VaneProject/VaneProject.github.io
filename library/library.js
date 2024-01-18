"use strict";
const bad_word_filtering_version = "1.0.0";
const simple_math_version = "0.1.0";
const cut_image_version = "1.0.0";
function createPre(language, data) {
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.classList.add(language);
    code.innerText = data;
    pre.classList.add("prettyprint");
    pre.appendChild(code);
    return pre;
}
class LibraryContent {
    constructor(pretty_language) {
        this.library_content = document.getElementById("library_content");
        this.pretty_language = pretty_language;
        this.local = getLocal();
    }
    getLocal() {
        return this.local;
    }
    addTag(tag, content, content_eng = content, content_jap = content) {
        switch (this.local) {
            case Local.KOR:
                this.library_content.appendChild(document.createElement(tag)).innerText = content;
                break;
            case Local.ENG:
                this.library_content.appendChild(document.createElement(tag)).innerText = content_eng;
                break;
            case Local.JAP:
                this.library_content.appendChild(document.createElement(tag)).innerText = content_jap;
                break;
        }
    }
    addTags(node) {
        this.library_content.appendChild(node);
    }
    addCode(content, content_eng = content, content_jap = content) {
        switch (this.local) {
            case Local.KOR:
                this.library_content.appendChild(createPre(this.pretty_language, content));
                break;
            case Local.ENG:
                this.library_content.appendChild(createPre(this.pretty_language, content_eng));
                break;
            case Local.JAP:
                this.library_content.appendChild(createPre(this.pretty_language, content_jap));
                break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////
////////////////////////////     library      ////////////////////////////
//////////////////////////////////////////////////////////////////////////
function primaryCreate(artifact, version) {
    for (const groups of document.getElementsByClassName("maven_group")) {
        groups.textContent = "io.github.vaneproject";
    }
    for (const artifacts of document.getElementsByClassName("maven_artifact")) {
        artifacts.textContent = artifact;
    }
    for (const versions of document.getElementsByClassName("maven_version")) {
        versions.textContent = version;
    }
    document.getElementsByClassName("version_name")[0].innerText = version;
}
function setTitle(text) {
    const title = document.getElementById("library_title");
    title.style.textAlign = "left";
    title.innerText = text;
}
function setLicense(url, license) {
    const a = document.getElementsByClassName('license_link')[0];
    a.href = url;
    a.text = license + " License";
}
function setDeveloper(...names) {
    const developer_name = document.getElementsByClassName("developer_name")[0];
    for (const name of names) {
        const a = document.createElement("a");
        a.href = `https://github.com/${name}`;
        a.text = name;
        developer_name.appendChild(a);
    }
}
function setLanguage(...languages) {
    document.getElementsByClassName("language_name")[0].textContent = languages.join(", ");
}
function setGemLink(link) {
    document.getElementsByClassName("rubygems_link")[0].href = link;
}
function getLocalText(kor, eng, jap) {
    switch (getLocal()) {
        case Local.KOR: return kor;
        case Local.ENG: return eng;
        case Local.JAP: return jap;
    }
}
function setElementText(name, kor, eng, jap) {
    const elements = document.getElementsByClassName(name);
    if (elements.length > 0)
        elements[0].textContent = getLocalText(kor, eng, jap);
}
function setLocal(tag_link = null) {
    setElementText("developer_title", "개발자", "Developer", "開発者");
    setElementText("license_title", "라이센스", "License", "ライセンス");
    setElementText("version_title", "버전", "Version", "バージョン");
    setElementText("language_title", "언어", "Language", "言語");
    setElementText("tag_title", "릴리스", "Releases", "リリース");
    if (tag_link != null) {
        const tag_name = document.getElementsByClassName("tag_name")[0];
        tag_name.href = tag_link;
        tag_name.textContent = getLocalText("다운로드", "Download", "ダウンロード");
    }
}
function setCopyFunction(copy, element) {
    copy.addEventListener('click', () => {
        console.log(element());
        navigator.clipboard.writeText(element())
            .then(() => { copy.src = "../../svg/check.svg"; })
            .catch(() => { copy.src = "../../svg/x.svg"; });
        setTimeout(function () {
            copy.src = "../../svg/copy.svg";
        }, 3000);
    });
}
function getMavenValues(maven, values) {
    for (const children of maven.children) {
        if (children.classList.contains("maven_group"))
            values[0] = children.innerHTML;
        if (children.classList.contains("maven_artifact"))
            values[1] = children.innerHTML;
        if (children.classList.contains("maven_version"))
            values[2] = children.innerHTML;
        if (children.childElementCount != 0)
            getMavenValues(children, values);
    }
}
function addCopyFunction() {
    const maven_copy = document.getElementById("maven_copy");
    const maven = document.getElementsByClassName("maven")[0];
    setCopyFunction(maven_copy, () => {
        const values = [];
        getMavenValues(maven, values);
        return `<dependency>\n    <groupId>${values[0]}</groupId>\n    <artifactId>${values[1]}</artifactId>\n    <version>${values[2]}</version>\n</dependency>`;
    });
    const gradle_copy = document.getElementById("gradle_copy");
    const gradle = document.getElementsByClassName("gradle")[0];
    setCopyFunction(gradle_copy, () => {
        return gradle.textContent;
    });
    const kts_copy = document.getElementById("kts_copy");
    const kts = document.getElementsByClassName("kts")[0];
    setCopyFunction(kts_copy, () => {
        return kts.textContent;
    });
}
function setMainLink(local) {
    const main_link = document.getElementsByClassName("main_link")[0];
    switch (local) {
        case Local.KOR:
            main_link.href = "../index.html";
            break;
        case Local.ENG:
            main_link.href = "../index_eng.html";
            break;
        case Local.JAP:
            main_link.href = "../index_jap.html";
            break;
    }
}
function changeIcon() {
    const title = document.getElementById("library_title");
    const icon = document.getElementsByClassName("svg")[0];
    const size = title.offsetHeight + "px";
    icon.style.width = size;
    icon.style.height = size;
}
window.addEventListener('resize', changeIcon);
