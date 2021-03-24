import Animation from "./animation.js";
export default class AnimationWithObstacle extends Animation{
    constructor(canvas, obstacle){
        super(canvas);
        this.obstacle = obstacle;
    }
    moveAndDraw(){
        super.moveAndDraw();
        // super.balls.filter(ball => ball.collisionWith(this.obstacle));
        super.balls.forEach((ball,i) =>{
            if(ball.collisionWith(this.obstacle)){
                super.balls.splice(i,1);
            }
        });
        this.obstacle.move(this.canvas);
        this.obstacle.draw(super.context);
    }
    keyDownActionHandler(event){
        switch(event.key){
            case "ArrowLeft":
            case "Left":
                this.obstacle.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.obstacle.moveRight();
                break;
            case "ArrowUp":
            case "Up":
                this.obstacle.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.obstacle.moveDown();
                break;
            default: 
                return;
        }
        event.preventDefault();
    }
    keyUpActionHandler(event){
        switch(event.key){
            case "ArrowLeft":
            case "Left":
            case"ArrowRight":
            case "Right":
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.obstacle.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
}