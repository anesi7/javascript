var slideIndex = 1;
function showslides(){
    var i;
    var slide =document.getElementsByClassName('slide');

for(i=0; i<slide.length; i++){
    slides[i].style.display='none';
}
if (n> slide.length){
    slides = 1;
    
}
if (n<1){
    slide.length = slideIndex;
}
slides[slideIndex-1].style.display="block";
}
showslides(1);

function plusSlides(n){
    slideIndex += n;
    showslides(slideIndex);
}
setInterval(plusSlides, 3000,1);