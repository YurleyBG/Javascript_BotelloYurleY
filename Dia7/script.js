document.getElementById("presionar").addEventListener("click",function(event1){
    event1.preventDefault();
    let info=""
    for (let i=1 ; i<732; i++){
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
                       race: ${data.appearance.race}<br>
                       height: ${data.appearance.height}<br>
                        weight: ${data.appearance.weight}<br>
                       eye-color: ${data.appearance["eye-color"]}<br>
                       hair-color: ${data.appearance["hair-color"]}<br>
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
                        url: ${data.image["url"]}<br>
                        
                    </td>
                    
                    `;
                    tablaconte1.appendChild(guardar1)
                }
                addtable1()
            }
        })
        
    }
})

