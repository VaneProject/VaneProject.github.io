class ConverterLanguage {
    private data: any;
    constructor(fileName: string, fileBits: BlobPart[] = ["language"]) {
        const file: File = new File(fileBits, fileName);
        const reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (): void => {
            const result: string = reader.result as string;
            this.data = JSON.parse(result);
        }
    }

    public getLang(key: string): string {
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

const index: ConverterLanguage = new ConverterLanguage("index.json");