const RUNES_URL = "https://https://andromia-olivierissacstj.c9users.io/explorateurs/";





$(document).ready(function() {

    let uuidExplorateur;
    let href = "https://andromia-olivierissacstj.c9users.io/explorateurs/Yzk4NTU2YWMtNDA3My00N2ViLTlhZmYtMjE2ZGYxM2EwNWFl"
    uuidExplorateur = href.substring(57, href.length - 1);
    $.get(href, function(explorateur) {

        let runes = explorateur.runes;
        
        let lstRunes = "";   
        lstRunes += '<li class="dropdown nav-item">  <img src="img/runes/air.png"/><div class="tooltip"><span class="tooltiptext">test</span></div></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["air"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/darkness.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["darkness"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/earth.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["earth"] + '</p></li>'
 
        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/energy.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["energy"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/fire.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["fire"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/life.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["life"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/light.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["light"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/logic.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["logic"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/music.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["music"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/space.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["space"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/toxic.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["toxic"] + '</p></li>'

        lstRunes += '<li class="dropdown nav-item"> <img src="img/runes/water.png"/></li>';
        lstRunes += '<li class="dropdown nav-item paddingDroite"> <p class="text-orientation-right-css txtRunesStyle">' + runes["water"] + '</p></li>'
   
        $("#lstRunes").append(lstRunes);
    })
})