class Snake{
    constructor(ctx){
        this.ctx = ctx;
        this.w = 60;
        this.h = 60;
        this.moveSpeed = 3;
        this.moveDirection = "right";
        this.bodys = [
            [120, 0],
            [60, 0],
            [0, 0]
        ];
        this._init();
    }

    _init(){
        document.addEventListener("keydown", (e) =>{
            switch (e.keyCode){
                case 37: //left
                    if (this.moveDirection == "right") return;
                    this.moveDirection = "left";
                    break;
                case 38: //up
                    if (this.moveDirection == "down") return;
                    this.moveDirection = "up";
                    break;
                case 39: //right
                    if (this.moveDirection == "left") return;
                    this.moveDirection = "right";
                    break;
                case 40: //down
                    if (this.moveDirection == "up") return;
                    this.moveDirection = "down";
                    break;

            }
        });
    }

    drawGrid(){
        var ctx = this.ctx;
        for (let i = 0; i < 11; i++){
            ctx.beginPath();
            ctx.moveTo(0, 60 * i);
            ctx.lineTo(600, 60 * i);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(60 * i, 0);
            ctx.lineTo(60 * i, 600);
            ctx.stroke();
        }
    }

    move(){
        /*投放食物*/
        this.putInFood();

        var fn;
        this.timeId = setTimeout(fn = () =>{
            this.bodys.pop();
            var firstBody = this.bodys[0];  //蛇头
            //更改this.bodys数组
            switch (this.moveDirection){
                case "right":
                    var newFirstBody = [firstBody[0] + 60, firstBody[1]];
                    this.bodys.unshift(newFirstBody);
                    break;
                case "down":
                    var newFirstBody = [firstBody[0], firstBody[1] + 60];
                    this.bodys.unshift(newFirstBody);
                    break;
                case "left":
                    var newFirstBody = [firstBody[0] - 60, firstBody[1]];
                    this.bodys.unshift(newFirstBody);
                    break;
                case "up":
                    var newFirstBody = [firstBody[0], firstBody[1] - 60];
                    this.bodys.unshift(newFirstBody);
                    break;
            }

            this.draw();// 绘制蛇的身体
            this.eatFood();
            this.timeId = setTimeout(fn, 2000 / this.moveSpeed)
            this.isDead();
        }, 0);

    }

    /*绘制蛇的神态*/
    draw(){
        var ctx = this.ctx;
        ctx.clearRect(0, 0, 600, 600);
        this.drawGrid();
        this.drawFood();
        let bodys = this.bodys;
        for (let i = 0; i < bodys.length; i++){
            let body = bodys[i];
            ctx.save();
            ctx.fillStyle = "pink";
            ctx.fillRect(body[0], body[1], this.w, this.h);
            ctx.restore();
            ctx.save();
            ctx.strokeRect(body[0], body[1], this.w, this.h);
            ctx.restore();
        }
    }

    /*投放食物*/
    putInFood(){
        while (true){
            var x = randomInt(0, 9) * 60;
            var y = randomInt(0, 9) * 60;
            var flag = false;
            for (let i = 0; i < this.bodys.length; i++){
                let body = this.bodys[i];
                if (x == body[0] && y == body[1]){
                    flag = true;
                    break;
                }
            }
            if (!flag){
                this.food = [x, y];
                break;
            }
        }
    }

    drawFood(){
        ctx.save();
        ctx.fillStyle = "green";
        ctx.fillRect(this.food[0], this.food[1], 60, 60);
        ctx.restore();
        ctx.save();
        ctx.strokeRect(this.food[0], this.food[1], 60, 60);
        ctx.restore();
    }

    eatFood(){
        var firstBody = this.bodys[0];
        var food = this.food;
        if (food[0] == firstBody[0] && food[1] == firstBody[1]){
            this.bodys.push(food);
            this.putInFood();
            this.moveSpeed += 0.5;
        }
    }

    isDead(){
        var f = this.bodys[0];
        if (f[0] < 0 || f[1] < 0 || f[0] > 540 || f[1] > 540){
            clearTimeout(this.timeId);
            alert("游戏结束" + this.timeId);
            this.bodys = [[120, 0],
                [60, 0],
                [0, 0]];
            this.moveDirection = "right";
            this.moveSpeed = 3;
            this.move();
        }
    }

}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var snake = new Snake(ctx);
snake.drawGrid();
snake.move();

/**
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}