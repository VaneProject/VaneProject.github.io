"use strict";
class ConverterLanguage {
    constructor(fileName, fileBits = ["language"]) {
        const file = new File(fileBits, fileName);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const result = reader.result;
            this.data = JSON.parse(result);
        };
    }
    getLang(key) {
        switch (getLocal()) {
            case Local.KOR:
                return this.data[key];
            case Local.ENG:
                return this.data[key];
            case Local.JAP:
                return this.data[key];
        }
    }
}
const index = new ConverterLanguage("index.json");
