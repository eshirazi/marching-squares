const MIN_BALL_ALTITUDE = 0.05;
const MAX_BALL_ALTITUDE = 0.2;
const MAX_AXIS_VELOCITY = 0.02;

class F {
  constructor(numBalls = 5) {
    this.balls = [];

    for (let i = 0; i < numBalls; i++) {
      this.balls.push({
        pos: new THREE.Vector2(Math.random(), Math.random()),
        vel: new THREE.Vector2(
          (Math.random() * 2 - 1) * MAX_AXIS_VELOCITY,
          (Math.random() * 2 - 1) * MAX_AXIS_VELOCITY
        ),
        alt:
          Math.random() * (MAX_BALL_ALTITUDE - MIN_BALL_ALTITUDE) +
          MIN_BALL_ALTITUDE
      });
    }
  }

  step() {
    for (let ball of this.balls) {
      ball.pos.add(ball.vel);

      if (ball.pos.x < 0) {
        ball.pos.x = 0;
        ball.vel.x = Math.abs(ball.vel.x);
      }

      if (ball.pos.y < 0) {
        ball.pos.y = 0;
        ball.vel.y = Math.abs(ball.vel.y);
      }

      if (ball.pos.x > 1) {
        ball.pos.x = 1;
        ball.vel.x = -Math.abs(ball.vel.x);
      }

      if (ball.pos.y > 1) {
        ball.pos.y = 1;
        ball.vel.y = -Math.abs(ball.vel.y);
      }
    }
  }

  calc(pos) {
    let ret = 0;

    for (let ball of this.balls) {
      ret += (1 / ball.pos.distanceTo(pos)) * ball.alt;
    }
    return ret;
  }
}
