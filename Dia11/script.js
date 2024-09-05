url="https://randomuser.me/api/"
fetch(url)
.then(ren=>ren.json())
.then(data=>{
    console.log(data);
    document.getElementById("circulo").innerHTML+=`
      <img id="imgperfil" src="${data.results[0].picture.large}">
    `
    document.getElementById("container").innerHTML+=`
        <p id="hi">Hi, My name is </p>
        <p id="name">
            ${data.results[0].name.title}
            ${data.results[0].name.first}
            ${data.results[0].name.last}
        </p>
    `
    
})