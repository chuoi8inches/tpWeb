
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  xInit = yInit = 0
  xFin = yFin = 0
  clicked = false
	// Developper les 3 fonctions gérant les événements
  this.mousePress = function(evt){
    mousePosition = getMousePosition(canvas,evt)
    xInit = mousePosition.x
    yInit = mousePosition.y
    clicked = true
    console.log(mousePosition)
  }
  this.mouseMove= function(evt){
    if(clicked){
    mousePosition = getMousePosition(canvas,evt)
    xFin = mousePosition.x
    yFIn = mousePosition.y
    console.log(mousePosition)
    }
  }
  this.mouseUp=function(evt){
    if(clicked){
    xInit =  0
    yInit = 0
    clicked = false
    console.log(mousePosition)
    }
  }
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mousePress, false)
  canvas.addEventListener('mousemove', this.mouseMove, false)
  canvas.addEventListener('mouseup', this.mouseUp, false)
}; 
  

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



