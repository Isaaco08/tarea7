function verificarEdad(){
    var num = parseInt(document.getElementById("edad").value);

    if (!isNaN(num)) {
        if (num >= 18) {
            alert("Ya puede condicir");
        } else {
            alert("No puede conducir");
        }
    }else{
        alert("Digite solo números enteros");
    }
}

function calificacion(){
    var calificacion = parseFloat(document.getElementById("calificacion").value);

    if (!isNaN(calificacion)) {
        if (calificacion >= 0 && calificacion <= 3) {
    alert("Muy deficiente");
        }
        else{
            if(calificacion >= 3 && calificacion <=5){
                alert("Insuficiente");
            }
            else{
                if(calificacion >= 5 && calificacion <=6){
                    alert("Suficiente");
                }
                else{
                    if(calificacion >= 6 && calificacion <=7){
                        alert("Bien");
                    }
                    else{
                        if(calificacion >= 7 && calificacion <=9){
                            alert("Notable");
                        }
                        else{
                            if(calificacion >= 9 && calificacion <=10){
                                alert("Sobresaliente");
                            }
                        }
                    }
                }
            }
        }
    }
    else{
        alert("Digite solo números enteros");
    }
}

var palabras = "";

function concatenarCadenas() {
    while(true){
        var cadena = prompt("Digite cadenas de texto o pulsa Cancelar para finalizar");

        if (cadena === null) {
            palabras = "";
            break; // El usuario ha pulsado "cancelar"
        }
    
        if (palabras !== "") {
            palabras +="-";
        }

        palabras += cadena;
        document.getElementById("resultadopalabras").innerHTML = palabras;
    }
}

function validarNumero() {
    var suma = 0;

    while (true) {
        var input = prompt("Ingresa un número o pulsa Cancelar para finalizar");

        if (input === null) {
            break; // El usuario ha pulsado "cancelar"
        }

        var numero = parseInt(input);

        if (!isNaN(numero)) {
            suma += numero;
        } else {
            alert("No has ingresado un número válido.");
        }

        document.getElementById("contadornúmero").innerHTML = "La suma total de los números introducidos es: " + suma;
    }
}


var resultado = "";

function calcularLetraCedula() {
    var letras = "";
    var resto = 0;


    while (true) {
        var input = prompt("Ingresa un número de cédula o Presiona Cancelar para finalizar");  
      
        if (input === null) {
            resultado = "";
            break; // El usuario ha pulsado "cancelar"
        }

        var cedula = parseInt(input);

        if (!isNaN(cedula)) {
            if (cedula >= 0 && cedula <= 99999999   ) {
                letras = "TRWAGMYFPDXBNJZSQVHLCKE";
                resto = cedula % 23;
                resultado += letras.charAt(resto);

                document.getElementById("cedulaResultado").innerHTML = "La letra correspondiente al número de cédula es: " + resultado;

            } 
            else {
                alert("El número de cédula debe estar entre 0 y 99999999.");
            }
        } 
        else {
            alert("No has ingresado un número válido.");
        }
    }
}

function generarTabla() {
    var filas = parseInt(document.getElementById("textofilas").value);
    var columnas = parseInt(document.getElementById("textocolumnas").value);
    var tabla = " ";
    var creadorTabla= document.createElement('table');
    var numero = filas * columnas;

    tabla = "<caption>Tabla</caption>";
    tabla += "<tr>";
    tabla += "</tr>";
    
    for (var i = 0; i < filas; i++) {
      tabla += "<tr>";
      
      for (var j = 0; j < columnas; j++) {
        tabla += "<td>" + numero + "</td>";
        numero--;
      }
      
      tabla += "</tr>";
    }
    
    creadorTabla.innerHTML = tabla;

    var div = document.getElementById('tblData');
    div.innerHTML = ""; // limpiar el contenido de la tabla
    div.appendChild(creadorTabla);
}

function precioIVA(precio, iva){
    precio = document.getElementById("textoPrecio").value;
    iva = document.getElementById("textoIVA").value;
    var resultado = 0;
    resultado = precio * (iva / 100);
    document.getElementById("resultadoIVA").innerHTML = "El precio con IVA es: "+resultado;
}


