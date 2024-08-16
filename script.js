//ejercicio 1
function edad(edadactual, year){
    edadactual=17;
    year=2024;
    return year-edadactual;

}
console.log(edad())

//ejercicio 2

function convertir(celsius){
    celsius=35;
    return 32+(9*celsius/5);
}
 console.log(convertir())


//ejercicio  3

function descuento(person){
    person=12
    if( person<=20){
        descuentoperson="tiene un descuento de 30%"
    }
    if( person>20 & person<=50) {
       descuentoperson="tiene un descuento de 10%"
    }
    
    return descuentoperson
}
 
console.log(descuento())

//4 funciones
//sin retorno y sin parametro
function numero(){
    
    console.log("hola")
    
}
numero()
//con parametro y con retorno
function nombre(apellido){
    apellido="garcia"
    return apellido
}

console.log(nombre())

// con retorno sin parmetro

function edad(){
    year="17"
    return year
}

console.log(edad())

//con parametro sin retorno 

function mathcal(calculom){
    calculom=20+4;
    console.log(calculom)
}

mathcal()