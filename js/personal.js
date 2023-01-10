// Special for floating button :-

let myButton = document.getElementById("group");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

// هاي علشان لما يضغط يطلعه لفوق
myButton.onclick = function () {
    window.scrollTo(0, 0);
}

/********************************************************/

// Show and hide menus :-

let menu = document.querySelector(".bars");
let listMenu = document.querySelector(".parent-menu");

menu.onclick = function () {
    if (listMenu.style.display === "block") {
        listMenu.style.display = "none";
    } else {
        listMenu.style.display = "block";
    }
} 