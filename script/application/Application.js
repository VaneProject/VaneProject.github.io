"use strict";
class Application {
    constructor(googleUrl, iconUrl, githubUrl, isPublic, title, eng_title, jap_title, content, eng_content, jap_content, platforms, developers) {
        this.googleUrl = googleUrl;
        this.iconUrl = iconUrl;
        this.githubUrl = githubUrl;
        this.isPublic = isPublic;
        this.title = title;
        this.eng_title = eng_title;
        this.jap_title = jap_title;
        this.content = content;
        this.eng_content = eng_content;
        this.jap_content = jap_content;
        this.platforms = platforms;
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
        let platform = '';
        let developer = '';
        this.platforms.forEach(v => { platform += v.create(); });
        this.developers.forEach(v => { developer += v.create(); });
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
        </div>`;
    }
}
