
document.getElementById("boton1").addEventListener("click",viewProducts);

function viewProducts(){
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let product=datos[0]["products"]
        document.getElementById("verproduct").innerHTML = ""
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

boton0.addEventListener("click", (e) => {
    document.getElementById("boton1").style.display  = `block`;
    document.getElementById("boton2").style.display  = `block`;
    document.getElementById("boton3").style.display  = `block`;
    document.getElementById("formulario").style.display  = `block`;
    document.getElementById("boton4").style.display  = `block`;
});
boton01.addEventListener("click", (e) => {
    document.getElementById("botonsuppl").style.display  = `block`;
    document.getElementById("botonsupple1").style.display  = `block`;
    document.getElementById("formulario1").style.display  = `block`;

});
boton02.addEventListener("click", (e) => {
    document.getElementById("botonorder").style.display  = `block`;

});



document.getElementById("Posts").addEventListener("submit",function(event){
    event.preventDefault();

    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        
        let product=datos[0]["products"]
        let idd=(document.getElementById("id1").value);
        let namee=(document.getElementById("nombre").value);
        let categoryy=(document.getElementById("categoria").value);
        let pricee=(document.getElementById("preecio").value);
        let stockk=(document.getElementById("stock").value);
        let supplieridd=(document.getElementById("proveedor").value);
        product.push({
            "id":idd,
            "name":namee,
            "category":categoryy,
            "price":pricee,
            "quantityInStock":stockk,
            "supplierId":supplieridd,
        })
       
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
    
});


document.getElementById("botonsuppl").addEventListener("click",viewsupplers);

function viewsupplers(){
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
document.getElementById("Posts1").addEventListener("submit",function(event1){
    event1.preventDefault();

    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        
        let product=datos[0]["suppliers"]
        let idd1=(document.getElementById("idd1").value);
        let namee1=(document.getElementById("nombres").value);
        let phone1=(document.getElementById("phone").value);
        let email1=(document.getElementById("email").value);
        let address1=(document.getElementById("address").value);
        product.push({
            "id":idd1,
            "name":namee1,
            "contactInfo":{
                "phone":phone1,
                "email":email1,
                "address":address1,
            }
           
         
        })
       
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
    
});
document.getElementById("botonorder").addEventListener("click",viewsorders);

function viewsorders(){
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let product=datos[0]["orders"]
        for (i in product) {
            document.getElementById("verorder").innerHTML += `
            <p>----------------------</p>
            <h3>Id: ${product[i]["orderId"]} </h3>
            <h3>Name: ${product[i]["productId"]}</h3>
            <h3>contactInfo: </h3>
            <h3>phone: ${product[i]["quantity"]}</h3>
            <h3>email: ${product[i]["orderDate"]}</h3>
            <h3>address: ${product[i]["status"]}</h3>
            <p>----------------------</p>
            `
        }
    })
}
document.getElementById("Posts1").addEventListener("submit",function(event1){
    event1.preventDefault();

    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        
        let product=datos[0]["orders"]
        let idd1=(document.getElementById("idd1").value);
        let namee1=(document.getElementById("nombres").value);
        let phone1=(document.getElementById("phone").value);
        let email1=(document.getElementById("email").value);
        let address1=(document.getElementById("address").value);
        product.push({
            "id":idd1,
            "name":namee1,
            "contactInfo":{
                "phone":phone1,
                "email":email1,
                "address":address1,
            }
           
         
        })
       
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
    
});

    

