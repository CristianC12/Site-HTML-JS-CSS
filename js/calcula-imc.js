var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");



    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){

        console.log("Peso inválido");
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){

        console.log("Altura inválida")
        pesoValido = false;
        tdIMC.textContent = "Altura inválida"
        
    }

    if( alturaValida && pesoValido ){

        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;

    }
}


    function validaAltura(altura){

        if(altura >=0 && altura <= 3.0){

            return true;
        }else{return false;}



    }
    function validaPeso(peso){

        if(peso >= 0 && peso <1000){

            return true;
        }else{return false;}
    }

    function calculaImc(peso,altura){

        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);

    }




