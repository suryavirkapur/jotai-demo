import React from "react";
import {useAtom} from "jotai";

import {pokemonList} from "./store";

import Pokemon from "./components/Pokemon";
import Search from "./components/Search";

const URL = "https://gist.githubusercontent.com/suryavirkapur/fc2eec6db515da77c94ef26e728feddd/raw/04614b6d11db2ac9b06206848dbd97a918de24c5/pokemon.json";

function App() {
    let [_, setPokemons] = useAtom(pokemonList);

    React.useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(setPokemons)
    }, [])

    return (
        <div>
            <Search/>
            <Pokemon/>
        </div>
    )
}

export default App
