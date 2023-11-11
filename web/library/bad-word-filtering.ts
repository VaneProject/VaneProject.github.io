function createPre(data: string): HTMLPreElement {
    const pre: HTMLPreElement = document.createElement("pre");
    const code = document.createElement("code");
    code.classList.add("language-java");
    code.innerText = data;
    pre.classList.add("prettyprint");
    pre.appendChild(code);
    return pre;
}

function createContent(local: Local): void {
    const library_content: HTMLDivElement = document.getElementById("library_content") as HTMLDivElement;
    let title1, title2, title3;
    let content1, content2, content3, content4, content5;
    let content6, content7, content8;
    switch (local) {
        case Local.KOR:
            title1 = "생성자";
            title2 = "함수";
            title3 = "예제";
            content1 = "라이브러리에서 지원하는 단어중에 원하는 단어가 없을 경우 해당 메소드를 사용하여 추가할 수 있습니다.";
            content2 = "라이브러리에서 지원하는 단어 중 필터링이 되면 안돼는 단어가 있을 경우 해당 메소드를 사용하여 필터링 단어에서 제거 하실 수 있습니다.";
            content3 = "매개변수에 라이브러리에서 지원하는 단어가 포함되어있을 경우 욕/비속어가 특정 문자로 대체된 값을 반환합니다.\n특정문자 : 생성자를 쓸때 값을 넣으면 그 값이 적용이 되며, 기본값으로는 * 입니다.";
            content4 = "비속어/욕이 포함되어있을 경우 true를 반환하고 포함하지 않으면 false를 반환합니다.";
            content5 = "욕/비속어가 띄어쓰기로 나누어져있어도 띄어쓰기를 무시하고 체크를 합니다. 만약 존재하면 true를 반환하고 없다면 false를 반환합니다.";
            content6 = "받은 텍스트에 욕설중간에 특수기호등으로 넣어두어도 필터링하는 기능";
            content7 = "욕설이 적혀있는 링크를 읽은뒤에 잘라낼 기호의 기준으로 잘라내어 단어를 추가하는 로직";
            content8 = "욕설이 적혀있는 파일를 읽은뒤에 잘라낼 기호의 기준으로 잘라내어 단어를 추가하는 기능";
            break;
        case Local.ENG:
            title1 = "Constructor";
            title2 = "Function";
            title3 = "Example";
            content1 = "If none of the words your library supports are available, you can add them using that method.";
            content2 = "If any of the words supported by the library are words that should not be filtered, you can use the method to remove them from the filtering words.";
            content3 = "Returns a value in which swear words/expression are replaced by a particular character if the parameter contains words supported by the library.\nSpecific characters: If you enter a value when you write a generator, the value is applied, and the default is *.";
            content4 = "Returns true if it contains profanity/cursions; false if not.";
            content5 = "Even if the swear words/expression words are divided into spaces, ignore the spaces and check them. Returns true if present and false if not.";
            content6 = "Filter even if you put a special symbol in the middle of swearing in the received text";
            content7 = "Logic to add words after reading a link with swear words by cutting them to the criteria of the symbol to be cut";
            content8 = "The ability to add words after reading a file with swear words by cutting them to the standard of symbols to be cut";
            break;
        case Local.JAP:
            title1 = "コンストラクタ";
            title2 = "機能";
            title3 = "例題";
            content1 = "ライブラリでサポートされている単語の中に希望する単語がない場合は、そのメソッドを使用して追加できます。";
            content2 = "ライブラリでサポートされている単語の中にフィルタリングされてはならない単語がある場合は、そのメソッドを使用してフィルタリング単語から削除することができます。";
            content3 = "パラメータにライブラリでサポートされている単語が含まれている場合、悪口/卑俗語が特定の文字に置き換えられた値を返します。\n特定文字:生成者を書くときに値を入れるとその値が適用され、デフォルト値としては*です。";
            content4 = "卑俗語/欲が含まれている場合はtrueを返し、含めない場合はfalseを返します。";
            content5 = "悪口/卑俗語が分かち書きに分かれていても、分かち書きを無視してチェックします。 もし存在する場合、trueを返却していない場合はfalseを返します。";
            content6 = "受け取ったテキストに悪口の途中に特殊記号などで入れておいてもフィルタリングする機能";
            content7 = "悪口が書かれているリンクを読んだ後、切り取る記号の基準で切り取って単語を追加するロジック";
            content8 = "悪口が書かれているファイルを読んだ後、切り取る記号の基準で切り取って単語を追加する機能";
            break;
    }

    library_content.appendChild(document.createElement("h3")).innerText = title1;
    library_content.appendChild(createPre("BadWordFiltering badWordFiltering = new BadWordFiltering();"));
    library_content.appendChild(createPre("BadWordFiltering badWordFiltering = new BadWordFiltering(String);"));
    library_content.appendChild(document.createElement("h3")).innerText = title2;

    library_content.appendChild(document.createElement("h5")).innerText = "void add()";
    library_content.appendChild(document.createElement("p")).innerText = content1;
    library_content.appendChild(createPre("badWordFiltering.add(String[]);\nbadWordFiltering.add(List<String>);\nbadWordFiltering.add(Set<String>);"));

    library_content.appendChild(document.createElement("h5")).innerText = "void remove()";
    library_content.appendChild(document.createElement("p")).innerText = content2;
    library_content.appendChild(createPre("badWordFiltering.remove(String[]);\nbadWordFiltering.remove(List<String>);\nbadWordFiltering.remove(Set<String>);"));

    library_content.appendChild(document.createElement("h5")).innerText = "String change()";
    library_content.appendChild(document.createElement("p")).innerText = content3;
    library_content.appendChild(createPre("String test = \"문장...\";\nbadWordFiltering.change(test);\n\nSystem.out.println(test);\n"));
    library_content.appendChild(createPre("출력\n욕/비속어가 대체되어서 나온 문장\n"));

    library_content.appendChild(document.createElement("h5")).innerText = "boolean check(String)";
    library_content.appendChild(document.createElement("p")).innerText = content4;
    library_content.appendChild(createPre("boolean test = badWordFiltering.check(\"문장...\");\nif (test) {\n\t(...)\n}"));

    library_content.appendChild(document.createElement("h5")).innerText = "boolean blankCheck(String)";
    library_content.appendChild(document.createElement("p")).innerText = content5;
    library_content.appendChild(createPre("boolean test = badWordFiltering.blankCheck(\"문장...\");\nif (test) {\n\t(...)\n}"));

    library_content.appendChild(document.createElement("h5")).innerText = "String change(String, String[])";
    library_content.appendChild(document.createElement("p")).innerText = content6;
    library_content.appendChild(createPre("BadWordFiltering filtering = new BadWordFiltering();\n" +
        "System.out.println(filtering.change(\"욕_설\", new String[] {\"_\"}));"));
    library_content.appendChild(createPre("출력\n***"));

    library_content.appendChild(document.createElement("h5")).innerText = "void readURL(URL, String, boolean)";
    library_content.appendChild(document.createElement("p")).innerText = content7;
    library_content.appendChild(createPre("BadWordFiltering filtering = new BadWordFiltering();\n" +
        "String url = \"https://raw.githubusercontent.com/PersesTitan/BadWordFiltering/master/badwords.txt\";\n" +
        "// ex1)\nfiltering.readURL(url, \",\");\n" +
        "// ex2)\nfiltering.readURL(new URL(url), \",\");"));

    library_content.appendChild(document.createElement("h5")).innerText = "void readFile(File, String, boolean)";
    library_content.appendChild(document.createElement("p")).innerText = content8;
    library_content.appendChild(createPre("BadWordFiltering filtering = new BadWordFiltering();\n" +
        "\nString filePath = \"badwords.txt\";\n" +
        "// ex1)\nfiltering.readFile(filePath, \",\");\n" +
        "// ex2)\nfiltering.readFile(new File(filePath), \",\");"));

    // 예제 코드 작성
    library_content.appendChild(document.createElement("h3")).innerText = title3;
    library_content.appendChild(document.createElement("h5")).innerText = title1 + ", String change()";
    library_content.appendChild(createPre("String bad = \"욕설을 욕설 말하는 중\";\n" +
        "BadWordFiltering badWordFiltering1 = new BadWordFiltering();\n" +
        "BadWordFiltering badWordFiltering2 = new BadWordFiltering(\"-\");\n" +
        "\n" +
        "String text1 = badWordFiltering.checkAndChange(bad);\t//기본값 *\n" +
        "String text2 = badWordFiltering.checkAndChange(bad);\t//입력값 -\n" +
        "System.out.println(text1);\n" +
        "System.out.println(text2);\n"));
    library_content.appendChild(createPre("출력\n" +
        "**을 ** 말하는 중\n" +
        "--을 -- 말하는 중"));

    library_content.appendChild(document.createElement("h5")).innerText = "boolean check(String), boolean blankCheck(String)";
    library_content.appendChild(createPre("Sring bad1 = \"욕    설\";\n" +
        "Sring bad2 = \"욕설\";\n" +
        "BadWordFiltering badWordFiltering1 = new BadWordFiltering();\n" +
        "\n" +
        "boolean bool1 = badWordFiltering.check(bad1); \t\t//욕    설\n" +
        "boolean bool2 = badWordFiltering.blankCheck(bad1);\t//욕    설\n" +
        "boolean bool3 = badWordFiltering.check(bad2);\t\t//욕설\n" +
        "boolean bool4 = badWordFiltering.blankCheck(bad2);\t//욕설\n" +
        "System.out.println(text1);\n" +
        "System.out.println(text2);\n" +
        "System.out.println(text3);\n" +
        "System.out.println(text4);\n"));
    library_content.appendChild(createPre("출력\n" +
        "false\n" +
        "true\n" +
        "true\n" +
        "true"));
}