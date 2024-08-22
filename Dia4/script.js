var info=[
    {   
        "informacion_personal": {
            "id":1,
            "nombre": "Juan Pérez",
            "edad": 30,
            "direccion": {
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
    console.log("2. HISTORIAL EDCATIVO");
    console.log("3. EXPERINECIA LABORAL");
    console.log("4. SALIR");
    console.log("-------------------------------------------")
}
menu()
function menuinfop(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR DATOS");
    console.log("2. ACTUALIZAR DATOS");
    console.log("3. ELIMINAR DATOS");
    console.log("4. VER INFORMACIÖN");
    console.log("5. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuhisedu(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR DATOS");
    console.log("2. ACTUALIZAR DATOS");
    console.log("3. ELIMINAR DATOS");
    console.log("4. VER INFORMACIÖN");
    console.log("5. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuverinfo(){
    console.log("-------------------MENU--------------------")
    console.log("1. AGREGAR DATOS");
    console.log("2. ACTUALIZAR DATOS");
    console.log("3. ELIMINAR DATOS");
    console.log("4. VER INFORMACIÖN");
    console.log("5. VOLVER AL MENU PRINCIPAL");
    console.log("-------------------------------------------")
}
function menuopci(){
    console.log("-------------------MENU--------------------")
    console.log("1. Nombre");
    console.log("2. Edad");
    console.log("3. Direccion");
    console.log("4. Contacto");
    console.log("5. Volver al menu principal");
    console.log("-------------------------------------------")
}

let bool=true
while(bool===true){
    let opc=parseInt(prompt("ingresa la opcion a la que deseas acceder: "))

    if(opc===1){
        
        console.clear()
        console.log("------------INFORMACION PERSONAL------------")
        console.log("")
        menuinfop()

        let opci=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
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
            info.push({ "id":id, "nombre":name, "edad":old, "direccion":{"calle":calle, "numero":numero,"ciudad":ciudad},"contacto": {"correo":correo,"telefono": telefono}})
            console.log("Se ha creado con exito!");
            
        }
        if(opci===2){
            console.clear()
            console.log("===== ACTUALIZAR DATOS =====");
            console.log("");
            let pedirid=prompt("ingrese la id a la que quiere acceder:")
            var comparador=info[0]["informacion_personal"]["id"]
            if(comparador===pedirid){
                console.log("hola")
                menuopci()
                let opcio=parseInt(prompt("ingrese el numero de opcion a la que desea acceder: "))
                if(opcio===1){
                    let newname=prompt("ingrese el nuevo nombre")
                    info["informacion_personal"][pedirid-1]["nombre"]=newname
                    console.log("nombre",m.nombre);
                    

                    
                }

    
            }
            
            

        }
    }
    bool=false
}








