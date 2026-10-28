/* */ 

const entradaNumero = document.getElementById("numero");
const salidaNumero = document.getElementById("salida");

entradaNumero.addEventListener("input", function () {
    let nivel = Number(entradaNumero.value);

    if (nivel >= 19){
        salidaNumero.textContent = "mas abajo";
    }
    else if (nivel === 18) {
        salidaNumero.textContent = "ESE ESSSS!!!! "; 
    }
    else{
        salidaNumero.textContent = "mas arriba";
    }
    
});

const favorito = document.getElementById("favorito");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");

favorito.addEventListener("change", function() {
    
    if (favorito.value === "Anime") {
        imagen.src = "https://static.wikia.nocookie.net/manga/images/7/72/TSTSlime.jpg/revision/latest?cb=20240702171044&path-prefix=es";
        texto.textContent = "Tensei Shitara Slime Datta Ken";
        
    }
    else if (favorito.value === "Moto") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7nxxFSW33a_HFZuR-kO2fOHW71RVAwIKQ_TEGR2Ex1N9UVPnBi0Gjad7&s=10";
        texto.textContent = "Ducati hypermotard v2";
        
    }
    else if (favorito.value === "Comida") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbpACVwTWqj18oEiCRm_Y-hioqPgaPXL8p8uKkRLVVA&s=10";
        texto.textContent = "Hamburguesa";

    }
    else {
        imagen.src = "https://i.pinimg.com/236x/14/d2/ac/14d2ac9bdd2e959f457f75f4cf3cc4ff.jpg";
                texto.textContent = "ESTAMOS RE LOCOOOOOOOSSSS!!!";

    }
    
});

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("que paciencia tan H**** has de tener");
});


