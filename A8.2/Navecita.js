function Navecita() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.showFlame = false;

  // Tamaño personalizado en píxeles
  this.width = 60;
  this.height = 60;

  this.nave = new Image();
  this.nave.src = "Cohete.png";
}

Navecita.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  
  // Aplica la rotación del usuario
  context.rotate(this.rotation);
  
  // Ajuste de inclinación para que la cabeza del meteorito sea el frente
  // (Ajusta Math.PI / 2 o la fracción de rotación según la inclinación del gráfico)
  context.rotate(Math.PI); 

  // Dibuja el cohete/meteorito centrado
  if (this.nave.complete && this.nave.width > 0) {
    context.drawImage(
      this.nave,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  } else {
    // Respaldo visual
    context.fillStyle = "#ff0055";
    context.beginPath();
    context.arc(0, 0, 15, 0, Math.PI * 2);
    context.fill();
  }

  context.restore();
};