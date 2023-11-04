
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.rect(this.upleftCornerX, this.upleftCornerY, this.width,this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.upleftCornerX, this.upleftCornerY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeTab.forEach(element => element.paint(ctx))
  };

function toDom(shape, index) {
    return "";
}

function updateShapeList(index, shape){
      document.getElementById('shapeList').insertAdjacentHTML('beforeend',toDom(shape,index))
  }
  