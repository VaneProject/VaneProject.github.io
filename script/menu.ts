const menu = document.querySelector(".menu_header");
document.getElementById("menu")?.addEventListener("click", (): void => {
    menu?.classList.toggle("active");
});