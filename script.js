/*Video Juego
06-01-2023
Jeyfrey Calero*/

const canvas = document.getElementById('canvas1');
const ctx= canvas.getContext('2d');
ANCHO_CANVAS= canvas.width= 500;
ALTURA_CANVAS= canvas.height= 1000;
const numero_enemigos= 30;
array_enemigos= [];

let frame_juego=0;
//this.imagen_enemigo = newImage()
//this.imagen_enemigo.src= 'enemigo1.png'

/*enemigo_1 = {
    x:10,
    y:50,
    width:200,
    height:300,
}*/

class Enemigo{
    constructor(){
        this.imagen_enemigo= new Image();
        this.imagen_enemigo.src='enemigo1.png';
        this.x= Math.random() * canvas.width;
        this.y=Math.random() * canvas.height;
        this.velocidad= Math.random() *4 -2;
        this.ancho_enemigo= 293;
        this.altura_enemigo=155;
        this.width= this.ancho_enemigo/2;
        this.height=this.altura_enemigo/2;
        this.frame=0;
        this.velocidad_vuelo_enemigo= Math.floor(Math.random() * 3 + 1)
    }

    actualizar(){
        this.x += Math.random()* 3 - 1.5 ;
        this.y +=Math.random() * 3- 1.5;
        if(frame_juego % this.velocidad_vuelo_enemigo === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;

        }

    }

    dibujar_enemigo(){
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.imagen_enemigo,this.frame *  this.ancho_enemigo, 0,this.ancho_enemigo,
             this.altura_enemigo,this.x,this.y, this.width,this.height);
    }
};

//const enemigo_1 = new Enemigo();
//bucle para recorrer los enemigos y añadirlos al array
for (let i =0; i< numero_enemigos;i++){
    array_enemigos.push(new Enemigo())
}



console.log(array_enemigos)
function animar_enemigo(){
   ctx.clearRect(0,0, ANCHO_CANVAS, ALTURA_CANVAS);
   //enemigo_1.actualizar();
   //enemigo_1.dibujar_enemigo();
   array_enemigos.forEach(enemigo =>{
        enemigo.actualizar();
        enemigo.dibujar_enemigo();
   });
   frame_juego++;
   requestAnimationFrame(animar_enemigo)
}

animar_enemigo()