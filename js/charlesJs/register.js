

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
        
        if(courriel.indexOf("@")>=0)
        {
        
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
                        
                    },
                    415:function(){
                        $("#messageErreur").append("<p>Courriel vide.</p>")
                        setTimeout(function(){
                            $("p").remove();
                        },5000); 
                    }
                },
                error:function(a){
                    $("#messageErreur").append("<p>Courriel ou mot de passe invalide.</p>")
                    setTimeout(function(){
                        $("p").remove();
                    },5000); 
                }
            });  
        }
        else{
            $("#messageErreur").append("<p>Courriel invalide.</p>")
            setTimeout(function(){
                $("p").remove();
            },5000); 
        }
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