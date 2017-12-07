

const REGISTER_URL="https://https://andromia-olivierissacstj.c9users.io/register";
$(document).ready(function(){

    $("#annulerCompte").on("click",function(){
        window.location.href='file:///D:/SiteWebAndromia/login.html';
    });
        
    $("#creerCompte").click(function(){
        var motDePasse=$("#password-field").val();
        var courriel=$(".courriel").val();
        var pseudo=$(".pseudo").val();
        
        var creationCompte = {};
        creationCompte.courriel=courriel;
        creationCompte.motDePasse=motDePasse;
        creationCompte.pseudo=pseudo;
        
        console.log(motDePasse);
    });
});