define(['balls'], function(Balls) {

  TestCase("test balls", {
  
    setUp: function () {
      this.boundingRect = { left: 0, top: 0, right: 100, bottom: 100}; 
    },
  
    tearDown: function () {
    },
  
    "test Balls constructor": function () {
  
      var balls = new Balls(this.boundingRect);
      assertTrue(balls instanceof Balls);
    },
  
    "test number of balls created": function () {
  
      var balls = new Balls(this.boundingRect, { num: 10 });
      assertEquals(10, balls._balls.length);
    }
  
  });
  
});
