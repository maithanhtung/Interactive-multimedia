var viewController = new ViewController();

function ViewController()
{
	this.personModel = new PersonModel();

	this.updateView = function()
	{
		var results = document.getElementById("list_name");

		for (var i = 0; i < this.personModel.getPerson().length; i++) {
			var onePerson = this.personModel.getPerson()[i];
			results.innerHTML += onePerson.name;
		}
	}

	this.addPerson = function(name)
	{
		var newPerson = new Person(name);
		this.personModel.addPerson(newPerson);
		this.updateView();
	}
}