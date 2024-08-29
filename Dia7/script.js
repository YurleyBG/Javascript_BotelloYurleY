document.getElementById("presionar").addEventListener("submit",function(view){
    view.preventDefault();
    fetch("https://superheroapi.com/api.php/f70bcb6027e4b5f0b15e639ae7a2d273/Intelligence")
    .then(res=>res.json())
    .then(datos=>{
        console.log(datos)
        for(i of datos){
            let iddd=document.getElementById("obtenerid").value;
            if( iddd==s){
                console.log("hola")
            }
        }
    })
});