
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
    document.getElementById("boton4").style.display  = `block`;
});

boton01.addEventListener("click", (e) => {
    document.getElementById("botonsuppl").style.display  = `block`;
    document.getElementById("botonsupple1").style.display  = `block`;
    document.getElementById("actuaproveedor").style.display  = `block`;
    document.getElementById("eliminarproveedor").style.display  = `block`;
});
boton02.addEventListener("click", (e) => {
    document.getElementById("botonorder").style.display  = `block`;
    document.getElementById("botonorder2").style.display  = `block`;
    document.getElementById("actualizarorden").style.display  = `block`;
    document.getElementById("eliminarorden").style.display  = `block`;
 
});
eliminarorden.addEventListener("click", (e) => {
    document.getElementById("eliminarordin").style.display  = `block`;

});
eliminarproveedor.addEventListener("click", (e) => {
    document.getElementById("eliminarprovee").style.display  = `block`;

});
boton4.addEventListener("click", (e) => {
    document.getElementById("deleteproduct").style.display  = `block`;

});
boton2.addEventListener("click", (e) => {
    document.getElementById("formulario").style.display  = `block`;

});
boton1.addEventListener("click", (e) => {
    document.getElementById("verproduct").style.display  = `block`;

});
botonsupple1.addEventListener("click", (e) => {
    document.getElementById("formulario1").style.display  = `block`;

});
botonsuppl.addEventListener("click", (e) => {
    document.getElementById("verproveedor").style.display  = `block`;

});
botonorder.addEventListener("click", (e) => {
    document.getElementById("verorder").style.display  = `block`;

});
botonorder2.addEventListener("click", (e) => {
    document.getElementById("formulario2").style.display  = `block`;

});
boton3.addEventListener("click", (e) => {
    document.getElementById("updateproduct").style.display  = `block`;
});
enviar0.addEventListener("click", (e) => {
    document.getElementById("opc1").style.display  = `block`;
    document.getElementById("opc2").style.display  = `block`;
    document.getElementById("opc3").style.display  = `block`;
    document.getElementById("opc4").style.display  = `block`;
});
opc1.addEventListener("click", (e) => {
    document.getElementById("div1").style.display  = `block`;

});
opc2.addEventListener("click", (e) => {
    document.getElementById("div2").style.display  = `block`;

});
opc3.addEventListener("click", (e) => {
    document.getElementById("div3").style.display  = `block`;

});
opc4.addEventListener("click", (e) => {
    document.getElementById("div4").style.display  = `block`;

});
actuaproveedor.addEventListener("click", (e) => {
    document.getElementById("updateproveedor").style.display  = `block`;
});
enviar00.addEventListener("click", (e) => {
    document.getElementById("opc11").style.display  = `block`;
    document.getElementById("opc22").style.display  = `block`;
    document.getElementById("opc33").style.display  = `block`;
    document.getElementById("opc44").style.display  = `block`;
});
//agregar producto
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
            <h3>--------------------------</h3>
            <h3>Id: ${product[i]["id"]} </h3>
            <h3>Name: ${product[i]["name"]}</h3>
            <h3>Category: ${product[i]["category"]}</h3>
            <h3>Price: ${product[i]["price"]}</h3>
            <h3>QuantityInStock: ${product[i]["quantityInStock"]}</h3>
            <h3>SupplierId: ${product[i]["supplierId"]}</h3>
            <h3>------------------------------</h3>
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
        document.getElementById("verproveedor").innerHTML += ""
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
//agregar proveedor
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
        document.getElementById("verorder").innerHTML +=""
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
//agregar orden
document.getElementById("Posts1").addEventListener("submit",function(event1){
    event1.preventDefault();

    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        
        let product=datos[0]["orders"]
        let idor1=(document.getElementById("orid").value);
        let proid1=(document.getElementById("proid").value);
        let canti1=(document.getElementById("canti").value);
        let date1=(document.getElementById("date").value);
        let status1=(document.getElementById("stat").value);
        product.push({
            "orderId":idor1,
            "productId":proid1,
            "quantity":canti1,
            "orderDate":date1,
            "astatus":status1,
            
           
         
        })
       
        document.getElementById("verorder").innerHTML +=""
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
    
});

    ///actualizar

///actualizar productos

document.getElementById("updateproduct").addEventListener("click",function(event1){
   
    event1.preventDefault();
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let id222=(document.getElementById("iddeseada").value);
        let name222=(document.getElementById("youn1").value);
        let category222=(document.getElementById("youn2").value);
        let price222=(document.getElementById("youn3").value);
        let stock222=(document.getElementById("youn4").value);
      
        for(i of datos[0]["products"]){
            if(i["id"]==id222){
               
               i["name"]=name222;
               i["category"]=category222;
               i["priece"]=price222;
               i["quantityInStock"]=stock222;
            }
        }
        
    });
});


//eliminar producto
document.getElementById("deleteproduct").addEventListener("click",function(event11){
    
    event11.preventDefault();
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let idaeliminar=(document.getElementById("ideliminar").value);
        for(i of datos[0]["products"]){
            if(i["id"]==idaeliminar){
                delete i["id"]
                delete i["name"]
                delete i["category"]
                delete i["price"]
                delete i["quantityInStock"]
                delete i["supplierId"]
            }
        }
           console.log(datos) 
    });
});
//eliminar proveedor
document.getElementById("eliminarprovee").addEventListener("click",function(event11){
    
    event11.preventDefault();
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let ideelimini=(document.getElementById("elimini").value);
        for(i of datos[0]["products"]){
            if(i["id"]==ideelimini){
                delete i["id"]
                delete i["name"]
                delete i["category"]
                delete i["price"]
                delete i["quantityInStock"]
                delete i["supplierId"]
            }
        }
           console.log(datos) 
    });
});
//eliminar orden
document.getElementById("eliminarordin").addEventListener("click",function(event11){
    
    event11.preventDefault();
    fetch("elJson.json")
    .then(res=>res.json())
    .then(datos=>{
        let iddeliminii=(document.getElementById("eliminiordi").value);
        for(i of datos[0]["products"]){
            if(i["id"]==iddeliminii){
                delete i["id"]
                delete i["name"]
                delete i["category"]
                delete i["price"]
                delete i["quantityInStock"]
                delete i["supplierId"]
            }
        }
           console.log(datos) 
    });
});
