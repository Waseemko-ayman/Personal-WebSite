// Special for floating button :-

let myButton = document.getElementById("group");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

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

/********************************************************/
// Progrss Section
let section = document.querySelector("#our-skills");
let spanProgress = document.querySelectorAll("#our-skills span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        spanProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};