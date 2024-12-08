const calculate  = () => {
    
let  Marathi = 
document.querySelector("#Marathi").value;


let  Hindi = 
document.querySelector("#Hindi").value;

let  Mathematics = 
document.querySelector("#Mathematics").value;

let  Science = 
document.querySelector("#Science").value;

let  English = 
document.querySelector("#English").value;

let  Social_Science = 
document.querySelector("#Social_Science").value;


let grades = "";

let  totalgrades = 
parseFloat(Marathi)+
parseFloat(Hindi)+
parseFloat(Mathematics)+
parseFloat(Science)+
parseFloat(English)+
parseFloat(Social_Science);


let percentage = (totalgrades/600) * 100;


if (percentage<=100 && percentage>= 80){
    grade = "A";

}
else if(percentage<=79 && percentage>=60){
    grade = "B";
}
else if(percentage<=59 && percentage>=40){
    grade = "c";
}
else{
    grade = "F";
}


if(Marathi == "" || Hindi == "" 
    ||Mathematics== "" || Science == ""
   || English =="" || Social_Science == "" ) {
    document.querySelector("#showdata").innerHTML = "Please enter your all dats fields.";
   }
   else{
    if(percentage>= 39.5){
        document.querySelector("#showdata").innerHTML =`Out of 600 your total is ${totalgrades},
        and you have ${percentage}%,
        <br/>
        Your grtade is ${grade}.
        You are Pass.`;
    }

    else{

        document.querySelector("#showdata").innerHTML =`Out of 600 your total is ${totalgrades},
        and you have ${percentage}%,
        <br/>
        Your grtade is ${grade}.
        You are Fail.`;
    }
   }

   console.log("${grades}")
};