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
  ctx.canvas.height = window.innerHeight - $('.controls').outerHeight(true);
  
  var id = launch();

  $('#reset').click(function() {
    window.clearInterval(id);
    id = launch();
  });

  function launch() {
    var num = parseInt($('#balls').val(), 10);
    var vel = parseInt($('#velocity').val(), 10);
    var size= parseInt($('#size').val(), 10);
    var g = (parseFloat($('#gravity').val()) - 1) / 100.0;

    var balls = new Balls({ left: 0, top: 1, right: canvas.width, bottom: canvas.height },
                          { num: num, radius: size, velocity: vel, gravity: g });

    $('#gravity').on('change', function (event) {
      var g = (parseFloat(this.value) - 1) / 100.0;
      balls.gravity(g);
    });

    return window.setInterval(function() {

        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight - $('.controls').outerHeight(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balls.move({ left: 0, top: 0, right: canvas.width, bottom: canvas.height });
        balls.draw(ctx);

      }, 1000/60);
  }
});
