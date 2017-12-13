

const REGISTER_URL="https://andromia-olivierissacstj.c9users.io/register/";
const LOGIN_URL="https://andromia-olivierissacstj.c9users.io/login/";
$(document).ready(function(){
    
    
        
    $("#creerCompte").click(function(){
        
        var motDePasse=$("#mdp").val();
        var courriel=$(".courriel").val();
        var pseudo=$("#pseudo").val();
        
        var creationCompte = {};
        creationCompte.email=courriel;
        creationCompte.password=motDePasse;
        creationCompte.pseudo=pseudo;
        console.log(JSON.stringify(creationCompte));
        
        $.ajax({
            url: REGISTER_URL,
            type: 'POST',
            data: JSON.stringify(creationCompte),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function() {
                var login={};
                login.username=courriel;
                login.password=motDePasse;
                $.ajax({
                    url: LOGIN_URL,
                    type: 'POST',
                    data: JSON.stringify(login),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    async: false,
                    success: function() {
                        window.location.href="index.html";
                    }
                });
            }
        });
    });
});