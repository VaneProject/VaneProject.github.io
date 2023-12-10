"use strict";
(function () {
    const lc = new LibraryContent("language-ruby");
    setLocal(lc.getLocal());
    setMainLink(lc.getLocal());
    setTitle('simple-math');
    primaryCreate("", simple_math_version);
    setLicense('https://github.com/VaneProject/simple-math/blob/master/LICENSE.txt', 'MIT');
    setDeveloper('PersesTitan');
    setLanguage('Ruby');
    setGemLink("https://rubygems.org/gems/simple-math");
    // addCopyFunction();
    changeIcon();
}).call(null);
