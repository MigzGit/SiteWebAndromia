//const UNITS_URL;

$(document).ready(function(){
    
        
    if(!localStorage.token)
    {
        window.location="login.html"; 
    }
    
    var units=[];
    
    $.ajax({
         url: localStorage.explorateurHref,
            type: 'GET',
            async: false,
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            },
            statusCode:{
                200:function(data){
                     $.each(data.units,function(){
                        var hrefSplit=this.href.split("/");
                        var uuid=hrefSplit[hrefSplit.length-1];
                        $("#lstUnits").append("<tr class='rowUnit'><td class='boiteImg'><img class='imgUnit'src='" + this.baseUnit.imageURL +"'</img></td><td class='nameUnit'>"+this.baseUnit.name+"</td><td><a href='detailUnit.html?uuid="+ uuid +"'>Détails de "+this.baseUnit.name+"</a></td></tr>");
                    });
                }
            }
    });
});
