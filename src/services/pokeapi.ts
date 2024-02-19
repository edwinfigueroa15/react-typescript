import axios from 'axios'
import { ListPokemones, PokemonInfo, PokemonResume } from '../interfaces/pokemon'
import not_found from '../assets/icons/not_found.svg';

export const getPokemones = async (limit: number, offset: number): Promise<PokemonResume[]> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)

        const pokemonesResponse = response.data.results.map(async (pokemon: ListPokemones) => {
            const response = await fetch(pokemon.url)
            const data: PokemonInfo = await response.json()
            return {
                id: data.id,
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                img: data.sprites.other?.dream_world.front_default || not_found,
                height: data.height,
                weight: data.weight,
                abilities: data.abilities.map(abilities => abilities.ability.name).join(', '),
                types: data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))
            }
        })

        return await Promise.all(pokemonesResponse)
    } catch (error) {
        throw error
    }
}