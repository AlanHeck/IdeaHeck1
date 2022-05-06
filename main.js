function convertir () {
    let valore = parseInt(document.getElementById("valor").value);
    let resutaldo = 0;
    let dolar = 205;
    let euro = 210;
    if(document.getElementById("uno").checked){
        resutaldo = valore / dolar; 
        alert("El cambio de pesos a dolares es: $" + resutaldo.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resutaldo = valore / euro; 
        alert("El cambio de pesos a euros es: $" + resutaldo.toFixed(2));
    }
    else{
        alert("Debes completar todos los requerimientos")
    }
}