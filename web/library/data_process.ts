(function(): void {
    const token1: HTMLTextAreaElement = document.getElementById("token1") as HTMLTextAreaElement;
    const token2: HTMLTextAreaElement = document.getElementById("token2") as HTMLTextAreaElement;
    const basic: HTMLTextAreaElement = document.getElementById("basic") as HTMLTextAreaElement;
    const result: HTMLTextAreaElement = document.getElementById("result") as HTMLTextAreaElement;

    const token1Text: HTMLLabelElement = document.getElementById("token1_text") as HTMLLabelElement;
    const token2Text: HTMLLabelElement = document.getElementById("token2_text") as HTMLLabelElement;
    token1.addEventListener('input', (): void => {
        token1Text.innerText = `"${token1.value}"`;
    });
    token2.addEventListener('input', (): void => {
        token2Text.innerText = `"${token2.value}"`;
    });

    basic.addEventListener('input', (): void => {
        result.value = basic.value.replaceAll(token1.value, token2.value);
    })
}).call(null)