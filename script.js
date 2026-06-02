let contador = 0;

const display = document.getElementById("contador");

function actualizar() {
  display.textContent = contador;

  // Cambia color cuando llegue a 10
  if (contador === 10) {
    display.classList.add("rojo");
  } else {
    display.classList.remove("rojo");
  }
}

function incrementar() {
  contador++;
  actualizar();
}

function decrementar() {
  contador--;
  actualizar();
}