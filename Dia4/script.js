var info=[
    {   
        "informacion_personal": 
        {
            "id":"1",
            "nombre": "Juan Pérez",
            "edad": 30,
            "direccion":{
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo"
            },
        
            "contacto": {
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
            }
        },
        
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
           
        ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
                

            
        ]
    
    }
    
        
]


function menu(){
    console.log("-------------------MENU--------------------")
    console.log("1. INFORMACION PERSONAL");
    console.log("2. HISTORIAL EDUCATIVO");
    console.log("3. EXPERINECIA LABORAL");
    console.log("4. SALIR");
    console.log("-------------------------------------------")
}
menu()
function menuinfop(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR ");
    console.log("2. ACTUALIZAR DATOS");
    console.log("3. ELIMINAR DATOS");
    console.log("4. VER INFORMACIÖN");
    console.log("5. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuhisedu(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR ");
    console.log("2. VER INFORMACIÖN");
    console.log("3. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuverinfo(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR ");
    console.log("2. VER INFORMACIÖN");
    console.log("3. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuopci(){
    console.log("-------------------MENU--------------------")
    console.log("1. Nombre");
    console.log("2. Edad");
    console.log("3. Direccion");
    console.log("4. telefono");
    console.log("5. correo");
    console.log("6. Volver al menu principal");
    console.log("-------------------------------------------")
}


let bool=true
while(bool===true){
    var opc=parseInt(prompt("ingresa la opcion a la que deseas acceder: "))

    if(opc===1){
        
        console.clear()
        console.log("------------INFORMACION PERSONAL------------")
        console.log("")
        menuinfop()

        var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
        if(opci===1){
            console.log("===== AGREGAR DATOS =====");
            let id=prompt("ingrese la id: ")
            let name=prompt("ingrese el nombre: ")
            let old=parseInt(prompt("ingresa la edad :"))
            let calle=prompt(" ingresa la calle: ")
            let numero=prompt("ingresa el numero de la calle")
            let ciudad=prompt("ingresa la ciudad")
            let telefono=prompt(" ingresa el numero de telefono:")
            let correo=prompt("ingresa tu correo :")
            info[0]["informacion_personal"].push({ "id":id, "nombre":name, "edad":old, "direccion":{"calle":calle, "numero":numero,"ciudad":ciudad},"contacto": {"correo":correo,"telefono": telefono}})
            console.log("Se ha creado con exito!");

            console.log("")
            console.log("Volviendo al menu principal...");
            menuinfop()
            var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
            
        }
        if(opci===2){
            console.clear()
            console.log("===== ACTUALIZAR DATOS =====");
            console.log("");
           // var comparador=info["informacion_personal"]["id"]
            
            var pedirid=prompt("ingrese la id en la que quiere actualizar datos: ")
            for (let y of info){
                
                if(y.informacion_personal.id===pedirid){
                    console.log("==================")
                    console.log(`Id: ${y.informacion_personal.id}`);
                    console.log(`nombre: ${y.informacion_personal.nombre}`);
                    console.log(`edad: ${y.informacion_personal.edad}`);
                    console.log("==================")
                    console.log("");
                    info["informacion_personal"]={}
                    menuopci()

                    let opcio=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
                    if(opcio===1){
                        newname=prompt("ingrese el nuevo nombre")
                        y.informacion_personal.nombre=newname
                        console.log("Su nombre se ha actualizado con exito!!!") 
                    }
                    if(opcio===2){
                        let newedad=parseInt(prompt("ingrese la edad actual: "))
                    info[0]["informacion_personal"][pedirid-1]["edad"]=newedad
                        console.log("Su nombre se ha actualizado con exito!!!") 
                    }
                    if(opcio===3){
                        let newcall=prompt("ingrese la calle: ")
                        let newnum=prompt("ingrese el numero: ")
                        let newciu=prompt("ingrese la ciudad: ")
                        y.informacion_personal.direccion.calle=newcall
                        y.informacion_personal.direccion.numero=newnum
                        y.informacion_personal.direccion.ciudad=newciu
                        console.log("Su nombre se ha actualizado con exito!!!")  
                    
                        
                    }
                    if(opcio===4){
                        let newconct=prompt("ingrese el nuevo numero de telefono: ")
                        y.informacion_personal.contacto.telefono=newconct
                        console.log("Su nombre se ha actualizado con exito!!!") 
                    }
                    if(opcio===5){
                        let newcorreo=prompt("ingrese el nuevo correo: ")
                        y.informacion_personal.contacto.correo=newcorreo
                        console.log("Su nombre se ha actualizado con exito!!!")
                    }
                    if(opcio===6){
                        console.log("")
                        console.log("Volviendo al menu principal...");
                        menuinfop()
                        var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
                    }
                    
                }
            }
        }
        if(opci===3){
            console.clear()
            console.log("=====ELIMINAR DATOS =====");
            console.log("");
            let pedirid=prompt("ingrese la id del usuario al que desea eliminar(solo conctactos correo y telefono): ")
            for (let y of info){
                if(y.informacion_personal.id===pedirid){
                    console.log("==================")
                    console.log(`Id: ${y.informacion_personal.id}`);
                    console.log(`nombre: ${y.informacion_personal.nombre}`);
                    console.log(`edad: ${y.informacion_personal.edad}`);
                    console.log("==================")
                    console.log("");
                    delete y.informacion_personal.contacto
                   
                    console.log("Se ha realizado con exito!!")
                    console.log("")
                    console.log("Volviendo al menu principal...");
                    menuinfop()
                    var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
                   
                }
                
               
            }
           
        }
        if(opci===4){
            console.clear()
            console.log("===== VER INFORMACION =====");
            console.log("");
            for (const i of info[0]["informacion_personal"]){
                console.log("==================")
                console.log("Id: ", i["id"]);
                console.log("Nombre: ", i["nombre"]);
                console.log("Edad: ", i["edad"]);
                console.log("==================")
                console.log("Direccion: ");
                console.log(`Calle:, ${i["direccion"]["calle"]}`);
                console.log(`Numero:  ${i["direccion"]["numero"]}`);
                console.log(`Ciudad:", ${i["direccion"]["ciudad"]}`);
                console.log("==================")
                console.log("contacto: ");
                console.log(`telefono:", ${i["contacto"]["telefono"]}`);
                console.log(`correo:", ${i["contacto"]["correo"]}`);
                console.log("==================")
                console.log("");  
                
            }
            
        }
        if(opci==5){
            console.clear()
            console.log("Volviendo al menu principal....");
            console.log("");
            bool=true
            menu()
            var opc=parseInt(prompt("ingresa la opcion a la que deseas acceder: "))
            
        }
    }
    if(opc===2){
        
        console.clear()
        console.log("------------HISTORIAL EDUCATIVO-----------")
        console.log("")
        menuhisedu()

        var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
        if(opci===1){
            console.log("===== AGREGAR DATOS =====");
            let idif=prompt("ingrese la id: ")
            let instituto=prompt("ingrese el nombre: ")
            let añois=parseInt(prompt("ingresa la edad :"))
            let añofs=prompt(" ingresa la calle: ")
            let institucion=prompt("ingresa el numero de la calle")
            let titulo=prompt("ingresa la ciudad")
            let añoiu=prompt(" ingresa el numero de telefono:")
            let añofu=prompt("ingresa tu correo :")
            info[0]["historial_educativo"].push({ "id":idif [{"nivel":"Secundaria", "institucion":instituto, "anio_inicio":añois ,"anio_fin":añofs},{"nivel":"universidad", "institucion":institucion,"titulo":titulo, "anio_inicio":añoiu,"anio_fin":añofu}]})
            console.log("Se ha creado con exito!");

            console.log("")
            console.log("Volviendo al menu principal...");
            menuhisedu()
            var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
            
        }
        if(opci===2){
            console.clear()
            console.log("===== VER INFORMACION =====");
            console.log("");
            for (let y of info){
               
                console.log("==================")
                console.log(`Id: ${y.informacion_personal.id}`);
                console.log(`Id: ${y.informacion_personal.nombre}`);
                console.log(`Id: ${y.informacion_personal.edad}`);
                console.log("==================")
                console.log("");
                
            }
            for (let m of info){
                console.log("==================")
                console.log(`nivel: ${m.historial_educativo.nivel}`);
                console.log(`institucion: ${m.historial_educativo.institucion}`);
                console.log(`año_inicio: ${m.historial_educativo.anio_inicio}`);
                console.log(`año_fin ${m.historial_educativo.anio_fin}`);
                console.log("==================")
                console.log("");
            }
            for (let e of info){
                console.log(`nivel:", ${e.experiencia_laboral.nivel}`);
                console.log(`institucion:", ${e.experiencia_laboral.institucion}`);
                console.log(`titulo:", ${e.experiencia_laboral.titulo}`);
                console.log(`año_inicio:", ${e.experiencia_laboral.anio_inicio}`);
                console.log(`año_fin:", ${e.experiencia_laboral.anio_fin}`);
                console.log("==================")
            }
          
          
            
        }
        break
    }
    if(opc===3){
        
        console.clear()
        console.log("------------EXPERIENCIA LABORAL-----------")
        console.log("")
        menuverinfo()

        var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
        if(opci===1){
            console.log("===== AGREGAR DATOS =====");
            let puesto=prompt("ingrese la id: ")
            let empresa=prompt("ingrese el nombre: ")
            let periodo=parseInt(prompt("ingresa la edad :"))
            let responsabilidades=prompt(" ingresa la calle: ")
            info[0]["experiencia_laboral"].push({"puesto":puesto,"empresa":empresa,"periodo":periodo,"responsabilidades":[responsabilidades]})
            console.log("Se ha creado con exito!");

            console.log("")
            console.log("Volviendo al menu principal...");
            menuhisedu()
            var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
            
        }
        if(opci===2){
            console.clear()
            console.log("===== VER INFORMACION =====");
            console.log("");
            for (const i of info[0]["informacion_personal"]){
                console.log("==================")
                console.log("Id: ", i["id"]);
                console.log("nombre: ", i["nombre"]);
                console.log("Edad: ", i["edad"]);
                console.log("==================")
            }   
            for (const u of info[0][""]){
                console.log(`puesto:", ${u["puesto"]}`);
                console.log(`empresa:", ${u["emoresa"]}`);
                console.log(`periodo:", ${u["periodo"]}`);
                console.log(`responsabilidad:", ${u["responsabilidad"]}`);
                console.log("==================") 
            }
           
        }
        console.log("")
        console.log("Volviendo al menu principal...");
        menuhisedu()
        var opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
        bool=true
    }
    if(opc===4){
        
        console.clear()
        console.log("Programa finalizado...")
        console.log("")
        bool=false
    }
    bool=false
}








