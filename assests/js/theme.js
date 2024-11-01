function openSidebar(){
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector("#close_icon");
    menu.style.transform = "translateX(0px)";
    closeBtn.style.display = "inline-block"
}
function closeSidebar(){
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector("#close_icon");
    menu.style.transform = "translateX(-1000px)";
    closeBtn.style.display = "none"
}

// document.querySelectorAll(".menu-item").forEach(item =>{
//     item.addEventListener("click",closeSidebar);
// })