/*Video Juego
06-01-2023
Jeyfrey Calero*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
ANCHO_CANVAS = canvas.width = 500;
ALTURA_CANVAS = canvas.height = 1000;

const numero_de_enemigos = 30;
const array_enemigos = [];
let frame_juego = 0;
/* si creamos una clase la inicializamos con el constructor y debemos llamar el método this, sino no funciona */
class Enemigo{
    /* constructor nos sirve para inicializar un objeto creado a partir de una class */
    constructor(){
        /* inicializamos nuestro objeto */
        this.imagen_enemigo = new Image();
        /* llamamos nuestro objeto */
        this.imagen_enemigo.src = "enemigo1.png";
        /* asignamos velocidad */
        this.velocidad = Math.random() * 8 + 1;
        /* creamos anchura y altura de nuestro enemigo */
        this.ancho_sprite = 250;
        this.altura_sprite = 180;
        this.width = this.ancho_sprite / 2;
        this.height = this.altura_sprite / 2;
        /* creamos otras característica para los ejes: x,y */
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.velocidad_de_vuelo_sprite = Math.floor(Math.random() * 7 + 1);
        this.angulo = Math.random() * 3;
        this.velocidad_angulo = Math.random() * 0.2;
    }
    /* creamos una función para actualizar */
    update(){
        this.x -= this.velocidad;
        this.y += Math.sin(this.angulo);
        this.angulo += this.velocidad_angulo;
        if (this.x + this.width < 0) this.x = canvas.width;
        if (frame_juego % this.velocidad_de_vuelo_sprite === 0){
            /* ? es similar a or */
            this.frame > 4 ? this.frame = 0: this.frame ++;
        }
    }
    dibujar(){
        ctx.drawImage(this.imagen_enemigo, this.frame * this.ancho_sprite, 0, this.ancho_sprite, this.altura_sprite, this.x, this.y, this.width, this.height);

    }

};

/* crear nuestros enemigos */
for (let i = 0; i < numero_de_enemigos; i++){
    array_enemigos.push(new Enemigo());
};

function animar(){
    ctx.clearRect(0,0,ANCHO_CANVAS,ALTURA_CANVAS);
    array_enemigos.forEach(enemi => {
        enemi.update();
        enemi.dibujar();
    });
    frame_juego++;
    requestAnimationFrame(animar);
};

animar();
