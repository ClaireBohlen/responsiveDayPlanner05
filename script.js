//declare all global variables 
var currentDay = document.getElementById("currentDay");
//time button
var nineButton = document.getElementById("nine-button");
var tenButton = document.getElementById("ten-button");
var elevenButton = document.getElementById("eleven-button");
var twelveButton = document.getElementById("twelve-button");
var oneButton = document.getElementById("one-button");
var twoButton = document.getElementById("two-button");
var threeButton = document.getElementById("three-button");
var fourButton = document.getElementById("four-button");
var fiveButton = document.getElementById("five-button");
//text fields 
var allInput = document.querySelectorAll(".button-addon9");
var nineInput = document.getElementById("nine-input");
var tenInput = document.getElementById("ten-input");
var elevenInput = document.getElementById("eleven-input");
var twelveInput = document.getElementById("twelve-input");
var oneeInput = document.getElementById("one-input");
var twoInput = document.getElementById("two-input");
var threeInput = document.getElementById("three-input");
var fourInput = document.getElementById("four-input");
var fiveInput = document.getElementById("five-input");
//save buttons
var allSaveButtons = document.querySelectorAll(".btn-outline-secondary");
var nineSaveButton = document.getElementById("button-addon9");
var tenSaveButton = document.getElementById("button-addon9");
var elevenSaveButton = document.getElementById("button-addon9");
var twelveSaveButton = document.getElementById("button-addon9");
var oneSaveButton = document.getElementById("button-addon9");
var twoSaveButton = document.getElementById("button-addon9");
var threeSaveButton = document.getElementById("button-addon9");
var fourSaveButton = document.getElementById("button-addon9");
var fiveSaveButton = document.getElementById("button-addon9");


//clock
//ISO format 
//"2018-04-04T16:00:00:00.000Z."

var dayFormat = dayjs().format();
var format1 = dayjs().format("YYYY, MM, DD");
var isAfter = dayjs().isAfter('2018-04-0416:00:00.00z', 'minute')

console.log = 



//function for local storage 

//can you use the var created by the query selector's to create an event listener on all buttons ~ for example... all input and all save buttons???

  var displayStorage = localStorage.getItem("displayStorage");

  allInput.textConent = displayStorage;

  for(var button of allSaveButtons);
  button.addEventListener("click", (function(event){
      allInput.textConent = displayStorage;
      localStorage.setItem("displayStorage", displayStorage);


  }))

  
  







// var displayStorage = localStorage.getItem("displayStorage");

// allInput.text = displayStorage;

// allSaveButtons.addEventListener("click", function(){
//     allInput.textConent = displayStorage;
//     localStorage.setItem("displayStorage", displayStorage);

// });

//add the correct time & have it update when reload 
// $(function() {
//     let d = new Date()

//     let year = d.getFullYear()
//     let month = d.getMonth()+1;
//     let day = d.getDate()

//     let totalDays = new Date(year, month, 0).getDate()

//     let output =
//     (month<10 ? '0' : '') + month + '/' +
//     (day<10 ? '0' : '') + day + '/' + year

//     $('.date').text(`${output}`)
// }

//create color coded functions to indicate past, present & future 



//create a save funtion/button 



//when page is refresed the input is saved 










