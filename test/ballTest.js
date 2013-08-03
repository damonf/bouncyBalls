
TestCase("test ball", {

  setUp: function () {
    this.boundingRect = { left: 0, top: 0, right: 10, bottom: 10 }; 
  },

  tearDown: function () {
  },

  "test Ball constructor": function () {

    var balls = new ns.Ball();
    assertTrue(balls instanceof ns.Ball);
  },

  "test move the ball": function() {
    var ball = new ns.Ball({ xPos: 5, yPos: 5, xVel: 1, yVel: 1, radius: 1, airFriction: 0 });

    ball.move(this.boundingRect);

    assertEquals(6, ball._xPos);
    assertEquals(6, ball._yPos);
  },

  "test bounce the ball": function() {
    var ball = new ns.Ball({ xPos: 9, yPos: 5, xVel: 2, yVel: 0, radius: 1, airFriction: 0 });

    ball.move(this.boundingRect);

    assertTrue(ball._xVel < 0);
  }

});



