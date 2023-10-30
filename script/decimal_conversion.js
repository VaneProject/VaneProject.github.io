"use strict";
const input = document.getElementById('input');
const result = document.getElementById('result');
const start = document.querySelector("#start");
const end = document.querySelector("#end");
start.addEventListener("change", () => { input.value = ""; });
input.addEventListener('input', (event) => {
    const target = event.target;
    const s = Number(start === null || start === void 0 ? void 0 : start.options[start.selectedIndex].value);
    const e = Number(end === null || end === void 0 ? void 0 : end.options[end.selectedIndex].value);
    result.value = parseInt(target.value, s).toString(e);
});
const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(result.value).then(r => { });
});
// class items
class WebItem {
    constructor(name, content, url, isPrivate) {
        this.name = name;
        this.url = url;
        this.content = content;
        this.isPrivate = isPrivate;
    }
}
function createItem(item) {
    const value = `<a href="${item.url}">
    
</a>`;
}
