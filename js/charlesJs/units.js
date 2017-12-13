//const UNITS_URL;

$(document).ready(function(){
    
        
      
    var units=[];
    
    $.get(localStorage.explorateurHref,function(data){
        $.each(data.units,function(){
            $(".table").append("<tr><td>"+this.imgURL+"</td><td>"+this.name+"</td><td><a href=#>Détails de "+this.name+"</a></td></tr>");
        });
    });
   
    
    
});