player1Name = localStorage.getItem("player1");
player2Name = localStorage.getItem("player2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_Name").innerHTML = player1Name + ": "
document.getElementById("player2_Name").innerHTML = player2Name + ": "

document.getElementById("player1_Score").innerHTML = player1Score;
document.getElementById("player2_Score").innerHTML = player2Score;

document.getElementById("playerQuestionTurn").innerHTML = "Question turn : " + player1Name;
document.getElementById("playerAnswerTurn").innerHTML = "Answer turn : " + player2Name;

function equationSend(){
    var operation = document.getElementById("operation").value;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answerformultiplication = parseInt(number1) * parseInt(number2);
    answerforsubtraction = parseInt(number1) - parseInt(number2);
    answerforaddition = parseInt(number1) + parseInt(number2);
    answerfordivision = parseInt(number1) / parseInt(number2);

    if(operation == "multiplication"){
        theEquation = "<h2>" + number1 + "X" + number2 + "</h2>";
        ANSWERinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSWERinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }

    if(operation == "subtraction"){
        theEquation = "<h2>" + number1 + "-" + number2 + "</h2>";
        ANSWERinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSWERinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
    
    if(operation == "addition"){
        theEquation = "<h2>" + number1 + "+" + number2 + "</h2>";
        ANSWERinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSWERinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }

    if(operation == "division"){
        theEquation = "<h2>" + number1 + "÷" + number2 + "</h2>";
        ANSWERinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSWERinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
}

function checkAns(){
    get_reply = document.getElementById("ansInput").value;

    question_turn = "Player1";
    answer_turn = "Player2";

    if(operation == "multiplication"){
        if(get_reply == answerformultiplication){
            if(answer_turn == "Player1"){
                updatedplayer1Score = player1Score + 1;
                document.getElementById("player1_Score").innerHTML =  updatedplayer1Score;
            }else{
                updatedplayer2Score = player2Score + 1;
                document.getElementById("player2_Score").innerHTML =  updatedplayer2Score;
            }
        }
    }

    if(operation == "subtraction"){
        if(get_reply == answerforsubtraction){
            if(answer_turn == "Player1"){
                updatedplayer1Score = player1Score + 1;
                document.getElementById("player1_Score").innerHTML =  updatedplayer1Score;
            }else{
                updatedplayer2Score = player2Score + 1;
                document.getElementById("player2_Score").innerHTML =  updatedplayer2Score;
            }
        }
    }

    if(operation == "addition"){
        if(get_reply == answerforaddition){
            if(answer_turn == "Player1"){
                updatedplayer1Score = player1Score + 1;
                document.getElementById("player1_Score").innerHTML =  updatedplayer1Score;
            }else{
                updatedplayer2Score = player2Score + 1;
                document.getElementById("player2_Score").innerHTML =  updatedplayer2Score;
            }
        }
    }

    if(operation == "division"){
        if(get_reply == answerfordivision){
            if(answer_turn == "Player1"){
                updatedplayer1Score = player1Score + 1;
                document.getElementById("player1_Score").innerHTML =  updatedplayer1Score;
            }else{
                updatedplayer2Score = player2Score + 1;
                document.getElementById("player2_Score").innerHTML =  updatedplayer2Score;
            }
        }
    }

    if(question_turn == "Player1"){
        question_turn = "Player2";
        document.getElementById("playerQuestionTurn").innerHTML =  "Question turn : " + player2Name;
    }else{
        question_turn = "Player1";
        document.getElementById("playerQuestionTurn").innerHTML =  "Question turn : " + player1Name;
    }

    if(answer_turn == "Player1"){
        answer_turn = "Player2";
        document.getElementById("playerAnswerTurn").innerHTML =  "Answer turn : " + player2Name;
    }else{
        answer_turn = "Player1";
        document.getElementById("playerAnswerTurn").innerHTML =  "Answer turn : " + player1Name;
    }

    document.getElementById("output").innerHTML = "";
}