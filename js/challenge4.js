$("#ch4form").submit(function(){
  var name_length = $("input[name=fullname]").val().length
  var address_length = $("input[name=streetaddr]").val().length;
  console.log(name_length)
  if(name_length == 0) {
    $("#nameerrormsg").show()
    return false
  }
  if(address_length == 0){
    $("#addrerrormsg").show()
    return false
  }
  else{
    alert("good")
    return true

  }
})











// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
