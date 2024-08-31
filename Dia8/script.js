document.getElementById("presionar").addEventListener("click",event1)
function event1(){
    let idecita=document.getElementById("obtenerid").value;
    fetch(`https://swapi.py4e.com/api/people/`+idecita)
    .then(res=>res.json())
    .then(data=>{
        fetch(`https://swapi.py4e.com/api/planets/`+idecita)
        .then(ress=>ress.json())
        .then(datas=>{
            let searchpeli=data.films
            searchpeli.forEach((element)=>{
                fetch(element)
                .then (ten=>ten.json())
                .then(datos=>{   
                    let searchspe=data.species
                    searchspe.forEach((speciess)=>{
                        fetch(speciess)
                        .then (ten=>ten.json())
                        .then(speacies1=>{
                            document.getElementById("mostrar").innerHTML = ""
                            document.getElementById("mostrar").innerHTML += `
                            <table  class="table table-dark table-hover">
                                <tbody>
                                    <tr>
                                    <th scope="row">Name:</th>
                                    <td>${data.name}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Height:</th>
                                    <td>${data.height}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Mass:</th>
                                    <td colspan="2"> ${data.mass}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Hair_color:</th>
                                    <td>${data.hair_color}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Skin_color:</th>
                                    <td>${data.skin_color}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Eye_color:</th>
                                    <td colspan="2"> ${data.eye_color}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Birth_year: </th>
                                    <td>${data.birth_year}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Gender:</th>
                                    <td>${data.gender}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Homeworld:</th>
                                    <td>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                
                                                Name: ${datas.name}<br>
                                                Rotation_period: ${datas.rotation_period}<br>
                                                orbital_period: ${datas.orbital_period}<br>
                                                diameter: ${datas.diameter}<br>
                                                climate: ${datas.climate}<br>
                                                gravity: ${datas.gravity}<br>
                                                terrain: ${datas.terrain}<br>
                                                surface_water: ${datas.surface_water}<br>
                                                population: ${datas.population}<br>
                                                created: ${datas.created}<br>
                                                edited: ${datas.edited}<br>
                                                url: ${datas.url}<br>
                                            </li>
                                            
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Films:</th>
                                    <td>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                Name: ${datos.title}<br>
                                                episode_id: ${datos.episode_id}<br>
                                                opening_crawl: ${datos.opening_crawl}<br>
                                                director: ${datos.director}<br>
                                                producer: ${datos.producer}<br>
                                                release_date: ${datos.release_date}<br>
                                                created: ${datos.created}<br>
                                                edited: ${datos.edited}<br>
                                                url: ${datos.url}<br>
                                            </li>
                                            
                                        </ul>
                                    
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">species:</th>
                                    <td>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                Name: ${speacies1.name}<br>
                                                classification: ${speacies1.classification}<br>
                                                designation: ${speacies1.designation}<br>
                                                average_height: ${speacies1.average_height}<br>
                                                skin_colors: ${speacies1.skin_colors}<br>
                                                hair_colors: ${speacies1.hair_colors}<br>
                                                eye_colors: ${speacies1.eye_colors}<br>
                                                average_lifespan: ${speacies1.average_lifespan}<br>
                                                language: ${speacies1.language}<br>
                                                created: ${speacies1.created}<br>
                                                edited: ${speacies1.edited}<br>
                                                url: ${speacies1.url}<br>
                                            
                                            </li>
                                            
                                        </ul>
                                    </td>
                                    </tr>
                                </tbody> 
                            </table>
                            `   
                        })   
                    })     
                })
            })  
        })  
    })
};



                            