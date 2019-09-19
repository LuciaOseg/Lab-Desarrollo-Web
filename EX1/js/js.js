
/*
1. Función que muestra y esconde la sección para hacer comentarios
   al hacer click el botón 'Escribe una reseña'.
   on click!
   (5 puntos)
*/
$('#escribe_reseña').on('click', function(event){
  alert("Hello! I am an alert box!!");

    let $seccion_comentario= $('#seccion_comentario')

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

    $(data).find("comment").ecommentach(function(event) {
      new_html += `
        <h3>${$(this).find("name").text()}</h3>

      `;
    });
    $("#seccion_reviews").append(new_html);
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


/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/


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
