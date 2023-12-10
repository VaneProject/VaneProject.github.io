(function(): void {
    const libraryList: Library[] = [];
    // developer
    const persestitan: Developer[] = [new Developer("PersesTitan")];
    // language
    const javas: LanguageType[] = [LanguageType.Java];
    const rubys: LanguageType[] = [LanguageType.Ruby];
    /**
     * Java Maven
     */
    // bad-word-filtering
    let title_kor: string = "bad-word-filtering";
    let title_eng: string = title_kor;
    let title_jap: string = title_kor;
    let content_kor: string = "욕설, 비속어등을 확인하고 처리하는 라이브러리 입니다. 필터링용 욕설 및 비속어가 보일 수 있으니 참고해주세요.";
    let content_eng: string = "This is a library that checks and processes abusive language and profanity. " +
        "Please note that you may see abusive language and profanity for filtering.";
    let content_jap: string = "悪口、卑俗語などを確認して処理するライブラリです。 フィルタリング用の悪口や卑俗語が見えることがありますので、ご参考ください。";
    let github: string = "https://github.com/VaneProject/bad-word-filtering";
    let web: string = "./library/bad-word-filtering.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, javas, persestitan, web));
    // language-pack
    title_kor = "language-pack";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "다양한 언어를 다룰때 유용하게 사용할 수 있는 라이브러리 입니다.";
    content_eng = "It is a library that can be useful when dealing with various languages.";
    content_jap = "さまざまな言語を扱うときに役立つライブラリです。";
    github = "https://github.com/VaneProject/language-pack";
    web = "";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, javas, persestitan, web));
    /**
     * Ruby Gems
     */
    // simple-math
    title_kor = "simple-math";
    title_eng = title_kor;
    title_jap = title_kor;
    content_kor = "간단한 수학 관련 함수";
    content_eng = "A simple mathematical function";
    content_jap = "単純な数学関連関数";
    github = "https://github.com/VaneProject/simple-math";
    web = "./library/simple-math.html";
    libraryList.push(new Library(title_kor, title_eng, title_jap, content_kor, content_eng, content_jap,
        true, github, rubys, persestitan, web));
    const local: Local = getLocal();
    let body: string = '';
    for (const library of libraryList) body += library.create(local);
    document.getElementsByClassName("library_header")[0].innerHTML = body;
}).call(null);