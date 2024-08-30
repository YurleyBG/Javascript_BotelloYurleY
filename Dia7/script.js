document.getElementById("presionar").addEventListener("click",function(event1){
    event1.preventDefault();
    let info=""
    for (let i=1 ; i<733; i++){
        info=`https://superheroapi.com/api.php/f70bcb6027e4b5f0b15e639ae7a2d273/`+String(i);
        
        fetch(info)
        .then(res=>res.json())
        .then(data=>{
            obtener=data.id
            let idecita=document.getElementById("obtenerid").value;
            if(idecita>732){
                alert("Esta id no existe escoge una entre el rango (1 a 732)")
            }
            if (idecita==obtener){
                function addtable(){
                    document.querySelector("#tablaconte tbody").innerHTML=""
                    const tablaconte=document.querySelector("#tablaconte tbody");
                    const guardar=document.createElement("tr");
                    guardar.innerHTML=`
                    <td> ${data.response} </td>
                    <td>${data.id} </td>
                    <td>  ${data.name}</td>
                    <td>
                        intelligence:${data.powerstats.intelligence}<br>
                        strength:${data.powerstats.strength}<br>
                        pspeed:${data.powerstats.speed}<br>
                        durability:${data.powerstats.durability}<br>
                        power: ${data.powerstats.power}<br>
                        combat: ${data.powerstats.combat} 
                    </td>
                    <td> 
                        full-name: ${data.biography["full-name"]}<br>
                        alter-egos: ${data.biography["alter-egos"]}<br>
                        aliases: ${data.biography.aliases} <br>
                        place-of-birth: ${data.biography["place-of-birth"]}<br>
                        first-appearance: ${data.biography["first-appearance"]}<br>
                        publisher: ${data.biography.publisher}<br>
                        alignment: ${data.biography.alignment}<br>
                    </td>
                    <td>
                       <span style="color: rgb(189, 146, 230)">race:</span> ${data.appearance.race}<br>
                        <span style="color:blue">height:</span>${data.appearance.height}<br>
                        <span style="color:blue"> weight:</span> ${data.appearance.weight}<br>
                        <span style="color:blue">eye-color: </span>${data.appearance["eye-color"]}<br>
                        <span style="color:blue">hair-color:</span> ${data.appearance["hair-color"]}<br>
                    </td>
                    
                    `;
                    tablaconte.appendChild(guardar)
                }
                addtable()
                function addtable1(){
                    document.querySelector("#tablaconte1 tbody").innerHTML=""
                    const tablaconte1=document.querySelector("#tablaconte1 tbody");
                    const guardar1=document.createElement("tr");
                    guardar1.innerHTML=`
                    <td>
                        occupation: ${data.work.occupation} <br>
                        base: ${data.work.base}<br>
                    </td>
                    <td>
                        group-affiliation: ${data.connections["group-affiliation"]}<br>
                        relatives: ${data.connections.relatives}<br>
                    </td>
                    <td>
                        <img style=" width:20vw; height:15vw " src= '${data.image["url"]}'>
                    </td>
                    
                    `;
                    tablaconte1.appendChild(guardar1)
                }
                addtable1()
            }
        })
        
    }
})

