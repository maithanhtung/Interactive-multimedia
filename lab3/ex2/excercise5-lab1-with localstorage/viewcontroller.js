var viewController = new ViewController();

function ViewController()
{
	this.personModel = new PersonModel();

	this.updateView = function()
	{
		var results = document.getElementById("list_name");
		var persons = new Array();
		var c ="";
		persons = this.personModel.getPerson();
		for (var i = 0; i < persons.length; i++) {
			
			c += persons[i].name + "<br>";
		}
		 document.getElementById("list_name").innerHTML = c;
	}

	this.addPerson = function(name)
	{
		var newPerson = new Person(name);
		this.personModel.addPerson(newPerson);
		this.updateView();
	}
}