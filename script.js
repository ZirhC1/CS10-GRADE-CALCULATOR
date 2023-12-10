//ALERT AND PROMPT FUNCION CODE/
//START//

alert("Before you continue and enter the site, let's do a practice grade calculation.")

var grade1 = +prompt("Enter your Client-Side Scripting 1 grade")
console.log(`your answer was ${grade1}`)
var grade2 = +prompt("Enter your Structured Programming 1 grade")
console.log(`your answer was ${grade2}`)
var grade3 = +prompt("Enter your Structured Programming 2 grade")
console.log(`your answer was ${grade3}`)
var grade4 = +prompt("Enter your Client-Side Scripting 2 grade")
console.log(`your answer was ${grade4}`)
var grade5 = +prompt("Enter your Project-A grade")
console.log(`your answer was ${grade5}`)

let total = (5)
let mark = ((grade1) + (grade2) + (grade3) + (grade4) + (grade5)) / (total)
//calculate mark(alert)
console.log(`your answer was ${mark}`)

alert(`Your Overall CS10 Grade: ${mark}%`)
//END//

//INPUT AND VALUE FUNCTION CODE/
//START//
document.getElementById("cal-btn").addEventListener("click", calc)
document.getElementById("clear-btn").addEventListener("click", clear)

//functon/input
function calc(){

let one = +document.getElementById("g1").value;
let two = +document.getElementById("g2").value;
let three = +document.getElementById("g3").value;
let four = +document.getElementById("g4").value;
let five = +document.getElementById("g5").value;


let overAll = (one + two + three + four + five) / (total)
   //overAll is used here to calculate the overall grade
   
document.getElementById("ovrall").innerHTML = overAll;
    }

function clear() {
    document.getElementById("g1").value=""
    document.getElementById("g2").value=""
    document.getElementById("g3").value=""
    document.getElementById("g4").value=""
    document.getElementById("g5").value=""
    document.getElementById("ovrall").innerHTML="------"
}
//END//

//COLOR FEATURE BUTTONS
    document.getElementById("dark-btn").addEventListener("click", dark)
    function dark() {
        const dStyle = document.querySelector('style');
            dStyle.innerHTML = 'body{background-color: black;} h1,h2,p{color: white;}';
          }
console.log(`your answer was ${dark}`)

    document.getElementById("white-btn").addEventListener("click", white)
    function white() {
        const dStyle = document.querySelector(`style`);
        dStyle.innerHTML = 'body{background-color: white;} h1,h2,p{color:black;}';
    }
    
    





