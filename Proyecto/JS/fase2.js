function main () {

    let form = document.getElementById('formulario');
    let coord1 = document.getElementById('Coordenada 1');
    let coord2 = document.getElementById('Coordenada 2');
    let btn_sol = document.getElementById('btn_solucion');
    let pista_1 = document.getElementById('Pista1');
    let btn_1 = document.getElementById('btn_1');
    let audio_pista1 = document.getElementById('audio_1');
    let pista_2 = document.getElementById('Pista2');
    let btn_2 = document.getElementById('btn_2');
    let audio_pista2 = document.getElementById('audio_2');
    let pista_3 = document.getElementById('Pista3');
    let btn_3 = document.getElementById('btn_3');
    let audio_pista3 = document.getElementById('audio_3');

    let pago1 = false;
    let pago2 = false;
    let pago3 = false;

    btn_sol.onclick = () => {
        sol1 = coord1.value;
        sol2 = coord2.value;

        if ((sol1 == '40.315') && (sol2 == '-3.851' || sol2 == '-3.850')) {
            form.action = "./fase3.html";
        } else {
            window.alert("Respuesta incorrecta");
        }
    }

    btn_1.onclick = () => {
        if (pago1) {
            pista_1.innerHTML += "<br>La parada de autobús está más cerca de lo que piensas."
        } else {
            pago1 = true;
            audio_pista1.play();
        }
    }

    btn_2.onclick = () => {
        if (pago2) {
            pista_2.innerHTML += "<br>No One."
        } else {
            pago2 = true;
            audio_pista2.play();
        }
    }

    btn_3.onclick = () => {
        if (pago3) {
            pista_3.innerHTML += "<br>A ese lugar vas a SUPERArte."
        } else {
            pago3 = true;
            audio_pista3.play();
        } 
    }
}