var json=[
    {
        "products": [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            }
        ],
        "suppliers": [
            {
                "id": 101,
                "name": "Tech Supplies Inc.",
                "contactInfo": {
                    "phone": "123-456-7890",
                    "email": "sales@techsupplies.com",
                    "address": "123 Tech Lane, Silicon Valley, CA"
                }
            }
        ],
        "orders": [
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            }
        ]
    }
]

function menu() {
    console.log("-------------------MENU--------------------")
    console.log("1. Product Management");
    console.log("2. Supplier Management");
    console.log("3. Order Management");
    console.log("4. Stock Management");
    console.log("5. Reporting");
    console.log("6. Search and Filter");
    console.log("7. Salir");
    console.log("-------------------------------------------")
    
}
function menu2() {
    console.log("-------------------MENU--------------------")
    console.log("1. add Product");
    console.log("2. view Products");
    console.log("3. update Product");
    console.log("4. deleteProduct");
    console.log("5. Salir");
    console.log("-------------------------------------------")
    
}

function menuserch(){
    console.log("-------------------MENU--------------------")
    console.log("1. name");
    console.log("2. category");
    console.log("3. supplier");
    console.log("4. exit"); 
    console.log("-------------------------------------------")
}
function searchProducts(query) {
    for(let i of json[0]["products"]){
        if(i["name"]===query){
            console.log("==================")
            console.log("Id: ", i["id"]);
            console.log("Name: ", i["name"]);
            console.log("Category: ", i["category"]);
            console.log("Price: ", i["price"]);
            console.log("quantityInStock: ", i["quantityInStock"]);
            console.log("supplierId ", i["supplierId"]);
            console.log("==================")
        }
        if(i["category"]===query){
            console.log("==================")
            console.log("Id: ", i["id"]);
            console.log("Name: ", i["name"]);
            console.log("Category: ", i["category"]);
            console.log("Price: ", i["price"]);
            console.log("quantityInStock: ", i["quantityInStock"]);
            console.log("supplierId ", i["supplierId"]);
            console.log("==================")
        }
        if(i["supplierId"]===query){
            console.log("==================")
            console.log("Id: ", i["id"]);
            console.log("Name: ", i["name"]);
            console.log("Category: ", i["category"]);
            console.log("Price: ", i["price"]);
            console.log("quantityInStock: ", i["quantityInStock"]);
            console.log("supplierId ", i["supplierId"]);
            console.log("==================")
        }
       
    }
            
}
function menuactualizar(){
    console.log("-------------------MENU--------------------")
    console.log("1. name");
    console.log("2. category ");
    console.log("3. price");
    console.log("4. quantityInStock");
    console.log("5. supplierId");
    console.log("6. exit"); 
    console.log("-------------------------------------------")
}
function menuactualizar2(){
    console.log("-------------------MENU--------------------")
    console.log("1. name");
    console.log("2. contact ")
    console.log("3. exit"); 
    console.log("-------------------------------------------")
}
function menuactualizar2(){
    console.log("-------------------MENU--------------------")
    console.log("1. quantity");
    console.log("2. status ")
    console.log("3. exit"); 
    console.log("-------------------------------------------")
}
function menuserch1(){
    console.log("-------------------MENU--------------------")
    console.log("1. Status");
    console.log("2. Date ");
    console.log("3. productId");
    console.log("4. exit"); 
    console.log("-------------------------------------------")
}
function filterOrders(criteria){
    for(let i of json[0]["orders"]){
        if(i["status"]===criteria){
            console.log("==================")
            console.log("orderId: ", i["orderId"]);
            console.log("productId: ", i["productId"]);
            console.log("quantity: ", i["quantity"]);
            console.log("orderDate: ", i["orderDate"]);
            console.log("status: ", i["status"]);
            console.log("==================")
        }
        if(i["orderDate"]===criteria){
            console.log("==================")
            console.log("orderId: ", i["orderId"]);
            console.log("productId: ", i["productId"]);
            console.log("quantity: ", i["quantity"]);
            console.log("orderDate: ", i["orderDate"]);
            console.log("status: ", i["status"]);
            console.log("==================")
        }
        if(i["productId"]===criteria){
            console.log("==================")
            console.log("orderId: ", i["orderId"]);
            console.log("productId: ", i["productId"]);
            console.log("quantity: ", i["quantity"]);
            console.log("orderDate: ", i["orderDate"]);
            console.log("status: ", i["status"]);
            console.log("==================")
        }
       
    }
}
function addProduct(product){
    json[0]["products"].push(product)
}
function viewProducts(){
    for(let i of json[0]["products"]){
        
        console.log("==================")
        console.log("Id: ", i["id"]);
        console.log("Name: ", i["name"]);
        console.log("Category: ", i["category"]);
        console.log("Price: ", i["price"]);
        console.log("quantityInStock: ", i["quantityInStock"]);
        console.log("supplierId ", i["supplierId"]);
        console.log("==================")
    }
}
function updateProduct(id, newDetails){
    for(const i of json[0]["products"]){
        if(i["id"]===id){
            
            i["name"]=newDetails
            i["category"]=newDetails
            i["price"]=newDetails
            i["quantityInStock"]=newDetails
            i["supplierId"]=newDetails
           
        }
    }
}
function deleteProduct(id){
    for(const i of json[0]["products"]){
        if(i["id"]===id){
            delete i["id"]
            delete i["name"]
            delete i["category"]
            delete i["price"]
            delete i["quantityInStock"]
            delete i["supplierId"]
        }
    }

}

function addSupplier(supplier){
    json[0]["suppliers"].push(supplier)
}
function viewSuppliers(){
    for(let i of json[0]["suppliers"]){
        
        console.log("==================")
        console.log("Id: ", i["id"]);
        console.log("Name: ", i["name"]);
        console.log("ContactInfo: ");
        console.log("Phone: ", i["contactInfo"]["phone"]);
        console.log("Email ",i["contactInfo"]["email"]);
        console.log("Address", i["contactInfo"]["address"]);
        console.log("==================")
    }
}
function updateSupplier(id, newDetails){
    for(const i of json[0]["suppliers"]){
        if(i["id"]===id){
            
            i["name"]=newDetails
            i["phone"]=newDetails
            i["email"]=newDetails
            i["address"]=newDetails
         
           
        }
    }
}
function deleteSupplier(id){
    for(const i of json[0]["suppliers"]){
        if(i["id"]===id){
            delete i["id"]
            delete i["name"]
            delete i["contactInf"]
            
        }
    }

}
function addOrder(order){
    json[0]["orders"].push(order)
}
function viewOrders(){
    for(let i of json[0]["orders"]){
        
        console.log("==================")
        console.log("orderId: ", i["orderId"]);
        console.log("ProductId: ", i["productId"]);
        console.log("Quantity: ", i["quantity"]);
        console.log("OrderDate: ",i["orderDate"]);
        console.log("Status:", i["status"]);
        console.log("==================")
    }
}
function updateOrder(orderId, newDetails){
    for(const i of json[0]["orders"]){
        if(i["id"]===orderId){
            i["orderDate"]= newDetails
            i["status"]= newDetails
           
        }
    }
}
function deleteOrder(orderId){
    for(const i of json[0]["orders"]){
        if(i["id"]===orderId){
            delete i["orderId"]
            delete i["productId"]
            delete i["quantity"]
            delete i["orderDate"]
            delete i["status"]
            
        }
    }

}
bool=true
while(bool===true){
    menu()
    var opc=parseInt(prompt("ingrese la opcion a la que deseas acceder: "))
    if(opc===1){
        console.clear()
        console.log("=========PRODUCT MANAGEMENT==========");
        console.log("")
        menu2()
        let elije=parseInt(prompt("ingrese el numero de la opcion a la que desea acceder: "))
        if(elije===1){
           
            product=[]
            console.log("=========ADD PRODUCT===========");
            let id=parseInt(prompt("ingrese la id del producto: "))
            let name=prompt("ingrese el nombre del producto: ")
            let category=prompt("ingrese la categoria: ")
            let price=parseInt(prompt("ingrese el precio del producto: "))
            let quantityInStock=parseInt(prompt("ingrese la cantidad del producto: "))
            let supplierId=parseInt(prompt("ingrese el id del provedor"))
            product.push([{"id":id,"name":name,"category":category,"price":price,"quantityInStock":quantityInStock,"supplierId":supplierId}])
            console.log(addProduct(product));
           
            
        }
        if(elije===2){
            console.clear()
            console.log("=========VIEW PRODUCT===========");
            console.log("")
            viewProducts()
        }
        if(elije===3){
            console.clear()
            console.log("=========UPDATE PRODUCT===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto donde va a actualizar: "))
            console.log(updateProduct(id))
            menuactualizar()
            let eli=parseInt(prompt("ingresa la opcion donde vas a actualizar: "))
            if(eli===1){
                newDetails=prompt("ingrese la nueva actualizacion del nombre: ")
                console.log(updateProduct(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion de la categoria: ")
                console.log(updateProduct(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===3){
                newDetails=prompt("ingrese la nueva actualizacion del precio: ")
                console.log(updateProduct(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===4){
                newDetails=prompt("ingrese la nueva actualizacion de la cantidad : ")
                console.log(updateProduct(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===5){
                newDetails=prompt("ingrese la nueva actualizacion de la id del proveedor : ") 
                console.log(updateProduct(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===6){
                console.log("Regresando, un momento...")
            }
            
          
        }
        if(elije===4){
            console.clear()
            console.log("=========UPDATE PRODUCT===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto que vas a eliminar: "))
            console.log(deleteProduct(id));
            console.log("se ha realizado la eliminacion con exito!!");
            console.log(json);

            
        }
        if(elije===5){
            console.log("Regresando...")
        }


    }
    if(opc===2){
        console.clear()
        console.log("=========SUPPLIER MANAGEMENT==========");
        console.log("")
        menu2()
        let elije=parseInt(prompt("ingrese el numero de la opcion a la que desea acceder: "))
        if(elije===1){
          
            supplier=[]
            console.log("=========ADD SUPPLIER===========");
            let id=parseInt(prompt("ingrese la id del producto: "))
            let name=prompt("ingrese el nombre del producto: ")
            let phone=prompt("ingrese la categoria: ")
            let email=parseInt(prompt("ingrese el precio del producto: "))
            let address=parseInt(prompt("ingrese la cantidad del producto: "))
            supplier.push([{"id":id,"name":name,"contactInfo":{"phone":phone,"email":email,"address":address}}])
            console.log(addSupplier(supplier));
            
        }
        if(elije===2){
            console.clear()
            console.log("=========VIEW SUPPLIER===========");
            console.log("")
            viewSuppliers()
        }
        if(elije===3){
            console.clear()
            console.log("=========UPDATE SUPPLIER===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto donde va a actualizar: "))
            console.log(updateSupplier(id))
            menuactualizar2()
            let eli=parseInt(prompt("ingresa la opcion donde vas a actualizar: "))
            if(eli===1){
                newDetails=prompt("ingrese la nueva actualizacion del nombre: ")
                console.log(updateSupplier(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion del numero de telefono: ")
                newDetails=prompt("ingrese la nueva actualizacion del numero de email: ")
                newDetails=prompt("ingrese la nueva actualizacion del numero de address: ")
                console.log(updateSupplier(id,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===3){
                console.log("Regresando, un momento...")
            }
            
          
        }
        if(elije===4){
            console.clear()
            console.log("=========DELETE SUPPLIER===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto que vas a eliminar: "))
            console.log(deleteSupplier(id));
            console.log("se ha realizado la eliminacion con exito!!");
            console.log(json);

            
        }
        if(elije===5){
            console.log("Regresando...")
        }
    }
    if(opc===3){
        console.clear()
        console.log("=========ORDER MANAGEMENT==========");
        console.log("")
        menu2()
        let elije=parseInt(prompt("ingrese el numero de la opcion a la que desea acceder: "))
        if(elije===1){
          
            order=[]
            console.log("=========ADD ORDER===========");
            let orderid=parseInt(prompt("ingrese la id del producto: "))
            let productid=parseInt(prompt("ingrese el nombre del producto: "))
            let quantity=parseInt(prompt("ingrese la categoria: "))
            let date=prompt("ingrese el precio del producto: ")
            let status=prompt("ingrese la cantidad del producto: ")
            supplier.push([{"orderId":orderid,"productId":productid,"quantity":quantity,"orderDate":date,"status":status}])
            console.log(addOrder(order));
            
        }
        if(elije===2){
            console.clear()
            console.log("=========VIEW ORDERS===========");
            console.log("")
            viewOrders()
        }
        if(elije===3){
            console.clear()
            console.log("=========UPDATE ORDERS===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto donde va a actualizar: "))
            console.log(updateOrder(orderId))
            menuactualizar3()
            let eli=parseInt(prompt("ingresa la opcion donde vas a actualizar: "))
            if(eli===1){
                newDetails=prompt("ingrese la nueva actualizacion de la cantidad: ")
                console.log(updateOrder(orderId,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion del status: ")
                console.log(updateOrder(orderId,newDetails))
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===3){
                console.log("Regresando, un momento...")
            }
            
          
        }
        if(elije===4){
            console.clear()
            console.log("=========DELETE ORDERS===========");
            console.log("")
            let orderId=parseInt(prompt("ingrese la id del producto que vas a eliminar: "))
            console.log(deleteOrder(orderId));
            console.log("se ha realizado la eliminacion con exito!!");
            console.log(json);

            
        }
        if(elije===5){
            console.log("Regresando...")
        }

    }
    if(opc===6){ 
        console.clear()
        console.log("========SEARCH===========");
        console.log("")
        mostrar=parseInt(prompt(":::::MENU::::\n1.search product\n2.search orders\ningrese el numero de la opcion a la que desea acceder: "))
        if(mostrar===1){
            buclesito1=true
            while(buclesito1===true){
                menuserch()
                let opci=parseInt(prompt("por cual  opcion desea buscar: "))
                if (opci===1){
                    let query=prompt("ingrese el nombre del que busca: ")
                    console.log(searchProducts(query))
                }
                if (opci===2){
                    let query=prompt("ingrese la categoria  del que busca: ")
                    console.log(searchProducts(query))
                }
                if (opci===3){
                    let query=parseInt(prompt("ingrese la id del proovedor del que busca: "))
                    console.log(searchProducts(query))
                }
                if (opci===4){
                    console.log("Regresando...");
                    buclesito1=false 
                }
            }  
        }
        if(mostrar===2){
            buclesito2=true
            while(buclesito2===true){
                menuserch1()
                let opci=parseInt(prompt("por cual  opcion desea buscar: "))
                if (opci===1){
                    let criteria=prompt("ingrese el status del que busca: ")
                    console.log(filterOrders(criteria))
                }
                if (opci===2){
                    let criteria=prompt("ingrese la fecha  del que busca: ")
                    console.log(filterOrders(criteria))
                }
                if (opci===3){
                    let criteria=parseInt(prompt("ingrese la id del producto del que busca: "))
                    console.log(filterOrders(criteria))
                }
                if (opci===4){
                    console.log("Regresando...")
                    menu()
                    var opc=parseInt(prompt("ingrese la opcion a la que deseas acceder: "))
                    bool=true
                }
            }
        }  
    }
    if(opc===7){
        console.log("Finalizando programa...")
        bool=false
    }
    bool=false
}
