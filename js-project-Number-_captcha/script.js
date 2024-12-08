
var Captcha ;
function generateCaptcha(){
  let a = Math.floor (Math.random()*10);
  let b = Math.floor (Math.random()*10);
  let c = Math.floor (Math.random()*10);
  let d = Math.floor (Math.random()*10); 
  let e = Math.floor (Math.random()*10);

  Captcha = a.toString()+b.toString()+c.toString()+d.toString()+e.toString();
  document.getElementById("Captcha").value = Captcha;
}

function Check(){
var a = document.getElementById("i1").value;
if (a === Captcha){
    document.getElementById("ans").innerHTML = "Correct Captcha";

}
else{
    document.getElementById("ans").innerHTML = "Try Again...";
}
}