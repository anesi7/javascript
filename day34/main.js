//function printnames(){ 
   // document.write("jo");
   // document.write("<br>");
   // setTimeout(function(){document.write(Anna)},3000);
   // document.write("Anna");

//}
//printnames();

var colors =["blue","red","purple","green"]

function changebg(){
document.querySelector("body").style.background =
colors[Math.floor(math.random())*colors.length]

}
setInterval(changebg,2000);



var emrat =["A","N","E","S"]

function ndryshoemrat(){
document.querySelector("p").innerHTML =
emrat[Math.floor(math.random())*emrat.length]

}
setInterval(emrat,1000);