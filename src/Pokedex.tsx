import Pokecard from "./Pokecard";
import "./Pokedex.css";
import { IPokemon } from "./interfaces";

/** Index of Pokemon: show individual cards.
 *
 * Props:
 * - pokemon: array of pokemon: { id, name, type, base_experience }
 * - expTotal: total of experience
 * - isWinner: true/false
 *
 * */


interface PokedexProps {
  expTotal: number;
  isWinner: boolean;
  pokemon: IPokemon[];
}

function Pokedex({ expTotal, isWinner, pokemon }: PokedexProps) {
  const winMessage = isWinner
    ? <p className="Pokedex-winner">THIS HAND WINS!</p>
    : null;

  return (
    <div className="Pokedex">

      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>

      <h4>Total experience: {expTotal}</h4>
      {winMessage}

    </div>
  );
}

export default Pokedex;
