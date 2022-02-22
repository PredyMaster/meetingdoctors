import React, { useState, useEffect} from "react";
import callApi from "./components/callApi";

function intentoApiPokemon() {
  const [pokemons, setPokemons] = useState([]);

  let prueba = "yeah";

  useEffect( () => {
    //callApi().then(pokes => setPokemons(pokes));

    setPokemons(callApi())
  }, [])

  return (
    <div>
      <p>Lista Pok</p>
      <ul>

        {prueba}
        
        {pokemons.map(pokes => console.log(pokes))}

        {/* {
          pokemons.map( (pokes, num) => { 
            return pokes;            
          })
        } */}
        
      </ul>
      
    </div>
  );
}

export default intentoApiPokemon;