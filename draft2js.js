var backslash = "I am the \"shit\" ", backslash2 = "It\'s me, Mario";
document.getElementById('one').innerHTML = backslash + backslash2;

var txt = "I can eat bananas all day can eat bananas";
var a = txt.slice (11, -8);
document.getElementById('six').innerHTML = txt.substring (11, 17); //substring (begin, end) but no negative
document.getElementById('seven').innerHTML = txt.substr (6, 3); //substr(beginning, length)
var b = txt.toUpperCase();
document.getElementById('three').innerHTML = a + " " + "and " + b;
document.getElementById('four').innerHTML = txt.indexOf("eat");
document.getElementById('five').innerHTML = txt.lastIndexOf("eat");

document.getElementById('eight').innerHTML = txt;
function replace() {
  var txt2 = txt.replace ("bananas", "Pu$$x");
  document.getElementById('eight').innerHTML = txt2;
};
function replace_reverse() {
  document.getElementById('eight').innerHTML = txt;
};

window.alert (txt.charAt (0));


function addition(x, y) {
  return x*y;
};

document.getElementById('two').innerHTML = addition(4,2);



// var flNum = 7.7563, flNum2 = flNum.toFixed(2);
// document.getElementById('twelve').innerHTML = flNum2;

var flNum = 7.7563;
document.getElementById('hehehe').innerHTML = flNum.toFixed(0) + " " +
  flNum.toFixed(1) + " " + flNum.toFixed(2) + " " + flNum.toFixed(6);

var bodyParts = ["Legs", "Arms", "Eyes", "TDz"];
document.getElementById('thirteen').innerHTML = bodyParts.join(" and ");
bodyParts.pop("Arms");
document.getElementById('fourteen').innerHTML = bodyParts;

// Wheel of fortune:
function wheelOfFortune() {
  var x = Math.floor(Math.random() * 7), y;
  switch (x) {
    case 1:
      y = "You won: A half-consumed bottle of wine!";
      break;
    case 2:
      y = "You won: A jizz-ridden sock!";
      break;
    case 3:
      y ="You won: A somewhat-functional headphone!";
      break;
    case 4:
      y ="You won: A guy in his 20s!";
      break;
    case 5:
      y ="You won: A keyboard with two thirds of the keys ripped out!";
      break;
    case 6:
      y = "You won: A teacher whose initials are CD!";
      break;
    default: y = "Lol u can't even win. Go cry.";
  };
  window.alert(y);
};

prompt("This is prompt()");

function yoMoney() {
  var money = prompt("How much do you want in $?");
  window.alert("Alright here's your " + money +"$");
}

function oneToTenEven() {
  var x = 0;
  while (x <= 10) {
    if (x % 2 == 0) {
      console.log(x);
    };
    x = x + 1;
  };
};

// function oneToTenEven() {
//   var x = 0;
//   while (x <= 10 && x % 2 == 0) {
//     console.log(x);
//     x += 1;
//   };
// };
//This is wrong because as soon as any one of the conditions is not met, the loop stops

function helloSomeone(name = "Viet Tran") {
  console.log("Hello " + name);
};

function helloSomeone(name = "Viet Tran") {
  return "Hello " + name;
};

 // hehehe
