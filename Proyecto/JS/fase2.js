function main () {

    let form = document.getElementById('formulario');
    let coord1 = document.getElementById('Coordenada 1');
    let coord2 = document.getElementById('Coordenada 2');
    let btn_sol = document.getElementById('btn_solucion');

    btn_sol.onclick = () => {
        sol1 = coord1.value;
        sol2 = coord2.value;

        if ((sol1 == '40.315') && (sol2 == '-3.851' || sol2 == '-3.850')) {
            form.action = "./fase1.html"
        } else {
            window.alert("Respuesta incorrecta");
        }
    }
}