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
        let platform: string = ''
        let developer: string = ''
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
                </ul>
                <ul style="display: flex; flex-direction: row; flex-wrap: wrap; margin: 0; padding: 0">
                    ${developer}                    
                </ul>
            </a>
        </div>`
    }
}