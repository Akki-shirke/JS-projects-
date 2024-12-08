
function age1(){
var age = document.getElementById("age").value
var ans = document.getElementById("p1")
const ageReq = 18 - age;
if (age >= 18){
    ans.innerHTML = (`Your age ${age} years so you are <ul>Eligible</ul for Licence`)

}
else{
    ans.innerHTML = (`You are ${age} years so you are <u>Ineligible</u> for licence <br> and you can apply after ${ageReq} years`)
}
ans.style.fontSize = "large";
ans.style.color = "blue";
ans.style.fontWeight="bold";
}