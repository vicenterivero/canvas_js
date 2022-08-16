let d = document.getElementById('canvas');
let lienzo = d.getContext('2d');
let ancho = d.width;
let alto = d.height;

let lineas = 100;
let countL = 0;
let espacio = ancho/lineas;
let colorGeneral = 'green'
for(countL = 0;countL<lineas;countL++){
    dibujarLineas(colorGeneral,0,espacio*countL,espacio*(countL+1),alto);
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}