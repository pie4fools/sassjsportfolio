// registering textPlugin
gsap.registerPlugin(TextPlugin)

// header animations - on auto no activation
const headerTimeline = gsap.timeline()
    headerTimeline.from(".info-side", {opacity: 0, x: 400, duration: 1,})
    .from("#header-img", {opacity: 0, y: 200, duration: .75,}, "-=.5")
    .from("#header-standout", {duration: .5, x: 200, opacity: 0}, "-=.5")
    .from("#header-sub", {duration: .5, x: 200, opacity: 0})
    .from("#header-primary-link", {duration: 1, opacity: 0, y: 100})
    .from("#header-sub-links", {duration: 1, opacity: 0, y: 100}, "-=.5")


    
const logoAreaAnimations = gsap.timeline({
    scrollTrigger: ".past-client-area",
    start: "top middle"
})

logoAreaAnimations.addLabel("start")
    .from(".client-logos", {duration: 1, opacity: 0, stagger: .25})