


var a = document.querySelector("#myDiv")
var btn = document.querySelector("#btn")

var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
    a.style.backgroundColor = "yellow";
    console.log("clicked")
    flag = 1
}
 else{
   a.style.backgroundColor = "gray";
        console.log("clicked")
        flag = 0
    }
})