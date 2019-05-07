// EX1
{
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("one").innerHTML = "Today is " + day;
};

//EX 4
{
let side1 = 5, side2 = 6, side3 = 7;
let s = (side1 + side2 + side3)/2;
let area = Math.sqrt(s*(s - side1)*(s-side2)*(s-side3));
console.log(area);
};
