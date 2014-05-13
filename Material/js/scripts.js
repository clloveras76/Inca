
/*

$(document).ready(function(){  
  
    $('#boton_cargar').click(function() {  
        $.ajax({  
            url: 'producto_1.html',  
            success: function(data) {  
                $('#div_dinamico').html(data);  
            }  
        });  
    });  
  
    $('#boton_cargar_anim').click(function() {  
        $.ajax({  
            url: 'contenido_anim.html',  
            success: function(data) {  
                $('#div_dinamico_anim').html(data);  
                $('#div_dinamico_anim div').slideDown(1000);  
            }  
        });  
    });  
  
});  

*/

/* Cargar Menu left  Productos*/

$(document).ready(function() {

    $("#MenuLeftContainer").load('menu_left_productos.html');


});

/* Cargar Menu left  Productos*/









