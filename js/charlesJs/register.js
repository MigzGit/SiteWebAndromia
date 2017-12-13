

const REGISTER_URL="https://andromia-olivierissacstj.c9users.io/register/";
$(document).ready(function(){
    
    
        
    $("#creerCompte").click(function(){
        
        var motDePasse=$("#mdp").val();
        var courriel=$(".courriel").val();
        var pseudo=$("#pseudo").val();
        
        var creationCompte = {};
        creationCompte.courriel=courriel;
        creationCompte.motDePasse=motDePasse;
        creationCompte.pseudo=pseudo;
        console.log(creationCompte);
        $.post(REGISTER_URL,creationCompte,function(){
            alert("done");
        },"json");
    });
});