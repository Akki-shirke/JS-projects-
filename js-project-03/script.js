// document.querySelector('#center')
// .addEventListener("mousemove", function(dets) {
// // console.log(dets.clientX, dets.clientY);


// });

// const btn = document.querySelector('#throttle');


const throttleFunction= (func , delay)=>{
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev>delay) {
            prev = now;
            return func(...args);
        }
    }
}


document.querySelector("#center")
.addEventListener('mousemove', throttleFunction((dets)=>{

// repetation code


var div = document.createElement("div");
div.classList.add("imagediv"); 
div.style.left = dets.clientX+"px";
div.style.top = dets.clientY+"px";

var img = document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1733325154035-cce307e9f24e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" );
div.appendChild(img);




document.body.appendChild(div);


gsap.to(img,{
    y:"0",
    ease:Power1,
    delay:.6,
});



gsap.to(img,{
    y:"100%",
    ease:Power2,
    delay:.6,
   
});


setTimeout(function(){
    div.remove()
},2000)

},600)
);