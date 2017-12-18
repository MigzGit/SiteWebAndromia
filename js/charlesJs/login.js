const LOGIN_URL="https://andromia-olivierissacstj.c9users.io/login/";


$(document).ready(function(){
    
    localStorage.clear();
    
    
    
    $("#connexion").click(function(){
        var courriel=$("#courriel").val();
        var motDePasse=$("#mdp").val();
        console.log(courriel);
        console.log(motDePasse);
        
        var login={};
        login.username=courriel;
        login.password=motDePasse;
        console.log(login);
        
         $.ajax({
            url: LOGIN_URL,
            type: 'POST',
            data: JSON.stringify(login),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(a) {
                localStorage.setItem("token",a.token);
                localStorage.setItem("explorateurHref",a.explorateur.href);
                window.location.href="index.html";
               
            },
            error: function(){
                $("#messageErreur").append("<p>Courriel ou mot de passe invalide.</p>")
                setTimeout(function(){
                      $("p").remove();
                },5000);
            }
            
         });
    });
});