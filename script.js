let contador = 0;

const display = document.getElementById("contador");
const botones = document.querySelectorAll("button");

function actualizarContador() {
    display.textContent = contador;

    // Cambia color en los múltiplos de 10
    if (contador > 0 && contador % 10 === 0) {
        display.style.color = "red";

        botones.forEach(boton => {
            boton.style.backgroundColor = "red";
            boton.style.color = "white";
        });
    } else {
        display.style.color = "black";

        botones.forEach(boton => {
            boton.style.backgroundColor = "#007bff";
            boton.style.color = "white";
        });
    }
}

function incrementar() {
    contador++;
    actualizarContador();
}

function decrementar() {
    contador--;
    actualizarContador();
}