function PersonModel()
{
	this.persons = new Array();
	this.addPerson = function(person){
	this.persons = JSON.parse(localStorage.getItem('persons'));
    // Push the new data (whether it be an object or anything else) onto the array
    this.persons.push(person);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('persons', JSON.stringify(this.persons));

	}

	this.getPerson = function(){
		return JSON.parse(localStorage.getItem("persons"));
		
	}

}