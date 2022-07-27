var s1= "今年是：";
var date = new Date();
var year = date.getFullYear();
var s2= "年紀是：";
var age = year - 1995;

document.getElementById("variable").innerHTML = s1 + year +"<br>"+s2+age
