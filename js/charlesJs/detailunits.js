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
                     console.log(data);
                     $("#unitName").text(data.baseUnit.name);
                     $("#imgUnit").attr("src", data.baseUnit.imageURL);
                     $("#life").text(data.baseUnit.life);
                     $("#speed").text(data.baseUnit.speed);
                     $("#affinity").text(data.baseUnit.affinity);
                     var runes=JSON.parse(data.runes);
                     
                     $.each(runes.weapon,function(){
                        $("#weapons").append("<td>"+this+"</td>");
                     });
                     $.each(runes.abilities,function(){
                        $("#abilities").append("<td>"+this+"</td>");
                     });
                     if(!runes.ultimate)
                     {
                         $("#ultimate").append("<td>Aucun</td>");
                     }
                     else{
                          $("#ultimate").append("<td>"+runes.ultimate+"</td>");
                     }
                     $("#set").text(data.baseUnit.edition);
                     $("#number").text(data.baseUnit.number);
                 }
            }
    });
});