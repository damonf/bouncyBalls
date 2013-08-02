
TestCase("test balls", {

  setUp: function () {
  },

  tearDown: function () {
  },

  "test Balls constructor": function () {

    var balls = new ns.Balls({});
    assertTrue(balls instanceof ns.Balls);
  },

  "test number of balls created": function () {

    var balls = new ns.Balls({}, { num: 10 });
    assertEquals(10, balls._balls.length);
  }

//  "test move the balls": function() {
//    var balls = new ns.Balls({ left: 0, top: 0, right: 10, bottom: 10 }, { num: 1 });
//
//    balls.move();
//
//    var ball = balls._balls[0];
//    assertEquals(1, ball.xPos);
//    assertEquals(1, ball.yPos);
//  }

});


