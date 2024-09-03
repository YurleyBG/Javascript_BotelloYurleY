document.getElementById("inputingre").addEventListener("input",event1)
function event1(){
    let idecita=document.getElementById("inputingre").value;
    let url="https://pokeapi.co/api/v2/pokemon/"+idecita;//entrar al link principal de la API
    verinfo(url)
}
function verinfo(url) {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

        let paso1=data.sprites.other.showdown.front_default//entrar en la api en busca del gift
        let name1=data.name
    
        let ide=data.id
        document.getElementById("mostrar").innerHTML =""//mostrar gift
        document.getElementById("mostrar").innerHTML += `
            <img src="${paso1}" style="width:6vw; height:6vw">
            <audio autoplay src="${data.cries.latest}" ></audio>
        `
        document.getElementById("mostrar1").innerHTML =""//mostrar nombre y id
        document.getElementById("mostrar1").innerHTML += `
           <span style="color:rgb(136, 131, 131)"> ${ide}-</span>
           <span style="color:black">${name1}</span>
        `
       
    })
}
document.getElementById("prew").addEventListener("click",event2)//boton de prew
function event2(){
    let idecita=document.getElementById("inputingre").value;
    let restarid= idecita-1;
    document.getElementById("inputingre").value=restarid
    let url="https://pokeapi.co/api/v2/pokemon/"+restarid;
    verinfo(url)

}
document.getElementById("Next").addEventListener("click",event3)//boton de next
function event3(){
    
    let idecita=document.getElementById("inputingre").value;
    let sumarid=parseInt(idecita)
    let obte=sumarid+1
    nume=obte.toString()
    document.getElementById("inputingre").value=nume;
    let url="https://pokeapi.co/api/v2/pokemon/"+nume;
    verinfo(url)
}
document.getElementById("inputingre").addEventListener("input",event4)//buscar la id del nombre ingresado
function event4(){
    let idecita=document.getElementById("inputingre").value;
    let url="https://pokeapi.co/api/v2/pokemon/"+idecita;
    verinfo1(url)
}
function verinfo1(url2) {
    fetch(url2)
    .then(res=>res.json())
    .then(datas=>{
        let idecita=document.getElementById("inputingre").value;
        if(datas.name==idecita){
            esto=datas.id
            document.getElementById("inputingre").value=esto;
        } 
    })
}
