/*jshint indent: 2,strict: true,jquery: true */
/*globals ns: false*/

(function () {

  "use strict";

  function Ball(options) {
    if (!(this instanceof Ball)) { 
      return new Ball();
    }

    options = $.extend({
      xPos: 0,
      yPos: 0, 
      xVel: 0,
      yVel: 0,
      moveDelay: 0,
      radius: 10,
      gravity: 0,
      airFriction: 0.003
    }, options || {});

    this._xPos = options.xPos;
    this._yPos = options.yPos;
    this._xVel = options.xVel;
    this._yVel = options.yVel;
    this._moveDelay = options.moveDelay;
    this._radius = options.radius;
    this._gravity = options.gravity;
    this._airFriction = options.airFriction;

    var c = Math.floor(Math.random() * 3);
    switch (c) {
    case 0:
      this._color = "rgba(240, 34, 34, 0.5)";
      break;
    case 1:
      this._color = "rgba(34, 212, 240, 0.5)";
      break;
    default:
      this._color = "rgba(34, 240, 34, 0.5)";
    }
  }

  Ball.prototype.move = function (boundingRect) {

    if (this._moveDelay !== 0) {
      this._moveDelay--;
      return;
    }

    this._xPos += this._xVel;
    this._yPos += this._yVel;
    this._yVel += this._gravity;

    this._xVel -= this._xVel * this._airFriction;
    this._yVel -= this._yVel * this._airFriction;

    if (this._xPos + this._radius > boundingRect.right && this._xVel > 0)
      this._xVel *= -1;
    else if (this._xPos - this._radius < boundingRect.left && this._xVel < 0) 
      this._xVel *= -1;

    if (this._yPos - this._radius < boundingRect.top && this._yVel < 0)
      this._yVel *= -1;
    else if (this._yPos + this._radius > boundingRect.bottom && this._yVel > 0) {

      this._yVel -= Math.min(1 / this._yVel, this._yVel); 
      this._yVel *= -1;
    }
  };

  Ball.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);  
    ctx.fillStyle = this._color;
    ctx.fill();  
    ctx.closePath();  
  };

  ns.Ball = Ball;

}());

