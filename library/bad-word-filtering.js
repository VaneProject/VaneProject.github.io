"use strict";
(function () {
    const lc = new LibraryContent("language-java");
    lc.addTag("h3", "생성자", "Constructor", "コンストラクタ");
    lc.addCode("BadWordFiltering badWordFiltering = new BadWordFiltering();");
    lc.addCode("BadWordFiltering badWordFiltering = new BadWordFiltering(String);");
    lc.addTag("h3", "함수", "Function", "機能");
    lc.addTag("h5", "void add()");
    lc.addTag("p", "라이브러리에서 지원하는 단어중에 원하는 단어가 없을 경우 해당 메소드를 사용하여 추가할 수 있습니다.", "If none of the words your library supports are available, you can add them using that method.", "ライブラリでサポートされている単語の中に希望する単語がない場合は、そのメソッドを使用して追加できます。");
    lc.addCode("badWordFiltering.add(String[]);\nbadWordFiltering.add(List<String>);\nbadWordFiltering.add(Set<String>);");
    lc.addTag("h5", "void remove()");
    lc.addTag("p", "라이브러리에서 지원하는 단어 중 필터링이 되면 안돼는 단어가 있을 경우 해당 메소드를 사용하여 필터링 단어에서 제거 하실 수 있습니다.", "If any of the words supported by the library are words that should not be filtered, you can use the method to remove them from the filtering words.", "ライブラリでサポートされている単語の中にフィルタリングされてはならない単語がある場合は、そのメソッドを使用してフィルタリング単語から削除することができます。");
    lc.addCode("badWordFiltering.remove(String[]);\nbadWordFiltering.remove(List<String>);\nbadWordFiltering.remove(Set<String>);");
    lc.addTag("h5", "String change()");
    lc.addTag("p", "매개변수에 라이브러리에서 지원하는 단어가 포함되어있을 경우 욕/비속어가 특정 문자로 대체된 값을 반환합니다.\n특정문자 : 생성자를 쓸때 값을 넣으면 그 값이 적용이 되며, 기본값으로는 * 입니다.", "Returns a value in which swear words/expression are replaced by a particular character if the parameter contains words supported by the library.\nSpecific characters: If you enter a value when you write a generator, the value is applied, and the default is *.", "パラメータにライブラリでサポートされている単語が含まれている場合、悪口/卑俗語が特定の文字に置き換えられた値を返します。\n特定文字:生成者を書くときに値を入れるとその値が適用され、デフォルト値としては*です。");
    lc.addCode("String test = \"문장...\";\nbadWordFiltering.change(test);\n\nSystem.out.println(test);\n");
    lc.addCode("출력\n욕/비속어가 대체되어서 나온 문장\n", "Output\nSentence from replacement of expletives\n", "出力\n悪口/卑俗語が代替されて出た文章\n");
    lc.addTag("h5", "boolean check(String)");
    lc.addTag("p", "비속어/욕이 포함되어있을 경우 true를 반환하고 포함하지 않으면 false를 반환합니다.", "Returns true if it contains profanity/cursions; false if not.", "卑俗語/欲が含まれている場合はtrueを返し、含めない場合はfalseを返します。");
    lc.addCode("boolean test = badWordFiltering.check(\"문장...\");\nif (test) {\n\t(...)\n}");
    lc.addTag("h5", "boolean blankCheck(String)");
    lc.addTag("p", "욕/비속어가 띄어쓰기로 나누어져있어도 띄어쓰기를 무시하고 체크를 합니다. 만약 존재하면 true를 반환하고 없다면 false를 반환합니다.", "Even if the swear words/expression words are divided into spaces, ignore the spaces and check them. Returns true if present and false if not.", "悪口/卑俗語が分かち書きに分かれていても、分かち書きを無視してチェックします。 もし存在する場合、trueを返却していない場合はfalseを返します。");
    lc.addCode("boolean test = badWordFiltering.blankCheck(\"문장...\");\nif (test) {\n\t(...)\n}");
    lc.addTag("h5", "String change(String, String[])");
    lc.addTag("p", "받은 텍스트에 욕설중간에 특수기호등으로 넣어두어도 필터링하는 기능", "Filter even if you put a special symbol in the middle of swearing in the received text", "受け取ったテキストに悪口の途中に特殊記号などで入れておいてもフィルタリングする機能");
    lc.addCode("BadWordFiltering filtering = new BadWordFiltering();\nSystem.out.println(filtering.change(\"욕_설\", new String[] {\"_\"}));", "BadWordFiltering filtering = new BadWordFiltering();\nSystem.out.println(filtering.change(\"悪_口\", new String[] {\"_\"}));", "BadWordFiltering filtering = new BadWordFiltering();\nSystem.out.println(filtering.change(\"swear_word\", new String[] {\"_\"}));");
    lc.addCode("출력\n***", "Output\n***", "出力\n***");
    lc.addTag("h5", "void readURL(URL, String, boolean)");
    lc.addTag("p", "욕설이 적혀있는 링크를 읽은뒤에 잘라낼 기호의 기준으로 잘라내어 단어를 추가하는 로직", "Logic to add words after reading a link with swear words by cutting them to the criteria of the symbol to be cut", "悪口が書かれているリンクを読んだ後、切り取る記号の基準で切り取って単語を追加するロジック");
    lc.addCode("BadWordFiltering filtering = new BadWordFiltering();\n" +
        "String url = \"https://raw.githubusercontent.com/PersesTitan/BadWordFiltering/master/badwords.txt\";\n" +
        "// ex1)\nfiltering.readURL(url, \",\");\n" +
        "// ex2)\nfiltering.readURL(new URL(url), \",\");");
    lc.addTag("h5", "void readFile(File, String, boolean)");
    lc.addTag("p", "욕설이 적혀있는 파일를 읽은뒤에 잘라낼 기호의 기준으로 잘라내어 단어를 추가하는 기능", "The ability to add words after reading a file with swear words by cutting them to the standard of symbols to be cut", "悪口が書かれているファイルを読んだ後、切り取る記号の基準で切り取って単語を追加する機能");
    lc.addCode("BadWordFiltering filtering = new BadWordFiltering();\n" +
        "\nString filePath = \"badwords.txt\";\n" +
        "// ex1)\nfiltering.readFile(filePath, \",\");\n" +
        "// ex2)\nfiltering.readFile(new File(filePath), \",\");");
    // 예제 코드 작성
    lc.addTag("h3", "예제", "Example", "例題");
    lc.addTag("h5", "생성자, String change()", "Constructor, String change()", "コンストラクタ, String change()");
    const back = "\nBadWordFiltering badWordFiltering1 = new BadWordFiltering();\n" +
        "BadWordFiltering badWordFiltering2 = new BadWordFiltering(\"-\");\n\n" +
        "String text1 = badWordFiltering.checkAndChange(bad);\t//기본값 *\n" +
        "String text2 = badWordFiltering.checkAndChange(bad);\t//입력값 -\n" +
        "System.out.println(text1);\n" +
        "System.out.println(text2);\n";
    lc.addCode("String bad = \"욕설을 욕설 말하는 중\";" + back, "String bad = \"swear word Talking about swear word\";" + back, "String bad = \"悪口を悪口話し中\";" + back);
    lc.addCode("출력\n**을 ** 말하는 중\n--을 -- 말하는 중", "Output\n**Talking about **\n--Talking about --\n", "出力\n**を**話し中\n--を--話し中");
    setLocal();
    setMainLink(lc.getLocal());
    setTitle('Bad Word Filtering');
    primaryCreate('badwordfiltering', bad_word_filtering_version);
    setLicense('https://github.com/VaneProject/bad-word-filtering/blob/master/LICENSE', 'MIT');
    setDeveloper('PersesTitan');
    setLanguage('Java');
    addCopyFunction();
    changeIcon();
}).call(null);
