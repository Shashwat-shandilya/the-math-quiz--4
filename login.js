function addUser(){
    var player1Name = document.getElementById("player1Name").value;
    var player2Name = document.getElementById("player2Name").value;

    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    

    if(player2Name == ""){
        window.alert("please enter your names");
        return
    }else{
        window.location = "index1.html";
    }

    if(player1Name == ""){
        window.alert("please enter your names");
        return
    }else{
        window.location = "index1.html";
    }
}