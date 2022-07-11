import React from "react";
import {pokemonSearch} from "../store";
import {useAtom} from "jotai";

function Search() {
    let [pokemon, setPokemon] = useAtom(pokemonSearch);
    return (
        <>
        <input value={pokemon} onChange={(evt)=>setPokemon(evt.target.value)}/>
        </>
    )
}

export default Search
