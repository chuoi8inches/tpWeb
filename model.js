
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapeTab = new Map()
}
function Shape(thickness,color){
    this.color = color
    this.thickness = thickness
}
function Rectangle(upleftCornerX, upleftCornerY, width, height, thickness, color) {
    Shape.call(this,thickness,color)
    this.upleftCornerX = upleftCornerX
    this.upleftCornerY = upleftCornerY
    this.width = width
    this.height = height
}
function Line(startX,startY, endX, endY, thickness, color) {
    Shape.call(this,thickness,color)
    this.startX = startX
    this.startY =startY
    this.endX = endX
    this.endY =endY

}