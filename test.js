//document.write("This is external js");
//document.getElementById('th').innerHTML = "This is paragraph!";

//var a1 = 5;
//var a2 = 8;
//document.write("Sum",a1+a2,"<br>");

//var a2 = 8;
//document.write("Sum",a1+a2);

console.log("This is console"); //write in console only not in document . It can only be seen by developer

/*var age = prompt("Tell me your age");
alert("Your age is",age);*/
/*
var foodcost = prompt("Total amount?");
var people = prompt("Number of people?");
document.write("Total cost " , foodcost,"<br>");
document.write("Have to pay ",(foodcost/people).toFixed(2), "<br");*/
/*
document.write("2^2 = ", Math.pow(2,2) , "<br>");
document.write("abs(-34)= ", Math.abs(-34),  "<br>");
document.write("sqrt(34)= ", Math.sqrt(34),  "<br>");*/

//string function
/*
var srt1 = "RasmiJati";
document.write(srt1,"<br>");
document.write(srt1.length,"<br>");
document.write(srt1.indexOf("smi"),"<br>");
document.write(srt1.substr(2,6),"<br>");
document.write(srt1.replace("Ras","As"),"<br>");
document.write(srt1.toUpperCase(),"<br>");
document.write(srt1.toLowerCase());*/

//For logic Relational operation
/*
var age = prompt("Age?");
if(age>20){
    document.write("College");
}else if(age<10 || age>3){
    document.write("school");
}else{ 
    document.write("high")
}*/

//function

function rasmi(){
    document.write("Helo");
    console.log("executed");
}
rasmi(); //call function