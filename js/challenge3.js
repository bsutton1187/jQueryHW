$("#ch3form").submit(function(){

  if ($("input[name=fruit]").is(":checked")){
  }
  else {
    alert("you must pick a fruit!")
    return false;
  }
  if ($("input[name=standing]").is(":checked")){

  }

  else {
    alert("you must pick a standing!")
    return false;
  }
})




// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
  //}
