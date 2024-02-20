import { CardProps, Typography } from "@/components/atoms";
import { PokemonResume } from "@/interfaces/pokemon";
import '@/components/molecules/CardPokemon/CardPokemon.css'

export type CardPokemonProps = CardProps & {
  pokemon: PokemonResume;
}

const CardPokemon = ({ pokemon, ...props }: CardPokemonProps) => {
  const { name, height, img, weight, abilities, types } = pokemon;

  // LIFECYCLE ------------------------------------------
  return (
    <div className="p-3 text-sm cursor-pointer min-w-80 max-w-96 text-start flex justify-space-between items-center flex-row border border-slate-950 border-solid">
      <div className="w-52">
        <Typography variant="title" component="h3">{name}</Typography>
        <Typography variant="body">{`Height: ${height}`}</Typography>
        <Typography variant="body">{`Weight: ${weight}`}</Typography>
        <Typography variant="body" className="hidden_text">{`Abilities: ${abilities}`}</Typography>
        <Typography variant="body" className="type">
          {types.map((item: string) => (<span key={item}>{item}</span>))}
        </Typography>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="Image ok Pokémon" className="m-0 w-24 h-24" />
      </div>
    </div>

  );
};

export default CardPokemon;
