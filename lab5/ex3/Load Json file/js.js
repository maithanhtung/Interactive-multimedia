function doStuff(){
    $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
                 });
                    }

function jsonCallback(json)
{
    console.log(json);
    var text = '';
    var len = json.length;
    for(var i=0;i<len;i++){
        data = json[i];
        console.log(data);
        text += '<p>' + data.name + ' email: ' + data.email +'</p>';
    }
    $('#result').html(text);
}