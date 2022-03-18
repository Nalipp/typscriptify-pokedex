import { render } from '@testing-library/react';
import Pokedex from './Pokedex';
import { IPokemon } from './interfaces';

test('Pokedex component will render with props', () => {
  const pokemon: IPokemon[] = [
    { 
      id: 4, 
      name: "Charmander", 
      type: "fire", 
      base_experience: 62 
    },
    { 
      id: 7, 
      name: "Squirtle", 
      type: "water", 
      base_experience: 63 
    },
  ];

  render(<Pokedex expTotal={125} isWinner={true} pokemon={pokemon} />);
});

