function main() {

    //Botones
    let btn_1 = document.getElementById('btn_1');
    let btn_2 = document.getElementById('btn_2');
    let btn_3 = document.getElementById('btn_3');
    let btn_4 = document.getElementById('btn_4');
    let btn_5 = document.getElementById('btn_5');

    //Audios botones
    let audio_acierto = document.getElementById('audio_acierto');
    let audio_resuelto = document.getElementById('audio_puzzlecompletado');

    //Botones de las pistas
    let pista_1 = document.getElementById('btn_pista1');
    let pista_2 = document.getElementById('btn_pista2');
    let pista_3 = document.getElementById('btn_pista3');

    //Texto de las pistas
    let txt_pista1 = document.getElementById('Pista1');
    let txt_pista2 = document.getElementById('Pista2');
    let txt_pista3 = document.getElementById('Pista3');

    //Pagos de las pistas
    let pago1 = false;
    let pago2 = false;
    let pago3 = false;

    //Audios de las pistas
    let audio_pista1 = document.getElementById('audio_1');
    let audio_pista2 = document.getElementById('audio_2');
    let audio_pista3 = document.getElementById('audio_3');

    //Zona donde aparecerá el botón para abrir la puerta
    let btn_puerta = document.getElementById('btn_puerta');
    //Texto HTML que aparece si acierta el orden
    let btn_victoria = '<a href="../Scape-room.html"><button>¡ABRIR PUERTA!</button></a>'

    //Audios
    let audio_error = document.getElementById('audio_error');

    //Variables booleanas para comprobar que el orden es correcto
    let btn_1_second = false;
    let btn_2_fourth = false;
    let btn_3_first = false;
    let btn_4_third = false;
    let btn_5_fifth = false;

    btn_1.onclick = () => {
        if (btn_3_first) {
            audio_acierto.play();
            btn_1.disabled = true;
            btn_1_second = true;
        } else {
            turn_ON();
        }
    }

    btn_2.onclick = () => {
        if (btn_3_first && btn_1_second && btn_4_third) {
            audio_acierto.play();
            btn_2.disabled = true;
            btn_2_fourth = true;
        } else {
            turn_ON();
        }
    }

    btn_3.onclick = () => {
        if (all_ON()) {
            audio_acierto.play();
            btn_3.disabled = true;
            btn_3_first = true;
        } else {
            turn_ON();
        }
    }

    btn_4.onclick = () => {
        if (btn_3_first && btn_1_second) {
            audio_acierto.play();
            btn_4.disabled = true;
            btn_4_third = true;
        } else {
            turn_ON();
        }
        
    }

    btn_5.onclick = () => {
        if (btn_3_first && btn_1_second && btn_4_third && btn_2_fourth) {
            btn_5.disabled = true;
            btn_5_fourth = true;
            audio_resuelto.play();
            btn_puerta.innerHTML = btn_victoria;
        } else {
            turn_ON();
        }
    }

    function all_ON() {
        return (!btn_1.disabled && !btn_2.disabled && !btn_3.disabled && !btn_4.disabled && !btn_5.disabled);
    }

    //Reinicia el puzzle cuando se equivoca
    function turn_ON() {
        //Reiniciamos las variables
        btn_1.disabled = false;
        btn_1_second = false;
        btn_2.disabled = false;
        btn_2_fourth = false;
        btn_3.disabled = false;
        btn_3_first = false;
        btn_4.disabled = false;
        btn_4_third = false;
        btn_5.disabled = false;
        btn_5_fifth = false;

        //Avisamos al usuario
        audio_error.play();
        window.alert("Orden incorrecto");
    }

    //Pistas
    pista_1.onclick = () => {
        if (pago1){
            txt_pista1.innerHTML += "<br>El centro es el origen de todo.";
        } else {
            audio_pista1.play();
            pago1 = true;
        }
    }

    pista_2.onclick = () => {
        if (pago2){
            txt_pista2.innerHTML += "<br>En ningún momento van en orden.";
        } else {
            audio_pista2.play();
            pago2 = true;
        }
    }

    pista_3.onclick = () => {
        if (pago3){
            txt_pista3.innerHTML += "<br>Al terminar 'por el culo te la hinco' puedes rimar.";
        } else {
            audio_pista3.play();
            pago3 = true;
        }
    }

}