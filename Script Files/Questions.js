//The Arrays Required the input mulitple choice questions to function
var multiquestions = [];
multiquestions[0] = ["What kind of loop executes the bloke of code first?"];
multiquestions[1] = ["When would you use a While loop?"];
multiquestions[2] = ["When would you use a For loop?"];
multiquestions[3] = ["What is the format of the foor loop?"];
    
var choice = [];
choice[0] = ["While loop", "For loop", "The Do loop"];
choice[1] = ["When you know how many iterations there are",
             "When you do not know how many iteration there are",
             "When you want to know how many iterations are left"];
choice[2] = ["When you want to know how many iterations are left",
             "When you do not know how many iteration there are",
             "When you know how many iterations there are"];
choice[3] = ["(intalize, check, count)",
             "(check, count, intalize)",
             "(count, intalize, check)"];
    
var multianswers = [];
multianswers[0] = ["The Do loop"];
multianswers[1] = ["When you do not know how many iteration there are"];
multianswers[2] = ["When you know how many iterations there are"];
multianswers[3] = ["(intalize, check, count)"];

//----------------------------------------------------------------------------------------------------------------------
//The Arrays Required the input questions to function

var question = [];
question [0] = ["How do you print 'Hello World' to the command line?"];
question [1] = ["How do you define a for loop?"];

var answer = [];
answer [0] = ["System.out.println('Hello World')"];
answer [1] = ["Some answer"];

//----------------------------------------------------------------------------------------------------------------------

var score = 10; // Finish the automatic changing tomorrow for Mastery Based Learning. Once done try and implement it in cookies so it hold the information
                // for multiple uses.

//Function that will randomly decide which 
function DisplayQuestion(){
    if(score < 10){
        var output = Math.floor(Math.random() * 2);
        if(output == 0){
            MultiQuest();
        } else {
            SingleQuestion();
        }
    } else {
         document.getElementById('question').innerHTML = '<p id = "Q1">Section completed<p><br>';
    }
}

// Below are the required fucntions needed for the mulitple choice segment for the ADHD/Anexity aspect pedagogical needs
function MultiQuest(){
    var output = Math.floor(Math.random() * (multiquestions.length));
    var choicesOut = [];
    
    document.getElementById('question').innerHTML = '<p id = "Q1">' + multiquestions[output] + '<p><br>';
        
    for(var k = 0;k < choice[output].length; k++ ){
        choicesOut.push('<p><input id = "choice'+[k]+'" type = "radio" name = "option" value="'+choice[output][k]+'">' + choice[output][k] + '<p>');    
    }
    document.getElementById('answers').innerHTML = choicesOut.join("");
        document.getElementById('button').innerHTML = '<p><button onClick = "MultiAnswer()">Submit</button></p>';
}

function MultiAnswer(){
    
    var currentQuestion = document.getElementById('Q1').textContent;
    var number = multiQuestions(currentQuestion);
    var correctAnswer = multianswers[number];
    var givenAnswer;
    
    var options = document.getElementsByName('option');
    var i
    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            givenAnswer = options[i].value;
        }
    }
    
    if(givenAnswer == correctAnswer){
        alert("Right Answer!");
    } else {
        alert("Wrong Answer!");
    }
    i = 0;
    DisplayQuestion();
}

function multiQuestions(currentQuestion){
    for(var i = 0; i < multiquestions.length; i++){
        if(currentQuestion == multiquestions[i]){
            return i;
        }
    }
    return null;
}

//------------------------------------------------------------------------------------
// Below are the required fucntions needed for the input segment for the ADHD/Anexity aspect pedagogical needs

function SingleQuestion(){
    
    var output = Math.floor(Math.random() * question.length);
    
    document.getElementById('question').innerHTML = '<p id = "Q1">' + question[output] + '<p><br>';    
    document.getElementById('answers').innerHTML = '<input id = "answerPoint" type="text" value="">';
    document.getElementById('button').innerHTML = '<p><button onClick = "inputAnswers()">Submit</button></p>';
}

function inputAnswers(){
    var currentQuestion = document.getElementById('Q1').textContent;
    var number = singleQuestions(currentQuestion);
    var correctAnswer = answer[number];
    
    var userInput = document.getElementById('answerPoint').value;
    document.getElementById('answerPoint').value = "";
    
    if(userInput == correctAnswer){
        alert("Correct");
    } else {
        alert("Not Correct");
    }
}

function singleQuestions(currentQuestion){
    for(var i = 0; i < question.length; i++){
        if(currentQuestion == question[i]){
            return i;
        }
    }
    return null;
}



