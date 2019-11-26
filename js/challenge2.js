var checked = false;
function setHomeAddress() {
   if(!checked) {
     $("#home").val($("#billing").val());
     $("#home").prop("disabled", true);
     checked = true;
   }
   else {
     $("#home").val("");
     $("#home").prop("disabled", false);
     checked = false;
   }
}
