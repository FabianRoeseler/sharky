class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish(), new Fish()];
  lights = [new Light(), new Light(), new Light(), new Light()];
  backgroundObjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D.png"),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Background
    for (let index = 0; index < this.backgroundObjects.length; index++) {
      const backgroundObject = this.backgroundObjects[index];
      this.addToMap(backgroundObject);
    }

    // Character
    this.addToMap(this.character);

    // Lights
    for (let index = 0; index < this.lights.length; index++) {
      const light = this.lights[index];
      this.addToMap(light);
    }

    // Enemies
    for (let index = 0; index < this.enemies.length; index++) {
      const fish = this.enemies[index];
      this.addToMap(fish);
    }

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
  }
}
