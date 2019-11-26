$("#ch4form").submit(function() {
  var validInput = true;
  if($("#fullname").val() === "") {
    $("#nameerrormsg").css("display", "block");
    validInput = false;
  }
  else {
    $("#nameerrormsg").css("display", "none");
  }
  if($("#streetaddr").val() === "") {
    $("#addrerrormsg").css("display", "block");
    validInput = false;
  }
  else {
    $("#addrerrormsg").css("display", "none");
  }
  if(validInput) {
    return true;
  }
  else {
    return false;
  }
});
