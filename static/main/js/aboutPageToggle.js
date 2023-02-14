$( document ).ready(function() {
    // content for about boxs
    let content = {
        shortProf: "I've been coding for two years, I've worked with a handful of small businesses so far and I love it.",
        shortPers: "My favorite activity is gaming - my second favorite is hanging out with my Girlfriend.",
        longProf: "I'm a self-taught/bootcamp grad front-end web developer with one year of experience. I've built a handful of sites from scratch for small businesses. For every project, I test and implement new design features - giving myself a toolbox that I can grab from on any project.",
        longPers: "When I'm not coding, I like to spend time with my family. I do know how to juggle - currently I am juggling a new home purchase, freelance projects, and learning everyday.",
    }
    // button array
    let aboutButtons = $(".aboutBtn");
    // onclick function
    for (let i = 0; i < aboutButtons.length; i++) {
        aboutButtons[i].addEventListener("click", function () {
            buttonId = aboutButtons[i].id
            // pass to switch function
            changeContent(buttonId)
        })
    }
    // switch function
    function changeContent(id) {
        // text boxs
        let profBox = $("#professionalAboutTxt")
        let persBox = $("#personalAboutTxt")
        // buttons
        let shortBtn = $("#short-about-btn")
        let longBtn = $("#long-about-btn")
        // classes 
        let active = "active-about-btn"
        let inactive = "inactive-about-btn"

        switch (id) {
            case "short-about-btn":
                profBox.text(content.shortProf)
                persBox.text(content.shortPers)
                shortBtn.removeClass(inactive).addClass(active)
                longBtn.removeClass(active).addClass(inactive)
                break;

            case "long-about-btn":
                profBox.text(content.longProf)
                persBox.text(content.longPers)
                shortBtn.removeClass(active).addClass(inactive)
                longBtn.removeClass(inactive).addClass(active)
                break;
        }
    }
})