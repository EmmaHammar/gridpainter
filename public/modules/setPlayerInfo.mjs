
export function setPlayerInfo() {
  return new Promise ((resolve, reject) => {
    console.log(localStorage.getItem("playerColor"));
    console.log('click');

    let inputNameValue = document.getElementById('inputUserName').value;

    console.log("inputNameValue: " + inputNameValue);
    if(!inputNameValue){
      console.log('Please pick a name!');
    } else {
      localStorage.setItem("playerName", inputNameValue);
      console.log("localStorage", localStorage.getItem("playerName"));
      let playerId = localStorage.getItem('socketId');
      

      fetch("http://localhost:3000/colors", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({playerId: playerId})
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log("hello from json");
        console.log(data.color);
        if(data.color === 'none'){
            console.log("Game is full");
            reject("The game is full. Try again later.");
        } else {
            localStorage.setItem("playerColor", data.color);
            console.log('player color is ' + data.color);
            resolve();
            // setUserColorVar();
        }
      });
    }
  })
  
}
