let cuadro = document.getElementById('canvasMouse');
let color = document.getElementById('color');
color.addEventListener("change", colorGlobal)

let papel = cuadro.getContext('2d');
cuadro.addEventListener("mousemove", mouseMovimiento);
cuadro.addEventListener("mousedown", mouseDown);
cuadro.addEventListener("mouseup", mouseUp);

let ancho = cuadro.width;
let alto = cuadro.height;
let mouseClick = false;
let colorGeneral = 'black';
let inicio = { x: 0, y: 0 };
let grosor = 50;

function mouseDown(event) {
    inicio = { x: event.offsetX, y: event.offsetY };
    dibujarLineas(colorGeneral, inicio.x - grosor / 2, inicio.y, event.offsetX + grosor / 2, event.offsetY, grosor);

    mouseClick = true;
}
function mouseUp() {
    mouseClick = false
}
function colorGlobal(e) {
    console.log(e.target.value);
    colorGeneral = e.target.value;
}
// dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y, grosor);
function mouseMovimiento(event) {
    if (mouseClick == true) {
        console.log(event);
        // for (let index = 0; index < espacio; index++) {
            dibujarLineas(colorGeneral, inicio.x - grosor / 2, inicio.y, event.offsetX + grosor / 2, event.offsetY, grosor);
            inicio = { x: event.offsetX, y: event.offsetY };
        // }


    } else {
        inicio = { x: event.offsetX, y: event.offsetY };
    }

    // if(event.keyCode == teclas.UP){
    //     console.log('arriba');
    //     dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y-movimiento, grosor);
    //     inicio.y = inicio.y - movimiento;
    // }
    // if(event.keyCode == teclas.DOWN){
    //     console.log('abajo');
    //     dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x, inicio.y+movimiento, grosor);
    //     inicio.y = inicio.y + movimiento;

    // }
    // if(event.keyCode == teclas.LEFT){
    //     console.log('izquierda');
    //     dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x-movimiento, inicio.y, grosor);
    //     inicio.x = inicio.x - movimiento;

    // }
    // if(event.keyCode == teclas.RIGHT){
    //     console.log('derecha');
    //     dibujarLineas(colorGeneral, inicio.x, inicio.y,inicio.x+movimiento, inicio.y, grosor);
    //     inicio.x = inicio.x + movimiento;

    // }


}


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, grosor) {
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = grosor;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}