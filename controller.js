
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 1;
	this.drawing = drawing;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('colour').setAttribute('colour', this.currColour);
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;
	document.getElementById("spinnerWidth").onchange = (e) => this.currLineWidth = e.target.value
	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;

	new DnD(canvas, this);


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
		if(this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle();
		}
		else {
			this.currentShape = new Line();
		}
	}.bind(this)
	this.onInteractionUpdate = function(dnd){
		if(this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xInit, dnd.yInit,
				dnd.xFin - dnd.xInit,
				dnd.yFin - dnd.yInit,
				this.currColour, this.currLineWidth)
		}else {
			this.currentShape = new Line(dnd.xInit,dnd.yInit,dnd.xFin,dnd.yFin,this.currColour,this.currLineWidth)
		}
		this.drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx)
	}.bind(this)
	this.onInteractionEnd = function(dnd){
		drawing.shapeTab.add(this.currentShape)
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx)
	}.bind(this)
}


