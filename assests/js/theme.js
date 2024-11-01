function openSidebar(){
    const menu = document.querySelector(".menu");
    menu.style.transform = "translateX(0px)";
}
function closeSidebar(){
    const menu = document.querySelector(".menu");
    menu.style.transform = "translateX(-1000px)";
}

document.querySelectorAll(".menu-item").forEach(item =>{
    item.addEventListener("click",closeSidebar);
})