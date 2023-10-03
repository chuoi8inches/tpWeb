
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
		this.currentShape = new Rectangle()
	}.bind(this)
	this.onInteractionUpdate = function(dnd){
		this.currentShape = new Rectangle(dnd.xInit,dnd.yInit,
			dnd.xFin - dnd.xInit,
			dnd.yFin - dnd.yInit,
			this.currLineWidth,this.currColour)
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx)
	}.bind(this)
	this.onInteractionEnd = function(dnd){
		drawing.shapeTab.add(this.currentShape)
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx)
	}.bind(this)
};


