document.getElementById("presionar").addEventListener("click",event1)
function event1(){
    let idecita=document.getElementById("obtenerid").value;
    fetch(`https://swapi.py4e.com/api/people/`+idecita)
    .then(res=>res.json())
        .then(data=>{
            otraid=data
            document.getElementById("mostrar").innerHTML = ""
            document.getElementById("mostrar").innerHTML = `
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
                        
                           Name:  ${data.homeworld}<br>
                            ${data.homeworld}
                        </li>
                        
                    </ul>
                </td>
                </tr>
            </tbody>
            `
            
           
            
        })
};
