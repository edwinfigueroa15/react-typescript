import { Typography } from "@/components/atoms";
import '@/components/molecules/Popup/Popup.css'

const Popup = ({ infoPokemon }: any) => {
  const { name, stats, location_area_encounters, img } = infoPokemon

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="title" className="font-bold mb-4" component="h2">{name}</Typography>
      <img src={img} alt="Image ok Pokémon" className="m-0 w-24 h-24" />
      <div className="flex flex-row justify-between items-start gap-20 mt-6 text-left">
        <div>
          <Typography variant="body" className="font-bold">Stats</Typography>
          <ul>
            { stats.map((item: any) => (<li><span className="font-bold">{item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}:</span> {item.base_stat}</li> ))}
          </ul>
        </div>
        <div>
          <Typography variant="body" className="font-bold" >Location area encounters</Typography>
          <ul>
            {
              location_area_encounters.map((item: any) => (
                <li>{item.location_area.name.split('-').join(' ')}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
