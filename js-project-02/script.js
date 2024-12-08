window.addEventListener("mousemove", function(details){
    var rect = document.querySelector("#rect");


    var xvalue = gsap.utils.mapRange(
        0,
       this.window.innerWidth,
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth-(100 + rect.getBoundingClientRect().width/2),
        details.clientX
    );

    gsap.to('#rect', {
        left: xvalue,
        // top: details.clientY + "px",
        ease:Power3
    });
});