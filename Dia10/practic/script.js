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
                   <table class="table">
                    <tbody>
                        <tr class="table-dark">
                            <th scope="row">Episode:</th>
                            <td> ${episode11.id}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">Name:</th>
                            <td> ${episode11.name}</td>
                        </tr>
                        <tr class="table-dark"">
                            <th scope="row">air_date:</th>
                            <td> ${episode11.air_date}</td>
                        </tr>
                        <tr class="table-dark"">
                            <th scope="row">air_date:</th>
                            <td> ${person.name}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">personajes:</th>
                            <td>
                                <ul id=${idd} class="list-group">
                                   <div id="personajes">   </div> 
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>     
                `
                let personajes=episode11.characters
                personajes.forEach(e => {
                    for (let z=0; z<5; z++){
                        fetch(e)
                        .then (ten3=>ten3.json())
                        .then(peque=>{
                            var personajecio=document.getElementById("personajes");
                            personajecio.innerHTML+=`
                              
                                <li class="list-group-item">
                                    <img id="imagenes" src="${peque.image}" alt=""> ${peque.name}
                                </li>
                            `
                        }) 
                    }
                        

                        
                   
                })
            })
            
            
        })
        document.getElementById("mostrar").innerHTML=""
        document.getElementById("mostrar").innerHTML += `
           
            <table class="table">
            <tbody>
                <tr>
                <div class="card" style="width: 18.1rem;">
                    <img src="${data.image}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${data.id}-${data.name}</h5>
                    </div>
                     <ul class="list-group list-group-flush" style="width: 18rem;">
                        <li class="list-group-item"><strong>Status: </strong> ${data.status}</li>
                        <li class="list-group-item"><strong>Species: </strong> ${data.species}</li>
                        <li class="list-group-item"><strong>Type: </strong> ${data.type}</li>
                        <li class="list-group-item"><strong>Gender: </strong> ${data.gender}</li>
                        <li class="list-group-item"><strong>Origin:</strong><br>
                        <strong>Name:</strong> ${data.origin.name}<br>
                        <strong>--- Url: </strong> ${data.origin.url}</li>
                        <li class="list-group-item"><strong>Location:</strong><br>
                        <strong> --- Name: </strong> ${data.location.name}<br>
                        <strong>--- Url:</strong> ${data.location.url}</li>
                        <li class="list-group-item"><strong>Url: </strong> ${data.url}</li>
                        <li class="list-group-item"><strong>Created: </strong> ${data.created}</li>
                    </ul>
                    
                </div>
                </tr>
            </tbody>
            </table>
            <div id="episodios"> </div> 
          
        
        

        `
    })
    
    
}
  

