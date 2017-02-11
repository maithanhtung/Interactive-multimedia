   

function add() {
	var input_name =document.getElementById("input_name").value;
	console.log("Adding person: " + input_name);
	 viewController.addPerson(input_name);
	//document.getElementById("list_name").innerHTML = list_name  + input_name + "<br/>";
	//var list_name =document.getElementById("list_name").innerHTML;
}