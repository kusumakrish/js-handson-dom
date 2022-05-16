console.log("Working...");

let result = document.getElementById("text");
console.log(result.innerText);

let result1 = document.getElementsByTagName("h1");
console.log(result1[0].innerText);

let result2 = document.getElementsByClassName("box");
console.log(result2[0].innerText);

function changeText(){
        let changeText = document.getElementsByTagName("h1");
        changeText[0].innerText = "Hello World"
        console.log(changeText[0].innerText);
}
function changeDirection(){
    let changeDirection = document.getElementsByClassName("container");
    changeDirection[0].style.flexDirection = "column";
}
let result3=document.getElementsByClassName("heading");
console.log(result3);
result3.id = "heading";
result1[0].style.color = "red";

function replaceText(){
    let replacetext = document.getElementById("hello");
    replacetext.innerText = "Welcom to Evalution Academy";
}


//window - When JavaScript is executed inside the browser, the window object is the JavaScript Global object.The window object represents the browser window.
//document -The document object is a property of the window object.The document object represents the HTML document loaded in that window.


function getoption(){
    // let result4 = document.getElementById("dropdown");
    // console.log(result4.innerText);
    selectElement = document.querySelector('#dropdown');
        output = selectElement.value;
        document.querySelector('.output').textContent = output;
}


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();