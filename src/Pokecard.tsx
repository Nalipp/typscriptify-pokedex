import "./Pokecard.css";
import { IPokemon } from "./interfaces";

const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";


/** Individual Pokemon card.
 *
 * Props:
 * - title
 * - image
 * - type
 * - base_experience: (number of experience points)
 *
 * */

    function Pokecard({ base_experience, id, name, type }: IPokemon) {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
      <div className="Pokecard">
        <div className="Pokecard-title">{name}</div>
        <img className="Pokecard-image" src={imgSrc} alt={name} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {base_experience}</div>
      </div>
  );
}

export default Pokecard;
