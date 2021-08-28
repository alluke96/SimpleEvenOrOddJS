function mostrarNumeros(inicio){
    document.getElementById("resultado").innerHTML = "";

    var valor = parseInt(document.getElementById("valor").value);

    for(var cont = inicio; cont <= valor; cont+=2){
        document.getElementById("resultado").innerHTML += cont + " ";
    }
}

