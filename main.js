const pesosPorDolar = 205;
const pesosPorEuro = 210;

const campoMonto = document.getElementById("monto");
const botonRadioDolar = document.getElementById("cambio-dolar");
const botonRadioEuro = document.getElementById("cambio-euro");

function convertir () {
    let montoComoNumero = parseInt(campoMonto.value);
    let resutaldo = 0;
    if(isNaN(montoComoNumero)){
        alert("Debes completar todos los requerimientos")
    }
    else{
        if(botonRadioDolar.checked){
            resutaldo = montoComoNumero / pesosPorDolar; 
            alert("El cambio de pesos a dolares es: $" + resutaldo.toFixed(2));
        }
        else if (botonRadioEuro.checked){
            resutaldo = montoComoNumero / pesosPorEuro; 
            alert("El cambio de pesos a euros es: $" + resutaldo.toFixed(2));
        }
        else{
            alert("Debes completar todos los requerimientos")
        }
    }
}
