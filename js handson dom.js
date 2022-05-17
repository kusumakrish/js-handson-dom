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


function form1(){
    var form = document.createElement("form")
    form.setAttribute("method","get")
    form.setAttribute("action","submit")
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    // name.setAttribute("required");

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com");
    
    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("placeholder","91-87952636");
    phoneNo.setAttribute("pattern","[91]{2}[0-9]{10}");
    // phoneNo.setAttribute("required");

    var DOB = document.createElement("input");
    DOB.setAttribute("type","date");
    DOB.setAttribute("name","DOB");
    DOB.setAttribute("placeholder","DOB");
    DOB.setAttribute("min","1995-01-01");
    // DOB.setAttribute("required");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phoneNo);
    form.appendChild(DOB);
    form.appendChild(submit);

    document.getElementsByClassName("form")[0]
    .appendChild(form);
   
}
form1();


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
