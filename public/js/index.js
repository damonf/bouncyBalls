/*jshint indent: 2,strict: true,undef: true*/
/*globals requirejs: false, window: false*/

requirejs.config({
  baseUrl: 'js',
  'paths': {
    'jquery': 'http://code.jquery.com/jquery-2.0.3.min' 
  }
});

requirejs(['jquery', 'balls'], function($, Balls) {
  'use strict';

  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  var balls = new Balls({ left: 0, top: 0, right: canvas.width, bottom: canvas.height }, { num: 20 });

  window.setInterval(function() {

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.move({ left: 0, top: 0, right: canvas.width, bottom: canvas.height });
    balls.draw(ctx);

  },1000/60);
});
