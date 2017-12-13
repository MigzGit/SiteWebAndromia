

const REGISTER_URL="https://andromia-olivierissacstj.c9users.io/register/";
const LOGIN_URL="https://andromia-olivierissacstj.c9users.io/login/";
$(document).ready(function(){
    
    localStorage.clear();
    
        
    $("#creerCompte").click(function(){
        
        var motDePasse=$("#mdp").val();
        var courriel=$(".courriel").val();
        var pseudo=$("#pseudo").val();
        
        var creationCompte = {};
        creationCompte.email=courriel;
        creationCompte.password=motDePasse;
        creationCompte.pseudo=pseudo;
        $.ajax({
            url: REGISTER_URL,
            type: 'POST',
            data: JSON.stringify(creationCompte),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            statusCode:{
                201:function() {
                    window.location="login.html"; 
                }
            } 
        });  
        /*
        creationCompte=JSON.stringify(creationCompte);
        console.log(creationCompte);
        $.post(REGISTER_URL,creationCompte,function(){
            console.log(creationCompte);
            
        },"json")
        */
        /*
        
                
           
        */
        
    });
});