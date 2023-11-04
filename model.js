
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapeTab = new Set()
    
}
function Shape(upleftCornerX, upleftCornerY,color, thickness){
    this.color = color
    this.thickness = thickness
    this.upleftCornerX = upleftCornerX
    this.upleftCornerY =upleftCornerY
}
function Rectangle(upleftCornerX, upleftCornerY, width, height,color,thickness) {
    Shape.call(this,upleftCornerX, upleftCornerY,color,thickness)
    this.width = width
    this.height = height

}
function Line(upleftCornerX, upleftCornerY, endX, endY,color,thickness) {
    Shape.call(this,upleftCornerX, upleftCornerY, color, thickness)
    this.endX = endX
    this.endY =endY
}


