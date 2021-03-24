// import Animation from "./animation.js";
import AnimationWithObstacle from "./animationWithObstacle.js";
import Ball from "./ball.js";
import Obstacle from "./obstacle.js";

const startBtn = document.getElementById('stopStartBall');
const addBtn = document.getElementById('addBall');
const canvas = document.getElementById('terrain');
let btnBool = false;
const obstacle = new Obstacle(150,50,100,70);
const animation = new AnimationWithObstacle(canvas, obstacle);


startBtn.addEventListener("click", () =>{
    if (!btnBool){
        animation.start();
        startBtn.textContent = "Stop";
        btnBool = true;
    }else{
        animation.stop();
        startBtn.textContent = "Start";
        btnBool = false;
    }
});
const alea = n => {
    let al = Math.floor(Math.random()*n);
    while (al === 0){
        al = Math.floor(Math.random()*n);
    }
    return al;
};

addBtn.addEventListener('click', ()=>{
    let imgBall = Ball.image;
    let ball = new Ball(alea(canvas.width- imgBall.width), alea(canvas.height-imgBall.height), alea(5), alea(5));
    animation.addBall(ball);
});

window.addEventListener('keydown', animation.keyDownActionHandler.bind(animation));
window.addEventListener('keyup', animation.keyUpActionHandler.bind(animation));