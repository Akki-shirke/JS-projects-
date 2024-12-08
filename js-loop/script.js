

document.getElementById('generat-btn').addEventListener("click", function(){
   
    const number = 
    parseInt(document.getElementById('input1').value);
    const resultDiv =
    document.getElementById("result");

    // Cleare previous result

    resultDiv.innerHTML = ' ';

    if (isNaN(number)){

        resultDiv.innerHTML = "Please enter s valid number..." ;
        return;
     }

     const table = document.createElement('table');

    //  generate Multiplication-Table using for loop

for (let i = 1 ; i <= 10; i++){

    const row = document.createElement('tr');
    row.innerHTML = `<td>${number}</td> <td>x</td>
     <td>${i}</td> <td> = </td> <td>${number *i}</td>`;

    table. appendChild(row);
   


}


    resultDiv.appendChild(table);

});