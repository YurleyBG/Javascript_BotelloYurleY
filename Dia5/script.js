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
            },
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            },
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-09-24",
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
    console.log("6. Search and Filter ");
    console.log("7. Salir ");
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
function menuactualizar3(){
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
        console.log("supplierId: ", i["supplierId"]);
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
        console.log("Email:",i["contactInfo"]["email"]);
        console.log("Address:", i["contactInfo"]["address"]);
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
function generateSalesReport(startDate, endDate){
    console.log("==================")
    console.log("StarDate:", startDate)
    console.log("EndDate:", endDate)
    let contador=0;
    console.log("Total number of orders:",contador)
    let fsales=json[0]["orders"].filter(i => i["orderDate"] >= startDate && i["orderDate"]<= endDate)
    for( let i=0 ; i < fsales.length; i++){
       
        contador++;
       
    }
   
  
    for(let i of json){
        for(let m of json){
            if(i.products.id===m.orders.orderId){
                console.log("precioTotal:",i.products.price*m.orders.quantity); 
            }
        }
    }
        
    console.log("-",fsales);
   


}
function generateInventoryReport() {
    for(let i of json[0]["products"]){
       
        console.log("==================")
        console.log("Id: ", i["id"]);
        console.log("Name: ", i["name"]);
        console.log("Category: ", i["category"]);
        console.log("==================")
    }
    for(let i of json[0]["suppliers"]){
        console.log("Id: ", i["id"]);
        console.log("Name: ", i["name"]);
        console.log("ContactInfo: ");
        console.log("Phone: ", i["contactInfo"]["phone"]);
        console.log("Email: ",i["contactInfo"]["email"]);
        console.log("Address:", i["contactInfo"]["address"]);
        console.log("==================")
    }
    for(let i of json[0]["products"]){
        console.log("value_of_stock : ", i["price"]*i["quantityInStock"]);
        console.log("==================")
    }

    
}
function checkStockLevels(){
    for(let i of json[0]["products"]){
        if(i["quantityInStock"]<10){
            
        
            console.log("==================")
            console.log("Id: ", i["id"]);
            console.log("Name: ", i["name"]);
            console.log("Category: ", i["category"]);
            console.log("Price: ", i["price"]);
            console.log("quantityInStock: ", i["quantityInStock"]);
            console.log("supplierId: ", i["supplierId"]);
            console.log("==================")
            

        }
    }
}

function restockProduct(id, quantity){
  for(let i of json[0]["products"]){
    if(i["id"]===id){
        i["quantityInStock"]+=quantity
       
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
            addProduct(product)
           
            
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
                updateProduct(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion de la categoria: ")
                updateProduct(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===3){
                newDetails=prompt("ingrese la nueva actualizacion del precio: ")
                updateProduct(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===4){
                newDetails=prompt("ingrese la nueva actualizacion de la cantidad : ")
                updateProduct(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===5){
                newDetails=prompt("ingrese la nueva actualizacion de la id del proveedor : ") 
                updateProduct(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===6){
                console.log("Regresando, un momento...")
                viewProducts()
            }
            
          
        }
        if(elije===4){
            console.clear()
            console.log("=========UPDATE PRODUCT===========");
            console.log("")
            let id=parseInt(prompt("ingrese la id del producto que vas a eliminar: "))
            deleteProduct(id)
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
            addSupplier(supplier)
            
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
                updateSupplier(id,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion del numero de telefono: ")
                newDetails=prompt("ingrese la nueva actualizacion del numero de email: ")
                newDetails=prompt("ingrese la nueva actualizacion del numero de address: ")
                updateSupplier(id,newDetails)
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
            deleteSupplier(id)
            console.log("se ha realizado la eliminacion con exito!!");
          

            
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
          
            let order=[]
            console.log("=========ADD ORDER===========");
            let orderid=parseInt(prompt("ingrese una id para la orden: "))
            let productid=parseInt(prompt("ingrese la id del producto que quiere: "))
            let quantity1=parseInt(prompt("ingrese la cantidad que va a comprar: "))
            let date= new Date()
            let fechaactual= date.toLocaleDateString('en-CA')
            let status=prompt("ingrese el status de la orden: ")
            order.push([{"orderId":orderid,"productId":productid,"quantity":quantity1,"orderDate":fechaactual,"status":status}])
            addOrder(order)
          
           
            
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
            let orderId=parseInt(prompt("ingrese la id del producto donde va a actualizar: "))
            updateOrder(orderId)
            menuactualizar3()
            let eli=parseInt(prompt("ingresa la opcion donde vas a actualizar: "))
            if(eli===1){
                newDetails=prompt("ingrese la nueva actualizacion de la cantidad: ")
                updateOrder(orderId,newDetails)
                console.log("se ha realizado su actualizacion con exito!!")
            }
            if(eli===2){
                newDetails=prompt("ingrese la nueva actualizacion del status: ")
                updateOrder(orderId,newDetails)
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
            deleteOrder(orderId)
            console.log("se ha realizado la eliminacion con exito!!");
            console.log(json);

            
        }
        if(elije===5){
            console.log("Regresando...")
        }

    }
    if(opc===4){
        console.clear()
        console.log("========STOCK==========");
        console.log("")
        let mostrar=parseInt(prompt(":::::MENU::::\n1.returns products with low stock\n2.increases the stock level of a product\ningrese el numero de la opcion a la que desea acceder: "))
        if(mostrar===1){
            console.clear()
            console.log("======== returns products with low stock==========");
            console.log("")
            checkStockLevels()
        }
        if(mostrar===2){
            let id=parseInt(prompt("ingrese la id del producto donde va a actualizar: "))
            restockProduct( id)
            quantity=parseInt(prompt("ingrese la cantidad: "))
            restockProduct( id,quantity)
            viewProducts()
            console.log("se ha realizado su actualizacion con exito!!")
            
            
        }
    }
    if(opc===5){
        console.clear()
        console.log("========REPORTING==========");
        console.log("")
        let mostrar=parseInt(prompt(":::::MENU::::\n1.Sales reports\n2.Reports products\ningrese el numero de la opcion a la que desea acceder: "))
        if(mostrar===1){
            console.clear()
            console.log("======== SALES REPORTS==========");
            console.log("")
            startDate=prompt("ingrese la fecha (yyyy-mm-dd")
            endDate=prompt("ingrese la fecha (yyyy-mm-dd")
            generateSalesReport(startDate, endDate)
           
            let mostrar=parseInt(prompt(":::::MENU::::\n1.Diario\n2.Mensual\ningrese el numero de la opcion a la que desea acceder: "))
            if(mostrar===1){
                console.clear()
                console.log("======== SALES REPORTS (Diarios)==========");
                console.log("")
                let date= new Date()
                let startDate= date.toLocaleDateString('en-CA')
                
                let date1= new Date()
                let  endDate= date1.toLocaleDateString('en-CA')
              
                
                generateSalesReport(startDate, endDate)

            }
            if(mostrar===2){
                console.clear()
                console.log("======== SALES REPORTS (Mensuales)==========");
                console.log("")
                startDate=prompt("ingrese la fecha inicial")
                endDate=prompt("ingrese la fecha final")
                generateSalesReport(startDate, endDate)
            }
            

        }
        if(mostrar===2){
            console.clear()
            console.log("========REPORTS PRODUCTS==========");
            console.log("")
            generateInventoryReport()
            
        }
        
    }
    if(opc===6){ 
        console.clear()
        console.log("========SEARCH===========");
        console.log("")
        let mostrar=parseInt(prompt(":::::MENU::::\n1.search product\n2.search orders\ningrese el numero de la opcion a la que desea acceder: "))
        if(mostrar===1){
            buclesito1=true
            while(buclesito1===true){
                menuserch()
                let opci=parseInt(prompt("por cual  opcion desea buscar: "))
                if (opci===1){
                    let query=prompt("ingrese el nombre del que busca: ")
                    searchProducts(query)
                }
                if (opci===2){
                    let query=prompt("ingrese la categoria  del que busca: ")
                    searchProducts(query)
                }
                if (opci===3){
                    let query=parseInt(prompt("ingrese la id del proovedor del que busca: "))
                    searchProducts(query)
                }
                if (opci===4){
                    console.log("Regresando...");
                    buclesito1=false 
                    bool=true

                }
            }  
            buclesito1=false
        }
        if(mostrar===2){
            buclesito2=true
            while(buclesito2===true){
                menuserch1()
                let opci=parseInt(prompt("por cual  opcion desea buscar: "))
                if (opci===1){
                    let criteria=prompt("ingrese el status del que busca: ")
                    filterOrders(criteria)
                }
                if (opci===2){
                    let criteria=prompt("ingrese la fecha  del que busca: ")
                    filterOrders(criteria)
                }
                if (opci===3){
                    let criteria=parseInt(prompt("ingrese la id del producto del que busca: "))
                    filterOrders(criteria)
                }
                if (opci===4){
                    console.log("Regresando...")
                    menu()
                    var opc=parseInt(prompt("ingrese la opcion a la que deseas acceder: "))
                    bool=true
                }
                buclesito2=false
            }
        }  
    }
    if(opc===7){
        console.log("Finalizando programa...")
        bool=false
    }
    bool=false
}
