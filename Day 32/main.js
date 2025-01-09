var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");

var text = document.getElementById("teksti_id");

button.onclick=function(){
    text.innerHTML=input.value;
}
var text ="The best school in the world is Digital School";
var result = text.search('Digital School');
document.getElementById('result1').innerHTML =result

var text1 ="The best school in the world is Digital School";
var result1 = text.replace(/'Digital School'/,'Another Schools');
document.getElementById("result2").innerHTML =result1;

var text ="My school is top 10 best schols in the world";
var regex = /[0-9]/g;
document.getElementById("result3").innerHTML = text.match(regex);

var text ="My school is the best school in the world";
var regex = /[top|best|school]/g;
document.getElementById("result3").innerHTML = text.match(regex);