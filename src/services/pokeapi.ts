import { ListPokemones, PokemonInfo, PokemonResume } from '../interfaces/pokemon'
import not_found from '../assets/icons/not_found.svg';

export const getPokemones = async (limit: number, offset: number): Promise<PokemonResume[]> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemon/?offset=${offset}&limit=${limit}`)
        const pokemones = await response.json()

        const pokemonesResponse = pokemones.results.map(async (pokemon: ListPokemones) => {
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

export const getTypePokemones = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/type`)
        const types = await response.json()

        const typesResponse = types.results.map(async (type: ListPokemones) => {
            const response = await fetch(type.url)
            const data = await response.json()

            return {
                name: type.name,
                value: data.pokemon.length
            }
        })

        return await Promise.all(typesResponse)
    } catch (error) {
        throw error
    }
}

export const getPokemonesByType = async (type: string): Promise<PokemonResume[]> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/type/${type}`)
        const pokemones = await response.json()

        const pokemonesResponse = pokemones.pokemon.map(async (item: any) => {
            const response = await fetch(item.pokemon.url)
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

export const getPokemonByName = async (name: string): Promise<any> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemon/${name}`)
        const pokemon = await response.json()

        if(!pokemon) throw "Error pokemon not found"

        const data = await fetch(pokemon.location_area_encounters)
        const locationAreaEncounters = await data.json()

        return {
            location_area_encounters: locationAreaEncounters,
            stats: pokemon.stats
        }
        
    } catch (error) {
        throw error
    }
}