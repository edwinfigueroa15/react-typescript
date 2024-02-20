import { Loading } from "@/components/atoms";
import { CardPokemon } from "@/components/molecules";
import React, { useEffect, useState } from "react";
import { getPokemones } from "@/services/pokeapi";
import { PokemonResume } from "@/interfaces/pokemon";

export const HomePage: React.FC<{}> = () => {
  const [params, setParams] = useState({ limit: 30, offset: 0 });
  const [pokemones, setPokemones] = useState<PokemonResume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // METHODS ------------------------------------------
  

  // API --------------------------------------------
  const getData = async (): Promise<void> => {
    try {
      const response = await getPokemones(params.limit, params.offset);
      setPokemones(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // LIFECYCLE ------------------------------------------
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + (clientHeight + 1) >= scrollHeight) {
        setLoading(true);
        setParams({ ...params, offset: params.offset + params.limit });
        try {
          const response = await getPokemones(params.limit, params.offset + params.limit);
          setPokemones([...pokemones, ...response]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pokemones]);

  // RETURN VIEW ---------------------------------------
  return (
    <>
      <div className="flex justify-center items-center flex-row flex-wrap gap-4">
        {pokemones?.map((pokemon: PokemonResume) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      {loading && <Loading />}
    </>
  );
};
