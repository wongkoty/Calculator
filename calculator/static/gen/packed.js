console.log('herro')

$(document).ready(function() {

  var augend = "";
  var augendBool = false;
  // var addendBool = false; 
  var addend = 0;
  var sum = 0;
  var theRealsum = 0;
  var operation = "";

  var equals = function() {
    if (operation === "") {
      sum = parseInt(augend);
    } else if (operation === "plus") {
      sum += parseInt(augend);
      augend = "";
      $('#window').empty()
      $('#window').append(sum)
    } else if (operation === "minus") {
      sum -= parseInt(augend);
      augend = "";
      $('#window').empty()
      $('#window').append(sum)
    }
  }
  // var checkAll = function(){
  //   if (augendBool = false){
  //     augendBool = true;
  //     return true;
  //   } else {
  //     augendBool = false;
  //     return false;
  //   }
  // }


  // number click functions
  $('#one').click(function() {
    // alert("handler has been clicked")
    $('#window').empty()
    augend += "1";
    // addend = 1;
    // augend = ($('#window').html())
    $('#window').append(augend)
    console.log(augend)
    equals();
    operation = "";
  });

  $('#two').click(function() {
    $('#window').empty()
    augend = 2;
    $('#window').append(augend)
    console.log(augend)
    equals();
    operation = "";
  });

  $('#plus').click(function() {

  })

  $('#plus').click(function() {
    // equals();
    operation = "plus";
  
    // if (operation === "plus") {
    //   sum += augend
    //   $('#window').empty();
    //   $('#window').append(sum);
    //   console.log(sum);
    //   augend = 0;
    // }

  });

  $('#minus').click(function() {
    // equals();
    operation = "minus";
  
    // if (operation  === "minus") {
    //   sum -= augend
    //   $('#window').empty()
    //   $('#window').append(sum)
    //   console.log(sum)
    //   augend = 0;
    // }

  });

  $('#three').click(function(){
    $('#window').empty()
    augend = 3;
    $('#window').append(augend)
    console.log(augend)
    equals();
    operation = "";
  });

  $('#four').click(function(){
    $('#window').empty()
    augend = 4;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#five').click(function(){
    $('#window').empty()
    augend = 5;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#six').click(function(){
    $('#window').empty()
    augend = 6;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#seven').click(function(){
    $('#window').empty()
    augend = 7;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#eight').click(function(){
    $('#window').empty()
    augend = 8;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#nine').click(function(){
    $('#window').empty()
    augend = 9;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });

  $('#zero').click(function(){
    $('#window').empty()
    augend = 0;
    $('#window').append(augend)
    console.log(augend)
        equals();
    operation = "";
  });


  $('#equals').click(function() {
    equals()
    // sum.push(augend)
    // sum.forEach(function(x){
    //   theRealsum += x;
    // })
    // console.log(theRealsum)
  });


  $('#clear').click(function() {
    $("#window").empty()
    sum = 0;
    augend = 0;
  });



});
