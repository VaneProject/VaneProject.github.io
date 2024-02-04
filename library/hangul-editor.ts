(function (): void {
    const lc: LibraryContent = new LibraryContent("language-java");

    lc.addTag("h3", "클래스");
    lc.addTag("h4", "class JapanRecovery");
    lc.addTag("p", "뷁어를 한글로 변환시켜주는 클래스 입니다.");

    lc.addTag("h5", "static change(String)");
    lc.addTag("p", "Shift_JIS 인코딩 방식으로 작성된 일본어 가나 문자를 CP949 방식으로 잘못 인코딩하여 출력된 뷁어를 다시 일본어로 변환해주는 함수 입니다.");
    lc.addCode("System.out.println(JapanRecovery.change(\"귦궫궢\"));\nSystem.out.println(JapanRecovery.change(\"궇궶궫\"));");
    lc.addCode("출력\nわたし\nあなた");

    lc.addTag("br", "");
    lc.addTag("h4", "class EnglishSound");
    lc.addTag("p", "영어 발음을 한국어로 변환해주는 함수 입니다.");

    lc.addTag("h5", "static engToKor(String)");
    lc.addTag("p", "발음이 영어형태로 적혀있는 단어를 한글로 변환해서 출력해주는 함수입니다.");
    lc.addCode("System.out.println(EnglishSound.engToKor(\"annyeong\"));");
    lc.addCode("출력\n안녕");

    lc.addTag("h5", "static ipaToKor(String)");
    lc.addTag("p", "발음기호 형태의 단어를 한글로 변환해서 출력해주는 함수 입니다.");
    lc.addCode("System.out.println(EnglishSound.ipaToKor(\"Hello\"));");
    lc.addCode("출력\n헬로");

    lc.addTag("br", "");
    lc.addTag("h4", "class HangulSplitItem");
    lc.addTag("p", "한글 한글자의 자음과 모음을 분리하여 관리하는 클래스입니다.");
    lc.addTag("h4", "생성자");
    lc.addCode("HangulSplitItem(char words)");
    lc.addCode("HangulSplitItem()");
    lc.addTag("h5", "상수");
    lc.addTag("p", "일부 타이핑으로 입력하기 힘든 겹받침이 상수로 정의되어 있습니다.");
    lc.addCode("public final static char ㄹㄱ = 'ㄺ';\n" +
        "public final static char ㄹㅁ = 'ㄻ';\n" +
        "public final static char ㄱㅅ = 'ㄳ';\n" +
        "public final static char ㄴㅈ = 'ㄵ';\n" +
        "public final static char ㄴㅎ = 'ㄶ';\n" +
        "public final static char ㄹㅂ = 'ㄼ';\n" +
        "public final static char ㄹㅅ = 'ㄽ';\n" +
        "public final static char ㄹㅌ = 'ㄾ';\n" +
        "public final static char ㄹㅍ = 'ㄿ';\n" +
        "public final static char ㄹㅎ = 'ㅀ';\n" +
        "public final static char ㅂㅅ = 'ㅄ';");
    lc.addTag("h5", "사용법");
    lc.addTag("p", "해당 클래스에서는 자음과 모음이 first, second, thread로 분리되어 관리됩니다." +
        "\n빈 데이터는 ' '로 저장됩니다." +
        "\n아래 예시처럼 set를 이용하여 특정 모음, 자음 위치를 변경할 수 있습니다.");
    lc.addCode("HangulSplitItem item = new HangulSplitItem('안');\n" +
        "System.out.println(item.getFirst());\n" +
        "System.out.println(item.getSecond());\n" +
        "System.out.println(item.getThread());\n" +
        "System.out.println(item);\n" +
        "item.setThread(' ');\n" +
        "System.out.println(item);");
    lc.addCode("출력\nㅇ\n" + "ㅏ\n" + "ㄴ\n" + "안\n" + "아");

    lc.addTag("br", "");
    lc.addTag("h4", "class HangulEditor");
    lc.addTag("p", "한글 관련 함수를 가지고 있는 클래스입니다.");
    lc.addTag("h5", "static boolean isOnlyHangul(String words)");
    lc.addTag("p", "words가 모두 한글일때 true반환");
    lc.addTag("h5", "static boolean isInOnlyHangul(String words)");
    lc.addTag("p", "words가 1개라도 한글이 포함되어 있을때 true반환");
    lc.addTag("h5", "static boolean isHangul(char word)");
    lc.addTag("p", "word가 한글일때 true반환");
    lc.addTag("h5", "boolean isConsonant(char word)");
    lc.addTag("p", "word가 자음일때 true반환");
    lc.addTag("h5", "static boolean isVowels(char word)");
    lc.addTag("p", "word가 모음일때 true반환");

    lc.addTag("h5", "static String randomHangul(int len)");
    lc.addTag("p", "한글로 이루어진 len길이의 아무 한글조합을 출력");
    lc.addCode("System.out.println(HangulEditor.randomHangul(5));")
    lc.addCode("출력\n칆옑켜쿋시")

    lc.addTag("h5", "static String randomHangul()");
    lc.addTag("p", "한글로 이루어진 16길이의 아무 한글조합을 출력");
    lc.addCode("System.out.println(HangulEditor.randomHangul());")
    lc.addCode("출력\n툔홓꾞렔믾풅엶굽굊띎빐뼪릱혅퀠솧")

    lc.addTag("h5", "static HangulSplitItem splitHangul(char word)");
    lc.addTag("p", "word글자를 HangulSplitItem 타입으로 반환");

    lc.addTag("h5", "static List<HangulSplitItem> splitHangul(String words)");
    lc.addTag("p", "word를 리스트 형태의 HangulSplitItem 타입으로 반환");

    setLocal();
    setMainLink(lc.getLocal());
    setTitle('Hangul Editor');
    primaryCreate('hangul-editor', hangul_editor_version);
    setLicense('https://github.com/VaneProject/hangul-editor/blob/master/LICENSE', 'MIT');
    setDeveloper('PersesTitan');
    setLanguage('Java');
    addCopyFunction();
    changeIcon();
}).call(null);