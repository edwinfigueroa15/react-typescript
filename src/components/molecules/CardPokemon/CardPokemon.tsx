import { Card, CardProps, Chip, Typography } from "@/components/atoms";
import { PokemonResume, Type } from "@/interfaces/pokemon";

export type CardPokemonProps = CardProps & {
  pokemon: PokemonResume; // TODO: change
};

const CardPokemon = ({ pokemon, color, ...props }: CardPokemonProps) => {
  const { name, height, img, weight, abilities, types } = pokemon;

  return (
    <Card
      className="flex flex-row gap-3 w-98 overflow-hidden justify-between items-center"
      {...props}
    >
      <div className="flex flex-col">
        <Typography variant="title" component="h3">
          {name}
        </Typography>
        <div className="flex flex-col justify-start items-start p-2">
          <Typography variant="body">{`Height: ${height}`}</Typography>
          <Typography variant="body">{`Weight: ${weight}`}</Typography>
          <Typography
            variant="body"
            className="truncate"
          >{`Abilities: ${abilities}`}</Typography>
          <div className="flex gap-2 flex-row">
            {types.map((item: Type) => (
              <Chip key={item as unknown as string}>
                {item as unknown as string}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <img src={img} alt={img} className="h-24" />
    </Card>
  );
};

export default CardPokemon;
