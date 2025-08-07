var abc=""
var missingfield=""










function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }





$("#submit").click(function(){


    if($("#fname").val()==""){
        missingfield+="<p>• Email is not filled</p>"
    }
    if($("#fnumber").val()==""){
        missingfield+="<p>• Phone-Number is not filled</p>"
    }
    if($("#fpassword").val()==""){
        missingfield+="<p>• Password is not filled</p>"
    }
    if($("#cp").val()==""){
        missingfield+="<p>• Please confirm the password.</p>"
    }
    



















    if(isEmail($("#fname").val())==false)
        {
            abc+="<p>• Email Id is not valid</p>"
        }

        if($.isNumeric($("#fnumber").val())==false) 
            {
                abc+="<p> • Phone number is not valid</p>"
            }
        if($("#fnumber").val().length!=10){
            abc+="<p> • Phone Number should be of 10 digits<p>"
        }
        if ($("#fpassword").val() !== "") {
            if (!/[A-Z]/.test($("#fpassword").val())) {
                abc += "<p>• Password should contain an uppercase letter</p>";
            }
            if (!/[a-z]/.test($("#fpassword").val())){
                abc += "<p>• Password should contain a lowercase letter</p>";
            }
            if (!/\d/.test($("#fpassword").val())) {
                abc += "<p>• Password should contain at least one digit</p>";
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test($("#fpassword").val())) {
                abc += "<p>• Password should contain at least one special character</p>";
            }
            if ($("#fpassword").val().length< 8) {
                abc += "<p>• Password should have at least 8 characters</p>";
            }
        }
        





        if($("#fpassword").val()!=$("#cp").val()){
            abc+="<p>• The password does not match</p>"
        }
        if(abc==""&& missingfield==""){
            $("#success").html("• You have successfully registered")
        }
        else{
            $("#errors").html(abc + missingfield)
        }

        
})

$("#toggle").click(()=>{

    if($("#fpassword").attr('type')==='password'){
   $("#fpassword").attr('type','text')
   $('#toggle').html("hide")}

   else{
    $("#fpassword").attr('type','password')
    $('#toggle').html("show")}
   


   




})
$("#toggle2").click(()=>{

    if($("#cp").attr('type')==='password'){
   $("#cp").attr('type','text')
   $('#toggle2').html("hide")}

   else{
    $("#cp").attr('type','password')
    $('#toggle2').html("show")}
   


   




})




// $("#error").html(errorm)