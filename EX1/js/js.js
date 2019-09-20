/*
1. Función que muestra y esconde la sección para hacer comentarios
   al hacer click el botón 'Escribe una reseña'.
   on click!
   (5 puntos)
*/
$('#escribe_reseña').on('click', function(event){

    let $seccion_comentario= $('#seccion_comentario')
    $seccion_comentario.removeClass('hidden')

})


/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml
  (función ajax, 25 puntos)
*/

$.ajax({
  url: "https://tc2026daw.github.io/instrucciones/misc/comentarios.xml",
  type: "GET",
  dataType: "xml",
  success: function(data) {
    // console.log(data);
    let new_html = "";

    $(data).find("comment").each(function(event) {
      new_html += `

        <h3 class="nombre">
        ${$(this).find("name").text()}
        </h3>

        ${$(this).find("stars").val()}


        <h5 class="review">
        ${$(this).find("text").text()}
        </h5>

      `;
    });
    $(".review").append(new_html);
  },
  error: function(error_msg) {
    console.log(error_msg);
  }
});


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/

$('#btn-publicar').on('click', function(event){
  addComent();
})

function addComent(){
  if (($('#nombre').val() !== '') && ($('#comentario').val() !== '') ) {
    var nombre = $('#nombre').val()
    var newNombre = $('<h3>' + nombre + '</h3>')

    var comment = $('#comentario').val()
    var newComment = $('<h5>' + comment + '</h5>')

    $(".nuevosComentarios").append(newNombre)
    $(".nuevosComentarios").append(newComment)

    $('#nombre').val('')
    $('#email').val('')
    $('#comentario').val('')
    $(".error").css("display", "none");
     
  } else {

    $(".error").css("display", "block");
  }

}



/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/

$('#btn-limpiar').on('click', function(event){
    $('#nombre').val('')
    $('#email').val('')
    $('#comentario').val('')
    $(".error").css("display", "none");

})


/*
Funcion que recibe un numero de stars y regresa los 5 spans
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
