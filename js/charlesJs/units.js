//const UNITS_URL;

$(document).ready(function(){
    
        
      
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
                        $(".table").append("<tr><td>"+this.imgURL+"</td><td>"+this.name+"</td><td><a href=#>Détails de "+this.name+"</a></td></tr>");
                    });
                }
            }
    });
    
        /*
       
        */
    
   
    
    
});