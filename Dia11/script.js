url="https://randomuser.me/api/"  //guarda la api
fetch(url)
.then(ren=>ren.json())
.then(data=>{//se guardan los datos de la api en un json que se almacenara en la variable data
    //se importara la imagen y se llamara el div que tenemos en html para la foto de igual forma con los otros datos
    let fechaordenada=new Date(data.results[0].dob.date).toLocaleDateString()
    document.getElementById("circulo").innerHTML+=` 
      <img id="imgperfil" src="${data.results[0].picture.large}">
    `
    document.getElementById("mostrartext").innerHTML+=`
        <p id="hi"> Hi, My name is </p>
        <p id="name">
            ${data.results[0].name.title}
            ${data.results[0].name.first}
            ${data.results[0].name.last}
        </p>
    `
    document.getElementById("mostrarcorreo").innerHTML+=`
        <p id="hi"> Hi, My address email is </p>
        <p id="name">
            ${data.results[0].email}
        </p>
    `
    document.getElementById("mostrarnaci").innerHTML+=`
        <p id="hi"> Hi, My birthday is </p>
        <p id="name">
            ${fechaordenada}
        </p>
    `
    document.getElementById("mostrardire").innerHTML+=`
        <p id="hi"> Hi, My address is </p>
        <p id="name">
            ${data.results[0].location.street.number}
            ${data.results[0].location.street.name}
        </p>
    `
    document.getElementById("mostrartele").innerHTML+=`
        <p id="hi"> Hi, My phone is </p>
        <p id="name">
            ${data.results[0].phone}
        </p>
    `
    document.getElementById("mostrarpass").innerHTML+=`
        <p id="hi"> Hi, My password is </p>
        <p id="name">
            ${data.results[0].login.password}
        </p>
    `
})
// estos nos permite mostrar por cada dato de la informacion requeridad información.
// utilizamos el mouseover para  que cuando el cursor se encuentre en la imagen se cumpla lo de la función.
document.getElementById("div1").addEventListener("mouseover",event00)
function event00(){
    eso=document.getElementById("mostrartext");
    eso.style="display:flex";
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:none"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:none"
    dire=document.getElementById("mostrardire")
    dire.style="display:none"
    phone=document.getElementById("mostrartele")
    phone.style="display:none"
    password=document.getElementById("mostrarpass")
    password.style="display:none"
    
}
document.getElementById("div2").addEventListener("mouseover",event0)
function event0(){
    eso=document.getElementById("mostrartext")
    eso.style="display:none"
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:flex"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:none"
    dire=document.getElementById("mostrardire")
    dire.style="display:none"
    phone=document.getElementById("mostrartele")
    phone.style="display:none"
    password=document.getElementById("mostrarpass")
    password.style="display:none"
 
}
document.getElementById("div3").addEventListener("mouseover",event1)
function event1(){
    eso=document.getElementById("mostrartext")
    eso.style="display:none"
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:none"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:flex"
    dire=document.getElementById("mostrardire")
    dire.style="display:none"
    phone=document.getElementById("mostrartele")
    phone.style="display:none"
    password=document.getElementById("mostrarpass")
    password.style="display:none"
 
}
document.getElementById("div4").addEventListener("mouseover",event2)
function event2(){
    eso=document.getElementById("mostrartext")
    eso.style="display:none"
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:none"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:none"
    dire=document.getElementById("mostrardire")
    dire.style="display:flex"
    phone=document.getElementById("mostrartele")
    phone.style="display:none"
    password=document.getElementById("mostrarpass")
    password.style="display:none"
}
document.getElementById("div5").addEventListener("mouseover",event3)
function event3(){
    eso=document.getElementById("mostrartext")
    eso.style="display:none"
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:none"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:none"
    dire=document.getElementById("mostrardire")
    dire.style="display:none"
    phone=document.getElementById("mostrartele")
    phone.style="display:flex"
    password=document.getElementById("mostrarpass")
    password.style="display:none"
 
}
document.getElementById("div6").addEventListener("mouseover",event4)
function event4(){
    eso=document.getElementById("mostrartext")
    eso.style="display:none"
    correo=document.getElementById("mostrarcorreo")
    correo.style="display:none"
    fnaci=document.getElementById("mostrarnaci")
    fnaci.style="display:none"
    dire=document.getElementById("mostrardire")
    dire.style="display:none"
    phone=document.getElementById("mostrartele")
    phone.style="display:none"
    password=document.getElementById("mostrarpass")
    password.style="display:flex"
}
// esta sesión nos permite controlar las transiciones de los icons para que se queden en la ultima posición.
// y llamamos los otros icons para que al tocar el siguiente el otro vuelva a su posicion original.
let icons1=document.getElementById("div1");
icons1.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons2.style=`backgroundPositionY:-6.5`
    icons3.style=`backgroundPositionY:-6.5`
    icons4.style=`backgroundPositionY:-6.5`
    icons5.style=`backgroundPositionY:-6.5`
    icons6.style=`backgroundPositionY:-6.5`


})
let icons2=document.getElementById("div2");
icons2.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons1.style=`backgroundPositionY:-6.5`
    icons3.style=`backgroundPositionY:-6.5`
    icons4.style=`backgroundPositionY:-6.5`
    icons5.style=`backgroundPositionY:-6.5`
    icons6.style=`backgroundPositionY:-6.5`

})
let icons3=document.getElementById("div3");
icons3.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons1.style=`backgroundPositionY:-6.5`
    icons2.style=`backgroundPositionY:-6.5`
    icons4.style=`backgroundPositionY:-6.5`
    icons5.style=`backgroundPositionY:-6.5`
    icons6.style=`backgroundPositionY:-6.5`
})
let icons4=document.getElementById("div4");
icons4.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons1.style=`backgroundPositionY:-6.5`
    icons2.style=`backgroundPositionY:-6.5`
    icons3.style=`backgroundPositionY:-6.5`
    icons5.style=`backgroundPositionY:-6.5`
    icons6.style=`backgroundPositionY:-6.5`

})
let icons5=document.getElementById("div5");
icons5.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons1.style=`backgroundPositionY:-6.5`
    icons2.style=`backgroundPositionY:-6.5`
    icons3.style=`backgroundPositionY:-6.5`
    icons4.style=`backgroundPositionY:-6.5`
    icons6.style=`backgroundPositionY:-6.5`

})
let icons6=document.getElementById("div6");
icons6.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundPositionY=`0vw`
    icons1.style=`backgroundPositionY:-6.5`
    icons2.style=`backgroundPositionY:-6.5`
    icons3.style=`backgroundPositionY:-6.5`
    icons4.style=`backgroundPositionY:-6.5`
    icons5.style=`backgroundPositionY:-6.5`
})

//desarrollado por yurley botello