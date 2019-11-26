$(".preview").hover(function() {
  $("#image").css("background-image", "url(" + $(this)[0].src + ")");
  $("#image").text($(this)[0].alt);
},
function() {
  $("#image").css("background-image", "url('')");
  $("#image").text("Hover over an image below.");
});

$(".preview").focusin(function() {
  $("#image").css("background-image", "url(" + $(this)[0].src + ")");
  $("#image").text($(this)[0].alt);
})
$(".preview").focusout(function() {
  $("#image").css("background-image", "url('')");
  $("#image").text("Hover over an image below.");
})
