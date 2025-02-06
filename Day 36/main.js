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
    console.log("This button is clicked");
    })

$("#mydiv").click(function(){
    $(this).addClass("click");
})


.find("span")
.attr("title","Hover over me");


$("#btn3").click(function(){
$(".hidden").show("slow");
})


$("#btn4").click(function(){
    $(".hidden").hide();

})

$("#square").click(function(){
    $("#square").animate({
        "width":"200px",
        "height":"200px"

    })
})

$("#testing").click(function(){
    $(".testing").animate({
        "left":"+=50px",
        "opacity":0.25,
        "fontSize":"30px"

    },300,
    function(){
        console.log("animation is completed");
    }
    );
})