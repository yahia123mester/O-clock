function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate(); + "-" + parseInt(date.getMonth()+1) + "-" + date.getFullYear();
}
setInterval(updateDate,500);
onload = updateDate();
function getcolor(){
var getColor = document.getElementById("setColor").value;
localStorage.setItem("Color",getColor);
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}
function setcolor(){
 document.getElementById("setColor").value = localStorage.getItem("Color");
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}
setInterval(setcolor,100);