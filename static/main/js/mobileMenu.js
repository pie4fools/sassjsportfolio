// setting navigation elements as array
let menuElements = $(".menu-elements a")
// bringing in the menu background
let menuBackground = document.getElementById('menu-background')

// mobile menu function
function mobileMenu(action){
    if(action == 'open'){
        menuBackground.classList.remove("menu-closed")
        menuBackground.classList.add("menu-open")
    } else {
        menuBackground.classList.remove("menu-open")
        menuBackground.classList.add("menu-closed")
    }
}

// function to close menu when link is clicked
for (let i = 0; i < menuElements.length; i++) {
    // onclick event listener
    menuElements[i].addEventListener("click", function () {
        // removing open class and adding closed class
        menuBackground.classList.remove("menu-open")
        menuBackground.classList.add("menu-closed")
    })
}