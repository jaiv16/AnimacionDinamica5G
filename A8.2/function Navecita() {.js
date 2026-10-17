function Navecita() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.showFlame = false;

  // Carga de la imagen de tu cohete
  this.nave = new Image();
  this.nave.src = "Cohete.png";
}

Navecita.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Dibuja la imagen centrada si ya terminó de cargar
  if (this.nave.complete && this.nave.width > 0) {
    context.drawImage(this.nave, -this.nave.width / 2, -this.nave.height / 2);
  }

  context.restore();
};