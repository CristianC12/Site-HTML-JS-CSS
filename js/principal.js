var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#paciente-1");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");


var pesoValido = true;
var alturaValida = true;

    if(peso<=0 || peso >=1000){

        console.log("Peso inválido");
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
    }

    if (altura<=0 || altura>=3.00){

        console.log("Altura inválida")
        pesoValido = false;
        tdIMC.textContent = "Altura inválida"
    }

if( alturaValida = true && pesoValido == true){
var imc = peso / (altura * altura);
tdIMC.textContent = imc;
}