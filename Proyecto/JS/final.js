function main() {

    //ABACHITO!!!
    let si = document.getElementById('si');
    let abachito = document.getElementById('abachito');
    //Poner música de fondo en Google Chrome
    let play = document.getElementById('play');
    let musica = document.getElementById('musica');
    //Risa cuando el NO se mueve
    let no = document.getElementById('botonQueSeMueve');
    let risa = document.getElementById('risa');

    si.onclick = () => {
      abachito.play();
      window.alert('¡¡¡¡ABACHITO!!!!');
    }

    play.onclick = () => {
      musica.play();
    }

    no.onmouseover = () => {
      risa.play();
    }

}