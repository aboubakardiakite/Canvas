let raf;
let tim;
export default class Animation{
    constructor(canvas){
        this._canvas = canvas;
        this._balls = [];
        this._context = canvas.getContext("2d");
    }
    moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.balls.forEach(ball => {
            ball.move(this.canvas);
            ball.draw(this.context);
        });
        tim = window.setTimeout(() => {
            raf = window.requestAnimationFrame(() => this.moveAndDraw());
        },25);        
    }
    addBall(ball){
        this.balls.push(ball);
    }
    start(){
        raf = window.requestAnimationFrame(() => this.moveAndDraw());
    }
    stop(){
        window.clearTimeout(tim);
        window.cancelAnimationFrame(raf);
    }
    get context(){
        return this._context;
    }
    set context(_c){
    }
    get canvas(){
        return this._canvas;
    }
    set canvas(_c){
    }
    get balls(){
        return this._balls;
    }
    set balls(b){
        this._balls = b;
    }
    get raf(){
        return raf;
    }
    set raf(_r){
    }
    get tim(){
        return tim;
    }
    set tim(_t){
    }
}
