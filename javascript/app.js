
//Create an empty array to list the buttons content
var animals = ["shark", "hippopotamus", "camel", "dolphin", "penguin"];

//Create function that would call on gifs from API to display
function displayAnimalGifs () {

var animal = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
animal + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var results = response.data;
    console.log(response);
    for (var i = 0; i < results.length; i++) {
    console.log(results[i].images.fixed_height.url);
    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    $("#show-gifs").prepend(p);
    }
})
}

//Create function that would render
function renderButtons () {
$("#show-gifs").empty();
for (var i = 0; i < animals.length; i++) {
    var a = $("<button>");
    a.addClass("animal-btn");
    a.attr("data-name", animals[i]);
    a.text(animals[i]);
    $("#show-buttons").append(a);
}}

$("#submitBtn").click(function() {
    event.preventDefault();

    var animal = $("#animal-name").val().trim();
    if (animal) {
        animals.push(animal);
        renderButtons();
    }
})

$(document).on("click", ".animal-btn", displayAnimalGifs);

renderButtons();