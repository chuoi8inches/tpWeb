
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xInit = 0
  this.yInit = 0
  this.xFin = 0
  this.yFin = 0
  this.clicked = false
  this.interactor = interactor
	// Developper les 3 fonctions gérant les événements
  this.mousePress = function(evt){
    mousePosition = getMousePosition(canvas,evt)
    this.xInit = mousePosition.x
    this.yInit = mousePosition.y
    this.clicked = true
    this.interactor.onInteractionStart(this)
  }.bind(this)
  this.mouseMove= function(evt){
    if(this.clicked){
    mousePosition = getMousePosition(canvas,evt)
    this.xFin = mousePosition.x
    this.yFin = mousePosition.y
    this.interactor.onInteractionUpdate(this)
    }
  }.bind(this)
  this.mouseUp=function(evt){
    mousePosition = getMousePosition(canvas,evt)
    xFin =  mousePosition.x
    yFin = mousePosition.y
    this.clicked = false
    this.interactor.onInteractionEnd(this)
  }.bind(this)
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



