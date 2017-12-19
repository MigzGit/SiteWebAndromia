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

                        console.log(this.href);

                        $("#lstUnits").append("<tr><td><img class='imgUnit'src='" + this.baseUnit.imageURL +"'</img></td><td>"+this.baseUnit.name+"</td><td><a href='detailUnit.html?uuid='"+ this.href +"'>Détails de "+this.baseUnit.name+"</a></td></tr>");
                    });
                }
            }
    });
});
