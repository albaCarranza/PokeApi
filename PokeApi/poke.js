
async function getPokemon()
{   

    let name = document.getElementById('pokemon').value.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    try
    {
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        console.log(data);
        let namePokemon= document.getElementById("namePokemon")
        let abilities=document.getElementById("pokemonAbilitie")
        let imagen=document.getElementById("foto_pokemon")
        
        namePokemon.innerHTML = `<h1>${result.name.toUpperCase()}</h1>`
        imagen.innerHTML = `<img src = "${result.sprites.other.home.front_default}"></img>`
        abilities.innerHTML = '';

        for(let i = 0; result.abilities.length; i++){
            abilities.innerHTML += ('<tr>')
            abilities.innerHTML += (`<td>${result.abilities[i].ability.name}`)
            abilities.innerHTML += ('</tr>')

        }
    
    

    }

    catch(error)
    {
        console.log(error)
    }
}



// export const api_pokemon="https://pokeapi.co/api/v2/pokemon/"
