document.getElementById("formu").addEventListener("submit",obtener_id)
document.getElementById("formu").addEventListener("submit",function(e){
    e.preventDefault();
})
function obtener_id(){
    let idecita = document.getElementById("id").value;
    buscar(idecita)
}
function buscar(idecita){
    let link = "https://rickandmortyapi.com/api/character/"+idecita;
    fetch(link)
    .then(res => res.json())
    .then(data =>{
        document.getElementById("mostrar").innerHTML = ""
        document.getElementById("mostrar").innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${idecita} - ${data.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Status</strong> ${data.status}</li>
                        <li class="list-group-item"><strong>Species</strong> ${data.species}</li>
                        <li class="list-group-item"><strong>Type</strong> ${data.type}</li>
                        <li class="list-group-item"><strong>Gender</strong> ${data.gender}</li>
                        <li class="list-group-item"><strong>Origin:</strong><br><strong>------ Name</strong> ${data.origin.name}<br><strong>------ url</strong> ${data.origin.url}</li>
                        <li class="list-group-item"><strong>Location:</strong><br><strong>------ Name</strong> ${data.location.name}<br><strong>------ url</strong> ${data.location.url}</li>
                        <li class="list-group-item"><strong>Url</strong> ${data.url}</li>
                        <li class="list-group-item"><strong>Created</strong> ${data.created}</li>
                    </ul>
                </div>
                <div id="carouselExample" class="carousel slide" style="margin-left: 10rem;">
                <div class="carousel-inner" id="episodesss">
                    <div class="carousel-item active" style="width: 50rem;">
                    <img src="${data.image}" style="width: 30rem; margin-left: 10rem; margin-top:6rem" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span id="flecha"><</span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span id="flecha">></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        `
        let clase = 0;
        for (const i of data.episode){
            fetch(i)
            .then(res => res.json())
            .then(episodesss =>{
                clase+=1;
                let idd = "mostrar"+clase;
                document.getElementById("episodesss").innerHTML += `
                <div class="carousel-item" style="width: 50rem;">
                <table class="table" style="width: 30rem; margin-left: 10rem; margin-top:6rem"">
                    <tbody>
                        <tr class="table-dark">
                            <th scope="row">espisodio:</th>
                            <td> ${episodesss.idecita}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">Name:</th>
                            <td> ${episodesss.name}</td>
                        </tr>
                        <tr class="table-dark"">
                            <th scope="row">air_date:</th>
                            <td> ${episodesss.air_date}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">personajes:</th>
                            <td>
                                <ul id=${idd} class="list-group">
                                 
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                `
                for (let l=0; l<5; l++){
                    fetch(episodesss.characters[l])
                    .then(res => res.json())
                    .then(personjessss11 =>{
                        document.getElementById(idd).innerHTML+=`
                        <li class="list-group-item">
                            <img id="imagenes" src="${personjessss11.image}" alt=""> ${personjessss11.name}
                        </li>
                        `
                    })
                }
            })
        }
    })
}