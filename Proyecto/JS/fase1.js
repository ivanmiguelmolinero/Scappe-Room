function main() {

    //Obtenemos las variables
    let form = document.getElementById('formulario');
    let sol = document.getElementById('solucion');
    let btn_sol = document.getElementById('btn_solucion');

    //Declaro variables necesarias
    let solucion;
    
    //Usuario pulsa el boton ¡LO TENGO!
    btn_sol.onclick = () =>{
        solucion = sol.value.toUpperCase();
        
        //Compruebo si la solución es correcta
        if (solucion_correcta(solucion)) {
            form.action = "../Scape-room.html";
        } else {
            window.alert("Respuesta incorrecta");
        }
        //form.action = "../Scape-room.html";
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