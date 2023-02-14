// selecting all anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // listen for click on hrefs
    anchor.addEventListener("click", function(e){
        // stops jump from happening
        e.preventDefault();
        // gets div that we are going to
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            // makes scrolling smooth
            behavior: "smooth"
        })
    })
})