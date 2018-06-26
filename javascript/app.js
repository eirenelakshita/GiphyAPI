
//Create an empty array to list the buttons content
var animals = [];

//Create function that would call on gifs from API to display
function displayAnimalGifs () {
var APIkey = "y6P8GrC8GM1esEKJFShOUKV4jE83beiJ";

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+ APIkey +"&q=shark&limit=10&offset=0&rating=PG&lang=en";
}

//Create function that would render
function renderButtons () {
$("#show-gifs").empty();
for (var i = 0; i < animals.length; i++) {
    
}}

$("#submitBtn").click(function() {
    event.preventDefault();

    var animal = $("#animal-name").val().trim();
    if (animal) {
        animals.push(animal);
        renderButtons();
    }
})

$(document).on("click", ".submitBtn", displayAnimalGifs);

renderButtons();