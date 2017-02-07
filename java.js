/* global $ */ 
$("button").click(function(){
    var pass = $("input").val();
    if (pass === "password"){
        $("#logged").html("Sign in approved");
    }
    else 
    $("#logged").html("Access Denied. H4h4h4h4h4h4h4. Feels bad man!!");
   

});
