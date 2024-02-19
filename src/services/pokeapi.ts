import axios from 'axios'
import { ListPokemones, PokemonInfo, PokemonResume } from '../interfaces/pokemon'

export const getPokemones = async (): Promise<PokemonResume[]> => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')

    const pokemonesResponse = response.data.results.map(async (pokemon: ListPokemones) => {
        const response = await fetch(pokemon.url)
        const data: PokemonInfo = await response.json()
        return {
            id: data.id,
            name: data.name,
            img: data.sprites.other?.dream_world.front_default,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities,
            type: data.types
        }
    })

    return await Promise.all(pokemonesResponse)
}