function PersonModel()
{
	this.persons = new Array();

	this.addPerson = function(person){
		this.persons.push(person);
	}

	this.getPerson = function(){
		return this.persons;
	}

}