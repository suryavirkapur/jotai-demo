import {atom} from "jotai";
import {Pokemon} from "./types/Pokemon";

export let pokemonList = atom<Pokemon[]>([]);
export let pokemonSearch = atom<string>('');

