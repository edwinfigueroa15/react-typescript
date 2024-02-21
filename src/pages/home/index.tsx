import { Loading } from "@/components/atoms";
import { CardPokemon } from "@/components/molecules";
import React, { useEffect, useState } from "react";
import { getPokemones, getPokemonesByType } from "@/services/pokeapi";
import { PokemonResume } from "@/interfaces/pokemon";
import { useLocation } from "react-router-dom";

export const HomePage: React.FC<{}> = () => {
  const [params, setParams] = useState({ limit: 30, offset: 0 });
  const [pokemones, setPokemones] = useState<PokemonResume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { state } = useLocation();
  const [filter, setFilter] = useState<string | undefined>(state?.type)

  let stateAux: string | undefined = undefined

  // METHODS ------------------------------------------
  const clearFilters = () => {
    window.history.replaceState(null, '', window.location.pathname);
    setLoading(true)
    setFilter(undefined)
    stateAux = undefined
    getData()
  }

  // API --------------------------------------------
  const getData = async (): Promise<void> => {
    try {
      console.log("stateAux", stateAux)
      if (stateAux) {
        const response = await getPokemonesByType(filter!);
        setPokemones(response);

      } else {
        const response = await getPokemones(params.limit, params.offset);
        setPokemones(response);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // LIFECYCLE ------------------------------------------
  useEffect(() => {
    setLoading(true);
    stateAux = state
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

    console.log("filter", filter)
    if (!filter) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pokemones]);

  // RETURN VIEW ---------------------------------------
  return (
    <>
      {!loading && filter && (
        <div className="w-11/12 flex justify-end">
          <button className="button p-3 mb-5" onClick={clearFilters}>Show all</button>
        </div>
      )}

      <div className="flex justify-center items-center flex-row flex-wrap gap-4">
        {pokemones?.map((pokemon: PokemonResume) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      {loading && <Loading />}
    </>
  );
};
