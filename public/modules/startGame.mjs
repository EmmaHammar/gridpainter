export function Start(startGameRoute, stopTimeRoute, randomRoute, printGameModeRoute) {
    
    const root = document.getElementById('root');
    let startGameTemplate = `
        <div id="startGameBox">
            <button id="startGameBtn">Start Game</button>
        </div>`;

    root.insertAdjacentHTML("afterbegin", startGameTemplate);
    const startGameBtn = document.getElementById("startGameBtn");


    startGameBtn.addEventListener('click', () => {
        fetch(randomRoute);
        fetch(startGameRoute);
        
        // fetch(printGameModeRoute);
    });

    // fetch(startGameRoute)
    // .then(res => res.json())
    // .then(data => {
    //     if(data === true){

    //     }
    // });

    // fetch(printGameModeRoute);

    // function printGameMode(){
    //     let startBox = document.getElementById("startGameBox");
    //     console.log("statrt is klicked!");
    //     startBox.innerHTML = "";
    //     startTimer();
    //     startGameBtn.remove();
    //     startBox.insertAdjacentHTML("afterbegin", `<button id="correctBtn">Finish Game</button> <div id="correctMsgContainer"></div>`);


    //     displayCalque();

    //     let correctMsgContainer = document.getElementById("correctMsgContainer");

    //     let correct = document.getElementById('correctBtn');
    //     correct.addEventListener('click', function () {

    //         correctImg(stopTimeRoute, correctMsgContainer);


    //     });
    // }

    // socket.on("start klicked", data => {
    //     printGameMode();

    // });

}