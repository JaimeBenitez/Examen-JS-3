/**
 * @file Ejercicio1.js - Ejercicio 1
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */



/**
* Clase jugador
* @type {class}
*/
class Jugador{
    constructor(nombre,apellidos,nivel,puntuacion,eliminaZombie,recibeGolpe){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = nivel;
        this.puntuacion = puntuacion;
        this.eliminaZombie = eliminaZombie;
        this.recibeGolpe = recibeGolpe;
    }
    
    /** 
     * Funcion que detecta si un zombie ha sido eliminado y gana puntos
     * @returns {string} Notificacion
     */
    zombieEliminado(){
        this.eliminaZombie = true;
        this.ganaPuntos()
        return ` Has eliminado un zombie. Tu puntuacion es ${this.puntuacion} y tu nivel es ${this.nivel}`
    }
    /** 
     * Funcion que detecta si se ha recibido un golpe
     * @returns {string} Notificacion
     */
    golpeRecibido(){
        this.recibeGolpe = true;
        this.pierdePuntos();
        ` Has sido mordido. Tu puntuacion es ${this.puntuacion} y tu nivel es ${this.nivel}`
    }
    /** 
     * Funcion que detecta si se ha subido de nivel
     * @returns {string} Notificacion
     */
    levelUp(){
        
        this.nivel += 1;
        return `Enhorabuena superviviente, has subido de nivel`
        
    }
    /** 
     * Funcion que detecta si se ha bajado de nivel
     * @returns {string} Notificacion
     */
    levelDown(){
        this.nivel -= 1;
        return `Cuidado superviviente, has bajado de nivel`
    }
    /** 
     * Funcion que detecta si se han ganado puntos 
     */
    ganaPuntos(){
        if(this.eliminaZombie){
            this.puntuacion += 1;            
            this.eliminaZombie = false;
        }
        if(this.puntuacion == 10){
            this.levelUp();
            this.puntuacion = 0;            
        }
    }
    /** 
     * Funcion que detecta si se han perdido puntos
     */
    pierdePuntos(){
        
        if(this.recibeGolpe){
            this.puntuacion -= 1;            
            this.recibeGolpe = false;
        }
        if(this.puntuacion < 0){
            this.levelDown();
            
        }
    }   
    /** 
     * Funcion que detecta si se debe hacer reset
     * @returns {string} Notificacion
     */ 
    reset(){
        if(this.nivel == 0){
            
            this.nivel = 1;
            this.puntuacion = 1;
            return "Has muerto, intentalo de nuevo..."
        }
    }
    /** 
     * Funcion que da la bienvenida al jugador
     * @returns {string} Notificacion
     */ 
    bienvenida(){
       

        return `Bienvenido ${this.nombre} ${this.apellidos}, la hora de sobrevivir ha llegado. Una horda de zombies va hacia tu posicion.
        Comienzas en nivel ${this.nivel} con ${this.puntuacion} punto. Vence zombies para conseguir puntos y se mordido y los perderas.
        Cada 10 puntos ganados subiras de nivel, pero CUIDADO superviviente, pues cada 10 puntos perdidos perderas un nivel y si tu nivel
        llega a 0... estas muerto. Buena suerte superviviente... la vas a necesitar`
    }
}    
let jugador1 = new Jugador("Jimbo","The Ghost",1,1,false,false);
let jugador2 = new Jugador("Ralph","The Breaker",1,1,false,false);
console.log(jugador1.puntuacion)
const jugadores = [jugador1,jugador2];
document.write(`<p>${jugadores[0].bienvenida()}</p>`)
document.write(`<p>${jugadores[0].zombieEliminado()}</p>`)
jugador1.puntuacion = 9;
document.write(`<p>${jugadores[0].zombieEliminado()}</p>`)
document.write(`<p>${jugadores[0].levelUp()}</p>`)
jugador1.nivel = 0;
document.write(`<p>${jugadores[0].reset()}</p>`)
