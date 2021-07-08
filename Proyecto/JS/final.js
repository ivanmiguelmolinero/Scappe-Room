function main() {

    $("#botonQueSeMueve").hover(function () {
        $("#botonQueSeMueve").css("top", `${Math.random() * 500}px`);
        $("#botonQueSeMueve").css("left", `${Math.random() * 800}px`);
      });

}