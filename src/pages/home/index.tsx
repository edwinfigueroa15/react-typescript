import React, { useEffect, useState } from "react";
import { getPokemones } from "../../services/pokeapi";
import './home.css'

export const HomePage: React.FC<{}> = () => {
    const [params, setParams] = useState({ limit: 30, offset: 0 })
    const [pokemones, setPokemones]: any = useState([])
    const [loading, setLoading]: any = useState(true)

    const getData = async () => {
        try {
            const response = await getPokemones(params.limit, params.offset)
            setPokemones(response)
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        getData()
    }, [])

    useEffect(() => {
        const handleScroll = async () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + (clientHeight+1) >= scrollHeight) {
                setParams({...params, offset: params.offset+params.limit })
                setLoading(true)
                try {
                    const response = await getPokemones(params.limit, params.offset+params.limit)
                    setPokemones([...pokemones, ...response])
                    
                } catch (error) {
                    console.log(error)

                } finally {
                    setLoading(false)
                
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pokemones]);

    return (
        <>
            {!loading && <p>Cargando...</p>}

            <div className="container">
                {
                    pokemones?.map((pokemon: any) => (
                        <div className="card" key={pokemon.id}>
                            <div>
                                <p className="card_title">{pokemon.name}</p>
                                <p>Height: {pokemon.height}</p>
                                <p>Weight: {pokemon.weight}</p>
                                <p className="abilities">Abilities: {pokemon.abilities}</p>
                                <p className="type">
                                    {
                                        pokemon.types.map((item: string) => (
                                            <span key={item}>{item}</span>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="container_img">
                                <img src={pokemon.img} alt="Imagen del Pokémon" className="w-24 h-24 mx-auto mb-4" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}