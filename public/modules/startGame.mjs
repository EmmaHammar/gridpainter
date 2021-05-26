import { randomPic } from "./randomPic.mjs";
import { startTimer } from "./timer.mjs";
import { displayCalque } from "../modules/displayCalque.mjs";

export function Start(startGameRoute) {
    const root = document.getElementById('root');
    // root.insertAdjacentHTML("beforebegin", "<div id ='startGameBox'></div>");
    // let startGameBtn = document.createElement('button');
    // startGameBtn.innerText = 'Start game';
    // startGameBtn.id = 'startGameBtn';
    // document.getElementById('startGameBox').appendChild(startGameBtn);
    // // let startBtn = document.getElementById("startGameBtn");
    // let startBox = document.getElementById("startGameBox");

    let startGameTemplate = `
        <div id="startGameBox">
            <button id="startGameBtn">Start Game</button>
        </div>
    `;

    root.insertAdjacentHTML("afterbegin", startGameTemplate);
    const startGameBtn = document.getElementById("startGameBtn");
    

    startGameBtn.addEventListener('click', () => {

        // socket.emit("startGame", {text: "testing"});
        // randomPic();

        fetch(startGameRoute)
        console.log('game start clicked!');
        // startGameBtn.remove();
        // .then(result => result.json())
        // .then(data => {
        //     console.log(data);
        // })


    });
    startTimer();
    // socket.on("timer", function (data){
    //     timeBox.innerHTML = "<p>Time: " + data.countdown + "</p>";
    // });

    socket.on("startGame", data => {


        startBox.innerHTML = "";
        startTimer();
        displayCalque();

        // if(localStorage.getItem("hasStarted") !== "true"){

        // }


    });

    // if(localStorage.getItem("hasStarted") == "true"){
    //     startBox.innerHTML = "";
    //     socket.emit("startGame", {text: "testing"});
    //     displayCalque();
    //     startTimer();

    //     // socket.on("startGame", data => {
    //     //     // startBox.innerHTML = "";

    //     //     //displayCalque();         
    //     // });
    // }


}