document.getElementById("inputingre").addEventListener("input",event1)
function event1(){
    let idecita=document.getElementById("inputingre").value;
    let url="https://pokeapi.co/api/v2/pokemon/"+idecita;
    verinfo(url)
}
function verinfo(url) {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

        paso1=data.sprites.other.showdown.front_default
        name1=data.name
        ide=data.id
        document.getElementById("mostrar").innerHTML =""
        document.getElementById("mostrar").innerHTML += `
            <img src="${paso1}"> 
        `
        document.getElementById("mostrar1").innerHTML =""
        document.getElementById("mostrar1").innerHTML += `
            ${ide}
            ${name1}
        `
            

      
       
       
        
    })
}