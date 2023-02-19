var canvas = document.getElementById('MyCanvas')
var context = canvas.getContext('2d')



canvas.width = window.innerWidth
canvas.height = window.innerHeight


var x = 10;
var y = 10;
var width = 150
var height = 150
context.fillRect(x, y, width, height);

function moveRight()
{
    context.clearRect(x, y, width, height);   
    if (x+width < window.innerWidth)
    {
        x = x+3;
        context.fillRect(x, y, width, height);
    }
    else
    {
       // y = y +3
        context.fillRect(x, y, width, height);
    }
    
}

function DefineFPS(fps, callback)
{
    this._then = Date.now();
    this._animate = function()
    {
        this._now = Date.now();
        this._difference = this._now - this._then;
        if(this._difference > 1000/fps)
        {
            callback();
            this._then = this._now;
        }
        requestAnimationFrame(this._animate.bind(this));
    }
    this._animate(); 
}
var box1 = new DefineFPS(100, moveRight);
