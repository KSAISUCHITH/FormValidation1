function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submit").click(function () {
    // Reset errors and messages
    abc = "";
    missingfield = "";
    $("#errors").html("");
    $("#success").html("");
    $("#ulllll").html("");

    // Email check
    if ($("#fname").val() == "") {
        missingfield += "<p>• Email is not filled</p>";
    } else if (isEmail($("#fname").val()) == false) {
        abc += "<p>• Email Id is not valid</p>";
    }

    // Phone check
    if ($("#fnumber").val() == "") {
        missingfield += "<p>• Phone-Number is not filled</p>";
    } else {
        if ($.isNumeric($("#fnumber").val()) == false) {
            abc += "<p>• Phone number is not valid</p>";
        } else if ($("#fnumber").val().length != 10) {
            abc += "<p>• Phone Number should be of 10 digits</p>";
        }
    }

    // Password check
    if ($("#fpassword").val() == "") {
        missingfield += "<p>• Password is not filled</p>";
    } else {
        if (!/[A-Z]/.test($("#fpassword").val())) {
            abc += "<p>• Password should contain an uppercase letter</p>";
        }
        if (!/[a-z]/.test($("#fpassword").val())) {
            abc += "<p>• Password should contain a lowercase letter</p>";
        }
        if (!/\d/.test($("#fpassword").val())) {
            abc += "<p>• Password should contain at least one digit</p>";
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test($("#fpassword").val())) {
            abc += "<p>• Password should contain at least one special character</p>";
        }
        if ($("#fpassword").val().length < 8) {
            abc += "<p>• Password should have at least 8 characters</p>";
        }
    }

    // Confirm password check
    if ($("#cp").val() == "") {
        missingfield += "<p>• Please confirm the password.</p>";
    } else if ($("#fpassword").val() != $("#cp").val()) {
        abc += "<p>• The password does not match</p>";
    }

    // Show result
    if (abc == "" && missingfield == "") {
        $("#success").html("• You have successfully registered");
    } else {
        $("#errors").html(missingfield + abc); // Show missing fields first
    }
});



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
    $('#toggle2').html("show")}})
   


   
    $("#fnumber").on("input", function () {
        this.value = this.value.replace(/\D/g, ''); // remove non-digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10); // max 10 digits
        }
    });
