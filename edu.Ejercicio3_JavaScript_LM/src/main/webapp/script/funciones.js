/**
 * Rubén Bernal Ramos
 * CSI1
 */
 
function ejercicio(){
	// Crear un array vacío
	let arrayUsuario = [];

	// Pedir al usuario que introduzca 2 valores y almacenarlos en el arrayUsuario
	for (let i = 0; i < 2; i++) {
	    let valor = prompt("Introduce un valor para el array:");
	    arrayUsuario.push(valor);
	}
	
	// Crear un array con datos predefinidos
	let arrayPredefinido = ["Ruben", "Bernal", "Ramos"];
	
	// Mostrar los arrays y los tipos de datos
	window.alert("Array del usuario:" + arrayUsuario);
	window.alert("Tipo de datos del array del usuario:" + typeof arrayUsuario);
	window.alert("Valores introducidos por el usuario:" + typeof arrayUsuario[0] + typeof arrayUsuario[1]);
	
	window.alert("Array predefinido:" + arrayPredefinido);
	window.alert("Tipo de datos del array predefinido:" + typeof(arrayPredefinido));
	window.alert("Tipo de datos de los valores del array predefinido:" + typeof arrayPredefinido[0] + typeof arrayPredefinido[1] + typeof arrayPredefinido[2]);
}
