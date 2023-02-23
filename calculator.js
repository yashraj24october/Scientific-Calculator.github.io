
let audio=new Audio("tone.wav");
let isInRadian=false;
let isDarkMode=false;
let calculatorBOX=document.getElementById("calculatorBOX");
let inputBox=document.getElementById("inputbox");
calculatorBOX.addEventListener("mousedown",(e)=>{
inputBox.style.color="black";
if(e.target.id=="one")
{
inputBox.value+=1;
}
else if(e.target.id=="two")
{
inputBox.value+=2;
}
else if(e.target.id=="three")  
{
inputBox.value+=3;
}
else if(e.target.id=="four")
{
inputBox.value+=4;
}
else if(e.target.id=="five")
{
inputBox.value+=5;
}
else if(e.target.id=="six")
{
inputBox.value+=6;
}
else if(e.target.id=="seven")
{
inputBox.value+=7;
}
else if(e.target.id=="eight")
{
inputBox.value+=8;
}
else if(e.target.id=="nine")
{
inputBox.value+=9;
}
else if(e.target.id=="zero")
{
inputBox.value+=0;
}
else if(e.target.id=="plus")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="minus")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="multiply")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="division")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="pi")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="log")
{
inputBox.value+='log(';
}
else if(e.target.id=="leftbracket")
{
inputBox.value+="*(";
}
else if(e.target.id=="rightbracket")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="decimal")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="sin")
{
inputBox.value+="sin(";
}
else if(e.target.id=="cos")
{
inputBox.value+="cos(";
}
else if(e.target.id=="tan")
{
inputBox.value+="tan(";
}
else if(e.target.id=="squareroot")
{
inputBox.value+=e.target.innerText;
}
else if(e.target.id=="squareroot")
{
inputBox.value+="sqrt(";
}
else if(e.target.id=="power")
{
inputBox.value+='^';
}
else if(e.target.id=="factorial")
{
inputBox.value+="fact(";
}
else if(e.target.id=="percentage")
{
inputBox.value+='%';
}
else if(e.target.id=="DEL")
{
 inputBox.value = inputBox.value.slice(0, -1);
}
else if(e.target.id=="AC")
{
  inputBox.value = []; //empty the string
     inputBox.placeholder = 0;
}
else if(e.target.id=="equal")
{
if(inputBox.value==[])
{
inputBox.value=[];
inputBox.value="No input!";
inputBox.style.color="red";
setTimeout(()=>{
inputBox.value=[];
},1500)
}
else
{
showResult();}
}
else if(e.target.id=="mode")
{
if(isInRadian==false){
isInRadian=true;
e.target.innerText="Deg"
document.getElementById("rad").innerHTML="Rad"
}
else{
isInRadian=false;
e.target.innerText="Rad"
document.getElementById("rad").innerHTML=""
}
}
})
document.getElementById("themeMode").addEventListener("click",(e)=>{
let btn=document.getElementsByClassName("btn")
if(isDarkMode==false){
isDarkMode=true;
e.target.innerText="Switch to Light Mode";
calculatorBOX.style.background="black"
document.getElementById("casio").style.color="white";
document.getElementById("rad").style.color="white"
for(let i=0;i<btn.length;i++){
btn[i].style.background="black"
btn[i].style.color="white"
btn[i].style.boxShadow="4px 4px 8px white, -4px -4px 8px blue"
}
}
else{
isDarkMode=false;
e.target.innerText="Switch to Dark Mode";
calculatorBOX.style.background="white"
document.getElementById("casio").style.color="black";
document.getElementById("rad").style.color="darkblue"
for(let i=0;i<btn.length;i++){
btn[i].style.background="white"
btn[i].style.color="black"
btn[i].style.boxShadow="5px 5px 8px #00000020, -5px -5px 8px #faf5f5"
}
}
})


function showResult(){

if(isInRadian==false){
showDegreeResult()}
else{
showRadianResult()
}
}

function showRadianResult(){
try{
 const sinPattern=/sin/g;
    inputBox.value=inputBox.value.replace(sinPattern,"Math.sin");
    const cosPattern=/cos/g;
     inputBox.value=inputBox.value.replace(cosPattern,"Math.cos");
    const tanPattern=/tan/g;
    inputBox.value=inputBox.value.replace(tanPattern,"Math.tan");
    const sqrPattern=/sqrt/g;
    inputBox.value=inputBox.value.replace(sqrPattern,"Math.sqrt");
    const logPattern=/log/g;
   inputBox.value= inputBox.value.replace(logPattern,"Math.log");
    const piPattern=/pi/g;
    inputBox.value=inputBox.value.replace(piPattern,"Math.PI");
      const powerPattern=/\^/g;
    inputBox.value=inputBox.value.replace(powerPattern,"**");
   const expPattern=/e/g;
    inputBox.value=inputBox.value.replace(expPattern,"Math.E");
       const perCentPattern=/\%/g;
    inputBox.value=inputBox.value.replace(perCentPattern,"/100");
console.log(inputBox.value);


let result=eval(inputBox.value);
function fact(x){
let f=1;
for(let i=x;i>=2;i--){
f*=i;
}
return f;
}

if(result==false || result==undefined){ //when expression return false or undefined
inputBox.value=[];
inputBox.value="Invalid Format!";
inputBox.style.color="red";
setTimeout(()=>{
inputBox.value=[];
},1500)
}
else{
inputBox.value=result;
inputBox.style.color="blue"
}

}
catch(e){  //when expression will be wrong
inputBox.value=[];
console.log(e.message)
inputBox.value="Invalid Format!";
inputBox.style.color="red";
setTimeout(()=>{
inputBox.value=[];
},1000)
}
}


function showDegreeResult(){
try{
 const sinPattern=/(sin\()/g;
    inputBox.value=inputBox.value.replace(sinPattern,"Math.sin((Math.PI/180)*");
    const cosPattern=/(cos\()/g;
    inputBox.value=inputBox.value.replace(cosPattern,"Math.cos((Math.PI/180)*");
   const tanPattern=/(tan\()/g;
    inputBox.value=inputBox.value.replace(tanPattern,"Math.tan((Math.PI/180)*");
    const sqrPattern=/sqrt/g;
    inputBox.value=inputBox.value.replace(sqrPattern,"Math.sqrt");
    const logPattern=/log/g;
   inputBox.value= inputBox.value.replace(logPattern,"Math.log");
    const piPattern=/pi/g;
    inputBox.value=inputBox.value.replace(piPattern,"Math.PI");
      const powerPattern=/\^/g;
    inputBox.value=inputBox.value.replace(powerPattern,"**");
   const expPattern=/e/g;
    inputBox.value=inputBox.value.replace(expPattern,"Math.E");
       const perCentPattern=/\%/g;
    inputBox.value=inputBox.value.replace(perCentPattern,"/100");
console.log(inputBox.value);


let result=eval(inputBox.value);
function fact(x){
let f=1;
for(let i=x;i>=2;i--){
f*=i;
}
return f;
}

if(result==false || result==undefined){ //when expression return false or undefined
inputBox.value=[];
inputBox.value="Invalid Format!";
inputBox.style.color="red";
setTimeout(()=>{
inputBox.value=[];
},1500)
}
else{
inputBox.value=result;
inputBox.style.color="blue"
}

}
catch(e){  //when expression will be wrong
inputBox.value=[];
console.log(e.message)
inputBox.value="Invalid Format!";
inputBox.style.color="red";
setTimeout(()=>{
inputBox.value=[];
},1000)
}
}
