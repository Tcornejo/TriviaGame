$(document).ready (function(){
  
  //Start Button
  $(".start").click(function(){
    run();
  });

  //Variables
  var number = 60;
  var correct = 0;
  var incorrect = 0;

  //Timer
  function run(){
      counter = setInterval(increment, 1000);
      pageTwo();
    }
    
    function increment(){
      number--
      document.getElementById("timer").innerHTML = ("<strong>Time Left: " + number + " seconds</strong>");
        if (number === 0){
        stop();
        pageThree();
      }
    }
    function stop(){
      clearInterval(counter);
    }


    //Question and Answers
  function pageTwo(){

    //Question 1
    $("#question").append("<strong>Which country was previously called Abyssinia?</strong><br>");
    $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>Cambodia<br>");
    $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>Paraguay<br>");
    $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>Chile<br>");
    $("#question").append("<input type='radio' id='question1' name='group1' value='correct'>Ethiopia<br>");
    $("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>South Korea<br><br>");

    //Question 2
    $("#question").append("<strong>What is the world's third largest sea?</strong><br>");
    $("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Red<br>");
    $("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Caspian<br>");
    $("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Baltic<br>");
    $("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Lake Michigan<br>");
    $("#question").append("<input type='radio' id='question2' name='group2' value='correct'>Mediterranean<br><br>");

    //Question 3
    $("#question").append("<strong>Where would you find the Queen Alexandra, Queen Elizabeth and Queen Maud mountain ranges?</strong><br>");
    $("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Russia<br>");
    $("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Canada<br>");
    $("#question").append("<input type='radio' id='question3' name='group3' value='correct'>Antarctica<br>");
    $("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Greenland<br>");
    $("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>Iceland<br><br>");

    //Question 4
    $("#question").append("<strong>The tenge is the basic monetary unit of which country?</strong><br>");
    $("#question").append("<input type='radio' id='question4' name='group4' value='correct'>Kazakhstan<br>");
    $("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>Cambodia<br>");
    $("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>Ecuador<br>");
    $("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>Germany<br>");
    $("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>Poland<br><br>");

    //Question 5
    $("#question").append("<strong>What's the most southerly city; Toronto, Seattle, Budapest or Bordeaux?</strong><br>");
    $("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Seattle<br>");
    $("#question").append("<input type='radio' id='question5' name='group5' value='correct'>Toronto<br>");
    $("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Bordeaux<br>");
    $("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Budapest<br>");
    $("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Trick Question<br><br>");

    //Question 6
    $("#question").append("<strong>In which South American country is the Atacama desert?</strong><br>");
    $("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Brazil<br>");
    $("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Venezuela<br>");
    $("#question").append("<input type='radio' id='question6' name='group6' value='correct'>Chile<br>");
    $("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Argentina<br>");
    $("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>Paraguay<br><br>");

    //Question 7
    $("#question").append("<strong>What is the capital of Qatar?</strong><br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='correct'>Doha<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Damascus<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Ankara<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Jerusalem<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Tapaie<br><br>");

    //Question 8
    $("#question").append("<strong>Which is the least populated state in the USA?</strong><br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='correct'>Wyoming<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Delaware<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Montana<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Rhode Island<br>");
    $("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Iowa<br><br>");

    $("#question").append("<br>");

    //Check Answers 
    $('input[id=question1]').on('change', function() {
        var answer = $('input[name=group1]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question2]').on('change', function() {
        var answer = $('input[name=group2]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question3]').on('change', function() {
        var answer = $('input[name=group3]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    }); 

    $('input[id=question4]').on('change', function() {
        var answer = $('input[name=group4]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question5]').on('change', function() {
        var answer = $('input[name=group5]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question6]').on('change', function() {
        var answer = $('input[name=group6]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question7]').on('change', function() {
        var answer = $('input[name=group7]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    });

    $('input[id=question8]').on('change', function() {
        var answer = $('input[name=group8]:checked', '#question').val();
        if(answer == "correct"){
          correct++
        }else if(answer == "wrong"){
          incorrect++
        }
    }); 

    //Submit
    var s=$('<button class="btn btn-success" id="submit" type="submit"> Submit</button>');
    $("#question").append(s);

    $("#submit").click(function(){
      stop();
      pageThree();
    });

    }

  //Final Tally
  function pageThree(){

    document.getElementById("done").innerHTML = ("Complete!" + "<br>"); 
    
    $("#done").append("Correct Answers: " + correct + "<br>");
    $("#done").append("Wrong Answers: " + incorrect  + "<br>");

  }

});