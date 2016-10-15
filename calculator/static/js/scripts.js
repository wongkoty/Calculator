console.log('herro')

$(document).ready(function() {

  var augend = 0; 
  var addend = 0;
  var answer = 0;
  var theRealAnswer = 0;
  var operation = "";

  var equals = function() {
    if (operation === "plus") {
      answer += augend;
      augend = 0;
    } else if (operation === "minus") {
      answer -= augend;
      augend = 0;
    }
    $('#window').empty()
    $('#window').append(answer)
  }

  // number click functions
  $('#one').click(function() {
    // alert("handler has been clicked")
    $('#window').empty()
    augend = 1;
    // augend = ($('#window').html())
    $('#window').append(augend)
    console.log(augend)
    // operation = "";
  });

  $('#two').click(function() {
    $('#window').empty()
    augend = 2;
    $('#window').append(augend)
    console.log(augend)
    // operation = "";
  });

  $('#plus').click(function() {
    operation = "plus";
    equals();
   
  // if (operation === "plus") {
  //   answer += augend
  //   $('#window').empty();
  //   $('#window').append(answer);
  //   console.log(answer);
  //   augend = 0;
  // }

  });

  $('#minus').click(function() {
    operation = "minus";
    equals();

  // if (operation  === "minus") {
  //   answer -= augend
  //   $('#window').empty()
  //   $('#window').append(answer)
  //   console.log(answer)
  //   augend = 0;
  // }

  });

  $('#three').click(function(){
    $('#window').empty()
    augend = 3;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#four').click(function(){
    $('#window').empty()
    augend = 4;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#five').click(function(){
    $('#window').empty()
    augend = 5;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#six').click(function(){
    $('#window').empty()
    augend = 6;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#seven').click(function(){
    $('#window').empty()
    augend = 7;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#eight').click(function(){
    $('#window').empty()
    augend = 8;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#nine').click(function(){
    $('#window').empty()
    augend = 9;
    $('#window').append(augend)
    console.log(augend)
  });

  $('#zero').click(function(){
    $('#window').empty()
    augend = 0;
    $('#window').append(augend)
    console.log(augend)
  });


  $('#equals').click(function() {
    equals()
    // answer.push(augend)
    // answer.forEach(function(x){
    //   theRealAnswer += x;
    // })
    // console.log(theRealAnswer)
  });


  $('#clear').click(function() {
    $("#window").empty()
    answer = 0;
    augend = 0;
  });



});
