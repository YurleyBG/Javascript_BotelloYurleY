
document.getElementById("boton1").addEventListener("click",viewProducts);

function viewProducts(){
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let product=datos[0]["products"]
        for (i in product) {
            document.getElementById("verproduct").innerHTML += `
             <p>----------------------</p>
            <h3>Id: ${product[i]["id"]} </h3>
            <h3>Name: ${product[i]["name"]}</h3>
            <h3>Category: ${product[i]["category"]}</h3>
            <h3>Price: ${product[i]["price"]}</h3>
            <h3>QuantityInStock: ${product[i]["quantityInStock"]}</h3>
            <h3>SupplierId: ${product[i]["supplierId"]}</h3>
            <p>----------------------</p>
            `
        }
    })
}
document.getElementById("boton2").addEventListener("click",addProduct);
function addProduct(){
    document.getElementById("enviar").addEventListener("click",i);
    function i(event){
        event.preventDefault();
        fetch("elJson.json")
        .then(res=>res.json())
        .then(datos=>{
            
            let product=datos[0]["products"]
            let idd=parseInt(document.getElementById("id1").value);
            let namee=parseInt(document.getElementById("nombre").value);
            let categoryy=parseInt(document.getElementById("categoria").value);
            let pricee=parseInt(document.getElementById("precio").value);
            let stockk=parseInt(document.getElementById("stock").value);
            let supplieridd=parseInt(document.getElementById("proveedor").value);
            product["id"]=idd
            product["name"]=namee
            product["category"]=categoryy
            product["price"]=pricee
            product["quantityInStock"]=stockk
            product["supplierId"]=supplieridd
         
    
            
            
        
        })
    }
    
    console.log(`nombre: ${"name"}`)
    
}
document.getElementById("botonsuppl").addEventListener("click",viewProducts);

function viewProducts(){
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let product=datos[0]["suppliers"]
        for (i in product) {
            document.getElementById("verproveedor").innerHTML += `
             <p>----------------------</p>
            <h3>Id: ${product[i]["id"]} </h3>
            <h3>Name: ${product[i]["name"]}</h3>
            <h3>contactInfo: </h3>
            <h3>phone: ${product[i]["contactInfo"][ "phone"]}</h3>
            <h3>email: ${product[i]["contactInfo"][ "email"]}</h3>
            <h3>address: ${product[i]["contactInfo"][  "address"]}</h3>
            <p>----------------------</p>
            `
        }
    })
}

    

