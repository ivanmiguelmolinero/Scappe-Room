function main() {

    let btn = document.getElementById('boton');
    let bowser = document.getElementById('bowser');

    btn.onmouseover = () => {
        bowser.play();
    }

}