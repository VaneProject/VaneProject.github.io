// all use
enum Local {
    KOR, ENG, JAP
}

enum LanguageType {
    Java = "#b07219",
    JavaScript = "#F7DF1E",
    TypeScript = "#3178C6",
    Ruby = "#701516"
}

class Developer {
    constructor(private name: string) {}
    public create(): string {
        return `<li class="application_list_text">
                    <a href="https://github.com/${this.name}">
                        <img src="../../svg/developer.svg" alt="developer" class="svg application_list_icon">
                        ${this.name}
                    </a>
                </li>`;
    }
}

// shared function
function createStatus(isPublic: boolean): string {
    const style: string[] = [
        "color: gray",
        "border: 1px solid gray",
        "border-radius: 5em",
        "padding: 1px 5px",
        "line-height: 200%",
        "font-size: 50%",
        "vertical-align: top"
    ]
    return `<span style="${style.join("; ")}">
                ${isPublic ? "Public" : "Private"}
            </span>`
}

function createGithub(url: string): string {
    return `<li class="application_list_text">
                <a href="${url}">
                    <img src="../../svg/github.svg" alt="github" class="svg application_list_icon">
                    Github
                </a>
            </li>`;
}

function getLocal(): Local {
    const url: URLSearchParams = new URL(window.location.href).searchParams;
    if (url.has("language")) {
        switch (url.get("language")) {
            case "eng": return Local.ENG;
            case "jap": return Local.JAP;
            default: return Local.KOR;
        }
    } else return Local.KOR;
}