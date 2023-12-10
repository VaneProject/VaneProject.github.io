const bad_word_filtering_version: string = "1.0.0";
const simple_math_version: string = "0.1.0";

function createPre(language: string, data: string): HTMLPreElement {
    const pre: HTMLPreElement = document.createElement("pre");
    const code: HTMLElement = document.createElement("code");
    code.classList.add(language);
    code.innerText = data;
    pre.classList.add("prettyprint");
    pre.appendChild(code);
    return pre;
}

class LibraryContent {
    private library_content: HTMLDivElement;
    private readonly local: Local;
    private readonly pretty_language: string;
    constructor(pretty_language: string) {
        this.library_content = document.getElementById("library_content") as HTMLDivElement;
        this.pretty_language = pretty_language;
        // const url: URLSearchParams = new URL(window.location.href).searchParams;
        this.local = getLocal();
        // if (url.has("language")) {
        //     switch (url.get("language")) {
        //         case "eng":
        //             this.local = Local.ENG;
        //             break;
        //         case "jap":
        //             this.local = Local.JAP;
        //             break;
        //         default:
        //             this.local = Local.KOR;
        //             break;
        //     }
        // } else {
        //     this.local = Local.KOR;
        // }
    }

    public getLocal(): Local {
        return this.local;
    }

    public addTag(tag: string, content: string, content_eng: string = content, content_jap: string = content): void {
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

    public addCode(content: string, content_eng: string = content, content_jap: string = content): void {
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
function primaryCreate(artifact: string, version: string): void {
    for (const groups of document.getElementsByClassName("maven_group")) {
        groups.textContent = "io.github.vaneproject";
    }
    for (const artifacts of document.getElementsByClassName("maven_artifact")) {
        artifacts.textContent = artifact;
    }
    for (const versions of document.getElementsByClassName("maven_version")) {
        versions.textContent = version;
    }

    (document.getElementsByClassName("version_name")[0] as HTMLElement).innerText = version;
}

function setTitle(text: string): void {
    const title: HTMLElement = document.getElementById("library_title") as HTMLElement;
    title.style.textAlign = "left";
    title.innerText = text;
}

function setLicense(url: string, license: string): void {
    const a: HTMLAnchorElement = document.getElementsByClassName('license_link')[0] as HTMLAnchorElement;
    a.href = url;
    a.text = license + " License";
}

function setDeveloper(...names: string[]): void {
    const developer_name: Element = document.getElementsByClassName("developer_name")[0];
    for (const name of names) {
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = `https://github.com/${name}`;
        a.text = name;
        developer_name.appendChild(a);
    }
}

function setLanguage(...languages: string[]): void {
    document.getElementsByClassName("language_name")[0].textContent = languages.join(", ");
}

function setGemLink(link: string): void {
    (document.getElementsByClassName("rubygems_link")[0] as HTMLAnchorElement).href = link;
}

function setLocal(local: Local): void {
    const developer_title: Element = document.getElementsByClassName("developer_title")[0];
    const license_title: Element = document.getElementsByClassName("license_title")[0];
    const version_title: Element = document.getElementsByClassName("version_title")[0];
    const language_title: Element = document.getElementsByClassName("language_title")[0];
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

function setCopyFunction(copy: HTMLImageElement, element: ()=>string): void {
    copy.addEventListener('click', (): void => {
        console.log(element())
        navigator.clipboard.writeText(element())
            .then((): void => {copy.src = "../../svg/check.svg";})
            .catch((): void => {copy.src = "../../svg/x.svg";});
        setTimeout(function(): void {
            copy.src = "../../svg/copy.svg"
        }, 3000);
    });
}

function getMavenValues(maven: Element, values: string[]): void {
    for (const children of maven.children) {
        if (children.classList.contains("maven_group")) values[0] = children.innerHTML as string;
        if (children.classList.contains("maven_artifact")) values[1] = children.innerHTML as string;
        if (children.classList.contains("maven_version")) values[2] = children.innerHTML as string;
        if (children.childElementCount != 0) getMavenValues(children, values);
    }
}

function addCopyFunction(): void {
    const maven_copy: HTMLImageElement = document.getElementById("maven_copy") as HTMLImageElement;
    const maven: Element = document.getElementsByClassName("maven")[0];
    setCopyFunction(maven_copy, (): string => {
        const values: string[] = [];
        getMavenValues(maven, values);
        return `<dependency>\n    <groupId>${values[0]}</groupId>\n    <artifactId>${values[1]}</artifactId>\n    <version>${values[2]}</version>\n</dependency>`;
    });

    const gradle_copy: HTMLImageElement = document.getElementById("gradle_copy") as HTMLImageElement;
    const gradle: Element = document.getElementsByClassName("gradle")[0];
    setCopyFunction(gradle_copy, (): string => {
        return gradle.textContent as string;
    });

    const kts_copy: HTMLImageElement = document.getElementById("kts_copy") as HTMLImageElement;
    const kts: Element = document.getElementsByClassName("kts")[0];
    setCopyFunction(kts_copy, (): string => {
        return kts.textContent as string;
    });
}

function setMainLink(local: Local): void {
    const main_link: HTMLAnchorElement = document.getElementsByClassName("main_link")[0] as HTMLAnchorElement;
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

function changeIcon(): void {
    const title: HTMLElement = document.getElementById("library_title") as HTMLElement;
    const icon: HTMLImageElement = document.getElementsByClassName("svg")[0] as HTMLImageElement;
    const size: string = title.offsetHeight + "px";
    icon.style.width = size;
    icon.style.height = size;
}
window.addEventListener('resize', changeIcon);