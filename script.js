document.getElementById('demo').innerHTML='new text';
documnet.getElementById('demo').id="demo2";
document.getElementById('demo2').style.color="red";
document.getElementById('demo2').outerHTML= "<button>someting to press</button>";

function myFun()    {
    alert("WARNING ALERT OMG!!")
}
myFun();

function darkMode(){
    document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
}

var a=12;
let b=20;
const c=30;
a+=10;
b+=10;


