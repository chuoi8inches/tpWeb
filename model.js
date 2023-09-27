
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    var shapeTab = Array()
    this.addShape =function(color, thickness){
    }
}
function Shape(color, thickness){
    this.color = color
    this.thickness = thickness
}
function Rectangle(upleftCornerX, upleftCornerY, width, height, thickness, color) {
    Shape.call(this,thickness,color)
    this.upleftCornerX = upleftCornerX
    this.upleftCornerY = upleftCornerY
    this.width = width
    this.height = height
    this.paint = function(context){
    }
}
function Line(startX,startY, endX, endY) {
    Shape.call(this, color, thickness)
    this.startX = startX
    this.startY =startY
    this.endX = endX
    this.endY =endY

}