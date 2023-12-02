"use strict";
(function () {
    const token1 = document.getElementById("token1");
    const token2 = document.getElementById("token2");
    const basic = document.getElementById("basic");
    const result = document.getElementById("result");
    const token1Text = document.getElementById("token1_text");
    const token2Text = document.getElementById("token2_text");
    token1.addEventListener('input', () => {
        token1Text.innerText = `"${token1.value}"`;
    });
    token2.addEventListener('input', () => {
        token2Text.innerText = `"${token2.value}"`;
    });
    basic.addEventListener('input', () => {
        result.value = basic.value.replaceAll(token1.value, token2.value);
    });
}).call(null);
