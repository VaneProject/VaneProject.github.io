class Platform {
    constructor(
        private name: string,
        private icon: string
    ) {}

    public create(): string {
        return `<li class="application_list_text">
                    <img src="${this.icon}" alt="${this.name}" class="svg application_list_icon">
                    ${this.name}
                </li>`
    }
}

class Application {
    constructor(
        public googleUrl: string,
        public iconUrl: string,
        public githubUrl: string,
        public isPublic: boolean,

        private title: string,
        private eng_title: string,
        private jap_title: string,

        private content: string,
        private eng_content: string,
        private jap_content: string,

        private platforms: Platform[],
        private developers: Developer[]
    ) {}

    private getTitle(local: Local): string {
        switch (local) {
            case Local.KOR: return this.title;
            case Local.ENG: return this.eng_title;
            case Local.JAP: return this.jap_title;
        }
    }

    private getContent(local: Local): string {
        switch (local) {
            case Local.KOR: return this.content;
            case Local.ENG: return this.eng_content;
            case Local.JAP: return this.jap_content;
        }
    }

    public create(local: Local): string {
        let platform = ''
        let developer = ''
        this.platforms.forEach(v => {platform += v.create()})
        this.developers.forEach(v => {developer += v.create()})
        return `<div class="application_body">
            <a href="${this.googleUrl}">
                <img src="${this.iconUrl}" class="application_icon" aria-hidden="true" alt="아이콘 이미지" itemprop="image" data-atf="false" data-iml="202.10000000149012">
                <span style="display: inline-block; margin: 0">
                    <span style="font-size: 1.2em">${this.getTitle(local)}</span>
                    ${createStatus(this.isPublic)}<br>
                    <span style="color: rgba(255,255,255,0.5)">${this.getContent(local)}</span>
                </span>
                <ul style="display: flex; flex-direction: row; flex-wrap: wrap; margin: 0; padding: 0">
                    ${createGithub(this.githubUrl)}
                    ${platform}
                    ${developer}
                </ul>
            </a>
        </div>`
    }
}

const android: Platform = new Platform("Android", "../svg/android.svg")
const ios: Platform = new Platform("IOS", "../svg/ios.svg")
const linux: Platform = new Platform("Linux", "../svg/linux.svg")
const macos: Platform = new Platform("MacOS", "../svg/macos.svg")
const windows: Platform = new Platform("Windows", "../svg/windows.svg")

const applications: Application[] = []
applications.push(new Application(
    "https://play.google.com/store/apps/details?id=com.vane.blackscreen",
    "https://play-lh.googleusercontent.com/I3QIpHyO3mZzVfjbf0ipN_kKUwuYC5jxQErR16mUf_0KqHLXV3TkdJhhTivXwBaxAXDO=w240-h480-rw",
    "https://github.com/VaneProject/BlackScreen",
    false,
    "검은 화면", "Black Screen", "黒い画面",
    "그냥 검은 화면이 나오는 단순한 앱입니다.",
    "It's just a simple app with a black screen.",
    "ただ黒い画面が出てくる単純なアプリです。",
    [android],
    [new Developer("PersesTitan")]
))

function createApplication(local: Local) {
    let body = ''
    for (const app of applications) body += app.create(local)
    document.getElementsByClassName("application_header")[0].innerHTML = body;
}