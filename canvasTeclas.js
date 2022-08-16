let d = document.getElementById('canvas');
let color = document.getElementById('color');
color.addEventListener("change",colorGlobal)
document.addEventListener("keydown",dibujarEscribir)

let lienzo = d.getContext('2d');
let ancho = d.width;
let alto = d.height;
teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
let colorGeneral = 'black';

function colorGlobal(e){
    console.log(e.target.value);
    colorGeneral = e.target.value;
}
let inicio = {x:249,y:249};
let grosor = 4;
let movimiento = 10;
dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y, grosor);
function dibujarEscribir(event) {

    if(event.keyCode == teclas.UP){
        console.log('arriba');
        dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y-movimiento, grosor);
        inicio.y = inicio.y - movimiento;
    }
    if(event.keyCode == teclas.DOWN){
        console.log('abajo');
        dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y+movimiento, grosor);
        inicio.y = inicio.y + movimiento;

    }
    if(event.keyCode == teclas.LEFT){
        console.log('izquierda');
        dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x-movimiento, inicio.y, grosor);
        inicio.x = inicio.x - movimiento;

    }
    if(event.keyCode == teclas.RIGHT){
        console.log('derecha');
        dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x+movimiento, inicio.y, grosor);
        inicio.x = inicio.x + movimiento;

    }
    

}


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal,grosor) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}