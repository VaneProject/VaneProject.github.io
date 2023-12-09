(function(): void {
    const random: HTMLDivElement = document.getElementById("random") as HTMLDivElement;
    random.textContent = ""
    setInterval(function(): void {
        for (let i: number = 0; i < 100; i++) {
            const a: number = Math.floor(Math.random() * 9);
            const b: number = Math.floor(Math.random() * 9);
            random.textContent += `${a}${b} `;
        }
        window.scrollTo(0, document.body.scrollHeight);
    }, 1);
}).call(null)