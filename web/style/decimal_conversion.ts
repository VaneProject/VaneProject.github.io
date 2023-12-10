const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
const start: HTMLSelectElement = document.querySelector("#start") as HTMLSelectElement;
const end: HTMLSelectElement = document.querySelector("#end") as HTMLSelectElement;
start.addEventListener("change", (): void => { input.value = ""; })
input.addEventListener('input', (event: Event): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const s: number = Number(start?.options[start.selectedIndex].value)
    const e: number = Number(end?.options[end.selectedIndex].value)
    result.value = parseInt(target.value, s).toString(e)
})

const copy: HTMLButtonElement = document.getElementById('copy') as HTMLButtonElement;
copy.addEventListener('click', (): void => {
    navigator.clipboard.writeText(result.value).then(r => {})
})

// class items
class WebItem {
    name: string;
    content: string;
    url: string;
    isPrivate: boolean;

    constructor(name: string, content: string, url: string, isPrivate: boolean) {
        this.name = name;
        this.url = url;
        this.content = content;
        this.isPrivate = isPrivate;
    }
}

function createItem(item: WebItem): void {
    const value =
`<a href="${item.url}">
    
</a>`
}