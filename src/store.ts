import {atom} from "jotai";
import {Pokemon} from "./types/Pokemon";

export let pokemonList = atom<Pokemon[]>([]);
export let pokemonSearch = atom<string>('');
export let filteredPokemons = atom<Pokemon[]>((get)=>get(pokemonList).filter(p => p.name.english.toLowerCase().includes(get(pokemonSearch).toLowerCase())))

