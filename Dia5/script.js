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
function menuserch(){
    console.log("-------------------MENU--------------------")
    console.log("1. name");
    console.log("2. category");
    console.log("3. supplier");
    console.log("4. exit"); 
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
bool=true
while(bool===true){
    menu()
    var opc=parseInt(prompt("ingrese la opcion a la que deseas acceder: "))
    if(opc===6){
        console.clear()
        console.log("========SEARCH===========");
        console.log("")
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
            
            
        }


        
      
       
    }
    bool=false
}
