import React, { useEffect, useState } from "react";
import { getPokemones } from "../../services/pokeapi";
import { PokemonResume } from "../../interfaces/pokemon";

export const HomePage: React.FC<{}> = () => {
    const [pokemones, setPokemones]: any[] = useState([])

    const getData = async () => {
        const response = await getPokemones()
        setPokemones(response)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                pokemones.map((pokemon: any) => <p key={pokemon.id}>{pokemon.name}</p>)
            }
        </div>
    )
}