$(document).ready(function() {
  $("form").submit(function(event){
  event.preventDefault();

   var fruit = $("#fruitInput").val();
   var color = $("#colorInput").val();
   var season = $("#seasonInput").val();
   var baby = $("#babyInput").val();
   var favArray = [fruit, color, season, baby];
   var favArray2 = [];
   favArray2.push(favArray[2], favArray[1], favArray[3], favArray[0]);
  $("#span1").text(favArray2[0]);
  $("#span2").text(favArray2[1]);
  $("#span3").text(favArray2[2]);
  $("#span4").text(favArray2[3]);
  $(".input").show();

 });
});
