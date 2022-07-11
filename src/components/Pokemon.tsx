import React from "react";
import {pokemonList, pokemonSearch} from "../store";
import {useAtom} from "jotai";

const URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

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
            {pokemons.filter(p => p.name.english.toLowerCase().includes(pokemon.toLowerCase())).map((x) => {
                return (
                    <div key={pokemon.id}>
                        {x.name.english}
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemon
