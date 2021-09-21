/*ways to print in js
      
    alert("me");
   document.write("documetn.write");*/

// console Api of js
//   console.log("Console log");
//   console.warn("Console warn");
//  console.error("console error");
//  console.clear("console clear");
//  document.write("document.write");

//  objects

// var arr = {
//     rabi: 34,
//     rasmi:30,
//     harry:20
// };
// console.log(arr);

// boolean
// var a =true;
// var b = false;
// console.log(a, b);

// undefined or null
// // var und = undefined;
//  var und; //undefined value by default
//  console.log(und); //nothing stored in variable
//  var n = null;
//  console.log(n); //nothing can be stored

//Primitive data type: undefined, null, number, string, boolean , symbol
//reference data type : arrays and objects

// var arr = [1,2,3,"string",4,5];


//function

// function avg(a,b){
//     //return (a+b)/2;
//     c = (a+b)/2;
//     return c;
// }
// c1=avg(10,5); //invoke or call function
// c2=avg(100,60); //function cannot executed if not called or invoked
// console.log(c1,c2);


//var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// for(var i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// arr.forEach(function(element){
//     console.log(element);
// })

//while loop
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


//do while loop
// let j = 0;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);

// myArr.pop(); //remove last element
// console.log(myArr);

// myArr.push('RJ'); //add at last
// console.log(myArr);

// myArr.shift(); //remove first element
// console.log(myArr);

// const newLen = myArr.unshift("Rasmi");
// console.log(newLen); //print new length of array
// console.log(myArr);

/*myArr.toString();
myArr.sort()*/

// String methods
// indexOf() -return first occured index
// lastIndexOf()-return last occured index
// slice(begin,end) -to slice the String i.e. slice(1,4)
//replace() -replace first occurance value


//Date methods
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//  //Dom manipulation
//  let elem = document.getElementById('click'); 
//  console.log(elem);

//  let elemClass = document.getElementsByClassName('container'); 
//  console.log(elemClass);

//  //elemClass[0].style.background = "yellow";
//  elemClass[0].classList.add('bg-primary');
//  //elemClass[0].classList.add('text-success');
//  elemClass[0].classList.remove('text-success');

//  console.log( elemClass[0].innerHTML);
//  console.log( elemClass[0].innerText);


//events: mouseover,mouseout,onload,onclick,mouseup,mousedown

//  function clicked(){
//      console.log("Clicked button");
//  }
 
//  window.onload = function(){
//     console.log("Loaded Document");
//  }
 
 firstContainer.addEventListener('click', function(){
      console.log("Hello Dear")
  });

//  firstContainer.addEventListener('mouseover', function(){
//     console.log("mouser over")
// });

// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouser out")
// });

// firstContainer.addEventListener('mouseup', function(){
//     console.log("mouse up")
// });