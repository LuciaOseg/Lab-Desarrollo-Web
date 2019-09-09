//Funcion para cargar los campus en el select
function getFields(){
	$.ajax({
		url: "data/grammys.json",
		type: "GET",
		dataType: "json",

		success: function(data){
			let nuevo_html = " ";
			nuevo_html += `<option id="nulo">Select a category</option>`;
			fields = data.fields;
			for (var i = 0; i < data.fields.length; i++) {
				nuevo_html += `
				<option value="${data.fields[i].field_id}">
					${data.fields[i].field}
				</option>
				`
			}

			$("#category_types").append(nuevo_html);
		},
		error: function(error_msg){
			console.error(error_msg)
		}
	});
}

//Funcion que toma la informacion de cada categoria

function getInfoNominees(nominees, winner_id){
	var nuevo_html = "";

	for (var i = 0; i < nominees.length; i++){
		if(winner_id == i)
		{
			ifWinner = "winner";
			nuevo_html += `<li class="winner">${nominees[i].nominee}
						<span class="winner_msg">WINNER!</span></li>
						<p class="artist">${nominees[i].artist}</p>
						`
		}else{
			nuevo_html += `<li style="font-weight:bold">${nominees[i].nominee}</li>
						<p class="artist">${nominees[i].artist}</p>
						`
		}

		if(nominees[i].info != ""){
			nuevo_html += `<p class="nomineeInfo">${nominees[i].info}</p>`
		}
	}

	return nuevo_html;
}


function getInfoCategories(categories){
	var nuevo_html = "";

	for (var i = 0; i < categories.length; i++) {
		nuevo_html += `
			<div class="category">
			<h3>${categories[i].category_name} </h3>
			<p> ${categories[i].description}</p>
			<ul>${getInfoNominees(categories[i].nominees, categories[i].winner_id)}</ul>
			</div>
			`
	}
	return nuevo_html;
}

function getInfoField(seleccionadoField){
	var nuevo_html = "";
	nuevo_html += `<h2>${seleccionadoField.field}</h2>`;

	if(seleccionadoField.description != null){
		nuevo_html += `
			<p class="description">
			${seleccionadoField.description}
			</p>
			`
	}

	nuevo_html+= getInfoCategories(seleccionadoField.categories);
	$("#nominees_section").empty();
	$("#nominees_section").append(nuevo_html);

}
////////

//Desencadenador de buscar la info para el field seleccionado
$("#category_types").on('change', function(event){
	let seleccionado = $(this).val();
	if(seleccionado != "nulo"){
		//Remove the "Select the category" option
		$("#nulo").remove();
	}
	//Buscar por el valor seleccionado entre todos los Fields
	for (var i = 0; i < fields.length; i++) {
		if(fields[i].field_id == seleccionado){
			getInfoField(fields[i]);
		}
	}
})

var fields;
getFields();
