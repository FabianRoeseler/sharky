class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish(), new Fish()];
  lights = [new Light(), new Light(), new Light(), new Light()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.height,
      this.character.width
    );

    for (let index = 0; index < this.lights.length; index++) {
      const element = this.lights[index];
      this.ctx.drawImage(
        element.img,
        element.x,
        element.y,
        element.height,
        element.width
      );
    }

    for (let index = 0; index < this.enemies.length; index++) {
      const element = this.enemies[index];
      this.ctx.drawImage(
        element.img,
        element.x,
        element.y,
        element.height,
        element.width
      );
    }

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
