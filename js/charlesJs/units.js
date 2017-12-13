//const UNITS_URL;

$(document).ready(function(){
    
        
       $.get(localStorage.explorateurHref, function(explorateur) {

        let runes = explorateur.runes;
        
        let lstRunes = "";   
        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/air.png"/><p class="tooltxt" >Air</p></div></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["air"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/darkness.png"/><p class="tooltxt" >Darkness</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["darkness"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/earth.png"/><p class="tooltxt" >Earth</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["earth"] + '</p></li>'
 
        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/energy.png"/><p class="tooltxt" >Energy</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["energy"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/fire.png"/><p class="tooltxt" >Fire</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["fire"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/life.png"/><p class="tooltxt" >Life</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["life"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/light.png"/><p class="tooltxt" >Light</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["light"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/logic.png"/><p class="tooltxt" >Logic</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["logic"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/music.png"/><p class="tooltxt" >Music</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["music"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <div class="toolRune"><img src="img/runes/space.png"/><p class="tooltxt" >Space</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["space"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"><div class="toolRune"><img src="img/runes/toxic.png"/><p class="tooltxt" >Toxic</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["toxic"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"><div class="toolRune"><img src="img/runes/water.png"/><p class="tooltxt" >Water</p></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["water"] + '</p></li>'
   
        $("#lstRunes").append(lstRunes);
    })
    var units=[];
    
    $.get(localStorage.explorateurHref,function(data){
        $.each(data.units,function(){
            $(".table").append("<tr><td>"+this.imgURL+"</td><td>"+this.name+"</td><td><a href=#>Détails de "+this.name+"</a></td></tr>");
        });
    });
    
    
});