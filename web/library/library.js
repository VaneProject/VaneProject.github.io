"use strict";
const bad_word_filtering_version = "1.0.0";
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
function setLocal(local) {
    const developer_title = document.getElementsByClassName("developer_title")[0];
    const license_title = document.getElementsByClassName("license_title")[0];
    const version_title = document.getElementsByClassName("version_title")[0];
    const language_title = document.getElementsByClassName("language_title")[0];
    switch (local) {
        case Local.KOR:
            developer_title.textContent = "개발자";
            license_title.textContent = "라이센스";
            version_title.textContent = "버전";
            language_title.textContent = "언어";
            break;
        case Local.ENG:
            developer_title.textContent = "Developer";
            license_title.textContent = "License";
            version_title.textContent = "Version";
            language_title.textContent = "Language";
            break;
        case Local.JAP:
            developer_title.textContent = "開発者";
            license_title.textContent = "ライセンス";
            version_title.textContent = "バージョン";
            language_title.textContent = "言語";
            break;
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
            main_link.href = "/index.html";
            break;
        case Local.ENG:
            main_link.href = "/index_eng.html";
            break;
        case Local.JAP:
            main_link.href = "/index_jap.html";
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
