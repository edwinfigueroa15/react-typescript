import { Typography } from "@/components/atoms";
import { PokemonResume } from "@/interfaces/pokemon";
import '@/components/molecules/CardPokemon/CardPokemon.css'

export type CardPokemonProps = {
  pokemon: PokemonResume;
}

const CardPokemon = ({ pokemon }: CardPokemonProps) => {
  const { name, height, img, weight, abilities, types } = pokemon;

  let backgroundColor
  switch (types.length) {
    case 1:
      backgroundColor = `var(--bg-${types[0].toLowerCase()})`
      break;

    case 2:
      backgroundColor = `linear-gradient(var(--bg-${types[1].toLowerCase()}), 45%, var(--bg-${types[0].toLowerCase()}))`
      break;
  }

  // LIFECYCLE ------------------------------------------
  return (
    <div style={{ background: backgroundColor }} className="card p-3 text-sm cursor-pointer min-w-80 max-w-96 text-start flex justify-space-between items-center flex-row">
      <div className="w-52">
        <Typography variant="title" component="h3">{name}</Typography>
        <Typography variant="body">{`Height: ${height}`}</Typography>
        <Typography variant="body">{`Weight: ${weight}`}</Typography>
        <Typography variant="body" className="hidden_text">{`Abilities: ${abilities}`}</Typography>
        <Typography variant="body" className="type">
          {types.map((item: string) => (<span key={item} style={{ backgroundColor: `var(--bg-tag-${item.toLowerCase()})` }}>{item}</span>))}
        </Typography>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="Image ok Pokémon" className="m-0 w-24 h-24" />
      </div>
    </div>

  );
};

export default CardPokemon;
