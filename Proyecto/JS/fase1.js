function main() {

    //Obtenemos las variables
    let form = document.getElementById('formulario');
    let sol = document.getElementById('solucion');
    let btn_sol = document.getElementById('btn_solucion');
    let pista1 = document.getElementById('Pista1');
    let btn_pista1 = document.getElementById('btn_1');
    let audio_pista1 = document.getElementById('audio_1');
    let pista2 = document.getElementById('Pista2');
    let btn_pista2 = document.getElementById('btn_2');
    let audio_pista2 = document.getElementById('audio_2');
    let pista3 = document.getElementById('Pista3');
    let btn_pista3 = document.getElementById('btn_3');
    let audio_pista3 = document.getElementById('audio_3');
    let audio_fondo = document.getElementById('audio_fondo');
    let audio_error = document.getElementById('audio_error');

    //Variables para la música de fondo
    let btn_fondo = document.getElementById('btn_fondo')
    let fondo_play = false;

    //Declaro variables necesarias
    let solucion;
    let pago1 = false;
    let pago2 = false;

    //Empezar a reproducir el audio de fondo cuando decida el usuario
    btn_fondo.onclick = () => {
        if (fondo_play) {
            audio_fondo.pause();
            btn_fondo.innerHTML = "Pulsar para mayor inmersión";
            fondo_play = false;
        } else {
            audio_fondo.play();
            btn_fondo.innerHTML = "Pulsar para parar la tortura";
            fondo_play = true;
        }
    }
    
    //Usuario pulsa el boton ¡LO TENGO!
    btn_sol.onclick = () =>{
        solucion = sol.value.toUpperCase();
        
        //Compruebo si la solución es correcta
        if (solucion_correcta(solucion)) {
            form.action = "./fase2.html";
        } else {
            audio_error.play();
            window.alert("Respuesta incorrecta");
        }
    }

    //Solicita la pista 1
    btn_pista1.onclick = () => {
        if (pago1){
            pista1.innerHTML += "<br>Te dejaste una línea :)";
        } else {
            pago1 = true;
            audio_pista1.play();
        }
    }

    //Solicita la pista 2
    btn_pista2.onclick = () => {
        if (pago2){
            pista2.innerHTML += "<br>Rejuvenece la piel. Va por radiofrecuencia";
        } else {
            pago2 = true;
            audio_pista2.play();
        }
    }

    //Solicita la pista 1
    btn_pista3.onclick = () => {
        pista3.innerHTML += "<br>El Sueño de MORFEO";
        audio_pista3.play();
    }

    //Comprobación de si la solución es correcta
    function solucion_correcta(solucion) {
        return (solucion == 'INDIBA MORPHEUS LASER' ||
                solucion == 'INDIBA LASER MORPHEUS' ||
                solucion == 'MORPHEUS LASER INDIBA' ||
                solucion == 'MORPHEUS INDIBA LASER' ||
                solucion == 'LASER INDIBA MORPHEUS' ||
                solucion == 'LASER MORPHEUS INDIBA');
    }
}