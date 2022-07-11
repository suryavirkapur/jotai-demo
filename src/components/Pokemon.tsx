import {pokemonList, pokemonSearch} from "../store";
import {useAtom} from "jotai";


function Pokemon() {
    let [pokemons] = useAtom(pokemonList);
    let [pokemon] = useAtom(pokemonSearch);
    return (
        <div>
            {pokemons.filter(p=>p.name.english.toLowerCase().includes(pokemon)).map((x)=> {
                return (
                    <p>
                        {x.name.english}
                    </p>
                )
            })}
        </div>
    )
}

export default Pokemon
