///$(window).ready(function(){
    //alert("its working")
//})


$("li").click(function(){
    alert("click")
})


$("#btn").click(function(){
    console.log($("#h1").text())
    $("#h1").text("extra text");
    $("#h1").append("full text");
})

$("#btn2").on("click",function(){
    console.log("This button is clicked")
    })

$("#mydiv").click(function(){
    $(this).addClass("clicked");
})   

$("#btn3").click(function(){

}
