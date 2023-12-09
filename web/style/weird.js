"use strict";
(function () {
    const random = document.getElementById("random");
    random.textContent = "";
    setInterval(function () {
        for (let i = 0; i < 100; i++) {
            const a = Math.floor(Math.random() * 9);
            const b = Math.floor(Math.random() * 9);
            random.textContent += `${a}${b} `;
        }
        window.scrollTo(0, document.body.scrollHeight);
    }, 1);
}).call(null);
