import React from "react";
import {filteredPokemons} from "../store";
import {useAtom} from "jotai";


function Pokemon() {
    let [pokemons] = useAtom(filteredPokemons);
    return (
        <>
            <h1>Pokemon:</h1>
            <div>
                {pokemons.map((x) => <div key={x.id} className="card">{x.name.english}({x.name.japanese}) | {x.base.HP}</div>)}
            </div>
        </>
    )
}

export default Pokemon
