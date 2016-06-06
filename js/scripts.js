$(document).ready(function() {
  $("form").submit(function(event){
  event.preventDefault();
  var favorites = ["fruit", "color", "season", "baby"];
  favorites.forEach(function(favorite) {
    var userInput = $("#" + favorite + "Input").val();
    $("#" + favorite).text(userInput);
    });
  $(".input").show();
  });
});
