
const timeline = gsap.timeline();

timeline.from('.title span' ,{
    y:150,
    skewY:7,
    duration:3
}).from('.txt-bottom',{
    letterSpacing: -10,
    opacity:0,
    duration:3
})