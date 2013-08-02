/*jshint indent: 2,strict: true,jquery: true */
/*globals ns: false*/

(function () {

  "use strict";

  function createBalls(startPos, num) {

    var balls = [];

    var inc = 6 / num;
    var vel = -3;
    
    for (var i = 0; i < num; i++) {

      vel += inc;

      balls.push({
        xPos : startPos.x,
        yPos : startPos.y,
        xVel : vel,
        yVel : -3,
        delay: i * 2,
        radius: 10
      });
    }

    return balls;
  }

  function Balls(bounds, options) {
    if (!(this instanceof Balls)) { 
      return new Balls();
    }

    options = $.extend({
      num: 1 
    }, options || {});

    var cX = (bounds.right - bounds.left) / 2;
    var cY = (bounds.bottom - bounds.top) / 2;

    this._balls = createBalls({ x: cX, y: cY }, options.num);
    this._boundingRect = bounds;
    this._gravity = 0.1;
  }

  Balls.prototype.move = function () {

    for (var i = 0; i < this._balls.length; i++) {

      var b = this._balls[i];

      if (b.delay !== 0) {
        b.delay--;
        return;
      }

      b.xPos += b.xVel;
      b.yPos += b.yVel;
      b.yVel += this._gravity;

      if (b.xPos > this._boundingRect.right || b.xPos < this._boundingRect.left)
        b.xVel *= -1;

      if (b.yPos < this._boundingRect.top)
        b.yVel *= -1;

      if (b.yPos + b.radius > this._boundingRect.bottom) {

        if (b.yVel <= this._gravity)
          b.yVel = 0;
        else {
          b.yVel -= b.yVel * 0.1; 
          b.yVel *= -1;
        }
      }
    }
  };

  Balls.prototype.draw = function (ctx) {
    for (var i = 0; i < this._balls.length; i++) {
      var b = this._balls[i];

      ctx.beginPath();

      ctx.arc(b.xPos, b.yPos, b.radius, 0, Math.PI * 2, false);  
      ctx.fill();  
      ctx.closePath();  
    }
  };

  ns.Balls = Balls;

}());
