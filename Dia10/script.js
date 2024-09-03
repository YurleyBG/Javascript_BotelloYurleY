document.getElementById("presionar").addEventListener("click",event1)
function event1(){

    let idecita=document.getElementById("obtenerid").value;
    info=`https://rickandmortyapi.com/api/character/`+idecita;  
    fetch(info)
    .then(res=>res.json())
    .then(data=>{
        let episodios=data.episode
        episodios.forEach(i => {
            fetch(i)
            .then (ten3=>ten3.json())
            .then(episode11=>{
                var episodesss=document.getElementById("episodios");
                episodesss.innerHTML+=`
                    <div id="episi">  
                        <hr>
                            name: ${episode11.name}<br>
                            air_date: ${episode11.air_date}<br>
                            episode: ${episode11.episode}<br> 
                        <hr>
                    </div> 
                   
            
                        
                `
                let personajes=episode11.characters
                console.log(personajes)
                personajes.forEach(e => {
                    fetch(e)
                    .then (ten3=>ten3.json())
                    .then(peque=>{
                        var personajecio=document.getElementById("personajes");
                        personajecio.innerHTML+=`
                         <div id="perso" >  
                            <hr >
                                ${peque.name}<br>
                                <img id="img2"src="${peque.image}">
                                
                            <hr>
                        </div> 
        
                        `
                        
                    }) 
                })
            })
            
            
        })
    
    
        document.getElementById("mostrar").innerHTML += `
           <div id="nombrep" >  ${data.name}<br></div> 
            <img  id="imagep" class="card" src="${data.image}">
            <div id="episodios">   </div> 
            <div id="personajes">   </div> 
        
        

        `
    })
    
    
}
  

