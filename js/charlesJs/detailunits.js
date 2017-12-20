const URL=localStorage.explorateurHref+"/units/";
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
})();


$(document).ready(function(){
   if(!localStorage.token)
    {
        window.location="login.html"; 
    }
    
    let uuidUnit=urlParams["uuid"];
    
    $.ajax({
         url: URL+uuidUnit,
            type: 'GET',
            async: false,
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            },
            statusCode:{
                 200:function(data){
                     $("#unitName").text(data.baseUnit.name);
                     $("#imgUnit").attr("src", data.baseUnit.imageURL);
                     $("#life").text(data.baseUnit.life);
                     $("#speed").text(data.baseUnit.speed);
                     $("#affinity").text(data.baseUnit.affinity);
                     
                     $("#weapons").append("<td id='weaponsEnum'>");
                     var weaponString="";
                     $.each(data.runesUnit.weapons,function(){
                        weaponString+=this;
                        weaponString+=","
                     });
                     weaponString=weaponString.substring(0,weaponString.length-1);
                     $("#weaponsEnum").append(weaponString+"</td>");
                     
                     $("#abilities").append("<td id='abilitiesEnum'>");
                     var abilitiesString="";
                     $.each(data.runesUnit.abilities,function(){
                       abilitiesString+=this;
                       abilitiesString+=",";
                     });
                     abilitiesString=abilitiesString.substring(0,abilitiesString.length-1);
                     $("#abilitiesEnum").append(abilitiesString+"</td>");
                     
                     if(!data.runesUnit.ultimate)
                     {
                         $("#ultimate").append("<td>Aucun</td>");
                     }
                     else{
                          $("#ultimate").append("<td>"+data.runesUnit.ultimate+"</td>");
                     }
                     $("#set").text(data.baseUnit.edition);
                     $("#number").text(data.baseUnit.number);
                 }
            }
    });
});