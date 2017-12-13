const UNITS_URL="https://andromia-olivierissacstj.c9users.io/units/test";

$(document).ready(function(){
    
    var units=[];
    
    $.get(UNITS_URL,function(data){
        $.each(data,function(){
            console.log(data);
            $(".table").append("<tr><td>"+this.imgURL+"</td><td>"+this.name+"</td><td><a href=#>Détails de "+this.name+"</a></td></tr>");
        });
    });
    
    
});