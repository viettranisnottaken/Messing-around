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
