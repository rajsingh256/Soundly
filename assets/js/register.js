$(document).ready(function(){
    $("#hideLogin").click(function(){
        
        $("#loginForm").hide();
        $("#registerForm").show();
    });

    $("#hideRegister").click(function(){
        //console.log("register is ready"); check if it works debugging trick
        $("#loginForm").show();
        $("#registerForm").hide();
    });

});

