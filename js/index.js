let botonSubir = document.querySelector(".comenzar");
let resultado = document.querySelector(".resulado");
let barraProgreso = document.querySelector(".barra__progreso");
let botonesContenedor = document.querySelector(".botones")
let intervalID;
let valor;
let x = 10

botonSubir.addEventListener("click", function(){
    let i = 1;
    barraProgreso.style.width = "0";
    barraProgreso.style.transition = "width 10s linear";
    botonesContenedor.style.display = "none"

    clearInterval(intervalID); // Detener el intervalo actual (si existe)

    document.querySelectorAll('.casa__topo img').forEach(img => {
        img.addEventListener("click", function(){
            img.style.pointerEvents = "none";
            resultado.innerText = i
            i++;
        });
    });

    let tiempoTranscurrido = 0;

    intervalID = setInterval(function() {
        let numeroAleatorio = Math.floor(Math.random() * 9) + 1;
        if(numeroAleatorio === valor){
            if(numeroAleatorio === 9){
                numeroAleatorio--
            } else {
                numeroAleatorio++
            }
        }
        let imagen = document.querySelector(`img[data-valor="${numeroAleatorio}"]`);

        imagen.style.opacity = "1";
        imagen.style.pointerEvents = "auto";

        setTimeout(function() {
            imagen.style.opacity = "0";
            imagen.style.pointerEvents = "none";
        }, 900);
        
        tiempoTranscurrido += 1000;
        x--
        
        if (tiempoTranscurrido >= 10000) {
            clearInterval(intervalID);// Detener el intervalo después de 10 segundos
            setTimeout(function(){   
                botonesContenedor.style.display = "flex"
                barraProgreso.style.width = "100%";
                barraProgreso.style.transition = "0s";
                i = 0
                resultado.innerText = i
            },1000)

        }
        valor = numeroAleatorio
    }, 1000);
});

