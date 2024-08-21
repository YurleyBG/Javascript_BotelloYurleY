
function superdigit(n,k){
    let p = ""
    
    for(h =0 ; h< k; h++){
        p+=n
    }
    console.log(p);
    
    
    if(n.length===1){
        return parseInt(n)
    }
    let suma=0;
    for( let i=0 ; i < n.length; i++){
        suma += parseInt(n[i]);
    }
    suma *= k;
    
    console.log("superdigitos:",suma);
    
    
    return superdigit(suma.toString(), 1);
   
}
let n=(prompt("ingrese un numero: "))
let k= (prompt("ingrese el numero de repeticiones : "))
console.log(superdigit(n,k));

//desarrollado yurley botello