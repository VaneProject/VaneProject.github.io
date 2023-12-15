"use strict";
const applications = [];
(function () {
    const local = getLocal();
    const persestitan = [new Developer("PersesTitan")];
    const android = [new Platform("Android", "../svg/android.svg")];
    const ios = new Platform("IOS", "../svg/ios.svg");
    const linux = new Platform("Linux", "../svg/linux.svg");
    const macos = new Platform("MacOS", "../svg/macos.svg");
    const windows = new Platform("Windows", "../svg/windows.svg");
    applications.push(new Application("https://play.google.com/store/apps/details?id=com.vane.blackscreen", "https://play-lh.googleusercontent.com/I3QIpHyO3mZzVfjbf0ipN_kKUwuYC5jxQErR16mUf_0KqHLXV3TkdJhhTivXwBaxAXDO=w240-h480-rw", "https://github.com/VaneProject/BlackScreen", false, "검은 화면", "Black Screen", "黒い画面", "그냥 검은 화면이 나오는 단순한 앱입니다.", "It's just a simple app with a black screen.", "ただ黒い画面が出てくる単純なアプリです。", android, persestitan));
    applications.push(new Application("https://play.google.com/store/apps/details?id=com.vane.ourneighborhoodstory", "https://play-lh.googleusercontent.com/T3l0ty9gkotP41ERH0wDLR-XBSvICNY1kUiT5uLHvCQDXtFmk87jEPioXGbrgvaIsiXt=w240-h480-rw", "https://github.com/VaneProject/OurNeighborhoodStory", false, "우리 동네 이야기", "우리 동네 이야기", "우리 동네 이야기", "우리 동네의 정보를 공유할 수 있는 '우리 동네 이야기'", "우리 동네의 정보를 공유할 수 있는 '우리 동네 이야기'", "우리 동네의 정보를 공유할 수 있는 '우리 동네 이야기'", android, [
        new Developer("PersesTitan"),
        new Developer("JonghoS"),
        new Developer("ModernJake"),
        new Developer("keeui0")
    ]));
    createApplication(local);
}).call(null);
function createApplication(local) {
    let body = '';
    for (const app of applications)
        body += app.create(local);
    document.getElementsByClassName("application_header")[0].innerHTML = body;
}
