$("#ch3form").submit(function() {
  if(!$("input[name='standing']:checked").val() || !$("input[name='fruit']:checked").val()) {
    return false;
  }
  else {
    return true;
  }
})
