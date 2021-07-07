function main() {

    // Pasajeros
    let Ivan = document.getElementById('Ivan');
    let Maria = document.getElementById('Maria');
    let Juan = document.getElementById('Juan');
    let Joel = document.getElementById('Joel');
    let audio_Joel = document.getElementById('audio_Joel')
    let Esther = document.getElementById('Esther');

    //Audio de error
    let audio_error = document.getElementById('audio_error');

    //Formulario para escribir la respuesta
    let form = document.getElementById('formulario_p');

    //Variables que indican si han hablado con los pasajeros
    let Ivan_ON = false;
    let Maria_ON = false;
    let Juan_ON = false;
    let Joel_ON = false;
    let Esther_ON = false;
    let form_ON = false;

    //HTML que añadir en el formulario
    const formulario = '<form action="" id="formulario">' +
    'Contraseña: <input type="text" name="" id="Contraseña">' + '<br>' +
    '<input type="submit" value="¡ESA ES!" id="btn_solucion" class="btn first">';

    //Variables para hacer aparecer el formulario
    let pswd;
    let btn_sol = '';
    
    //Funcion que comprueba si ha hablado con todos
    function all_ON(){
        if (Ivan_ON && Maria_ON && Juan_ON && Joel_ON && Esther_ON) {
            return true;
        } else {
            return false;
        }
    }

    Ivan.onclick = () => {
        Ivan_ON = true;
        if (all_ON()) {
            form.innerHTML = formulario;
            form_ON = true;
            pswd = document.getElementById('Contraseña');
            btn_sol = document.getElementById('btn_solucion');
            comprobar_respuesta();
        }
    }

    Maria.onclick = () => {
        Maria_ON = true;
        if (all_ON()) {
            form.innerHTML = formulario;
            form_ON = true;
            pswd = document.getElementById('Contraseña');
            btn_sol = document.getElementById('btn_solucion');
            comprobar_respuesta();
        }
    }

    Juan.onclick = () => {
        Juan_ON = true;
        if (all_ON()) {
            form.innerHTML = formulario;
            form_ON = true;
            pswd = document.getElementById('Contraseña');
            btn_sol = document.getElementById('btn_solucion');
            comprobar_respuesta();
        }
    }

    Joel.onclick = () => {
        audio_Joel.play();
        Joel_ON = true;
        if (all_ON()) {
            form.innerHTML = formulario;
            form_ON = true;
            pswd = document.getElementById('Contraseña');
            btn_sol = document.getElementById('btn_solucion');
            comprobar_respuesta();
        }
    }

    Esther.onclick = () => {
        Esther_ON = true;
        if (all_ON()) {
            form.innerHTML = formulario;
            form_ON = true;
            pswd = document.getElementById('Contraseña');
            btn_sol = document.getElementById('btn_solucion');
            formu = document.getElementById('formulario');
            comprobar_respuesta();
        }
    }

    function comprobar_respuesta() {
        btn_sol.onclick = () => {
            contraseña = pswd.value.toUpperCase();
            if (contraseña == 'AMIGUITA'){
                formu.action = './fase4.html';
            } else {
                audio_error.play();
                window.alert('Respuesta incorrecta');
            }
        }
    }

}