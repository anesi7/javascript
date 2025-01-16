function validation (){
    var name = document.getElementById("name");
    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age");
    var valid_age_regex = /^[0-9]+$/;




    var city = document.getElementById("city");
    var valid_age_regex = /^[0-9]+$/;



//if(valid_name_regex.test(name)){
   // return true;
//}else{
   // document.getElementById("name_error").style.visibility="visible"
   // document.getElementById("name").style.borderColor="red"
   // return false;
//}

if(!name.matches(valid_age_regex)  || !(age.matches(valid_age_regex)) || (city="")){
    if(!(name.matches(valid_age_regex))){
        document.getElementById("name_error").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name_error").style.visibility="hidden";
        document.getElementById("name").style.borderColor="black";
    }
    if(!age.matches(valid_age_regex)){
      
            document.getElementById("age_error").style.visibility="visible";
        document.getElementById("age").style.borderColor="red";
        
    }
    else{
        document.getElementById("name_error").style.visibility="hidden";
        document.getElementById("name").style.borderColor="black";
    }


    if(city==""){
        document.getElementById("city_error").style.visibility="visible";
    document.getElementById("city").style.borderColor="red";
    
}
if(city==""){
    document.getElementById("city_error").style.visibility="hidden";
    document.getElementById("city").style.borderColor="black";
}
  
    return false;

}else
{
 document.getElementById("name_error").style.visibility="hidden";
    document.getElementById("name").style.borderColor="black";
    document.getElementById("age_error").style.visibility="hidden";
    document.getElementById("age").style.borderColor="black";
    return true;
}
    
}












}













}