/*jshint indent: 2,strict: true,undef: true*/
/*globals define: false*/

define(['jquery', 'ball'], function ($, Ball) {

  "use strict";

  function createBalls(startPos, options) {

    var balls = [];

    var inc = 1;
    var vel = -(options.num / 2);
    
    for (var i = 0; i < options.num; i++) {

      vel += inc;

      balls.push(new Ball({
        xPos: startPos.x,
        yPos: startPos.y,
        xVel: vel,
        yVel: -4,
        moveDelay: i * 3,
        radius: options.radius,
        gravity: 0.1
      }));
    }

    return balls;
  }

  function Balls(boundingRect, options) {
    /*jshint eqnull: true */

    if (!(this instanceof Balls)) { 
      return new Balls();
    }

    options = $.extend({
      num: 1,
      radius: 10 
    }, options || {});

    if (boundingRect.left == null)
      throw new Error('boundingRect.left must have a value');
    if (boundingRect.top == null)
      throw new Error('boundingRect.top must have a value');
    if (boundingRect.right == null)
      throw new Error('boundingRect.right must have a value');
    if (boundingRect.bottom == null)
      throw new Error('boundingRect.bottom must have a value');

    var cX = (boundingRect.right - boundingRect.left) / 2;
    var cY = (boundingRect.bottom - boundingRect.top) / 2;

    this._balls = createBalls({ x: cX, y: cY }, options);
    this._gravity = 0.1;
  }

  Balls.prototype.move = function (boundingRect) {
    for (var i = 0; i < this._balls.length; i++) {
      this._balls[i].move(boundingRect);
    }
  };

  Balls.prototype.draw = function (ctx) {
    for (var i = 0; i < this._balls.length; i++) {
      this._balls[i].draw(ctx);
    }
  };

  return Balls;

});
