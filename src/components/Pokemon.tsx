import React from "react";
import {pokemonList, pokemonSearch} from "../store";
import {useAtom} from "jotai";

const URL = "https://gist.githubusercontent.com/suryavirkapur/fc2eec6db515da77c94ef26e728feddd/raw/04614b6d11db2ac9b06206848dbd97a918de24c5/pokemon.json";

function Pokemon() {
    let [pokemons, setPokemons] = useAtom(pokemonList);
    let [pokemon] = useAtom(pokemonSearch);
    React.useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(setPokemons)
    }, [])
    return (
        <div>
            {pokemons
                .filter(p => p.name.english.toLowerCase().includes(pokemon.toLowerCase()))
                .map((x) => {
                    return (
                        <div key={x.id}>
                            {x.name.english}
                        </div>
                    )
                })}
        </div>
    )
}

export default Pokemon
