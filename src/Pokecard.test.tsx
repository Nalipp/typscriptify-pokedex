import { render } from '@testing-library/react';
import Pokecard from './Pokecard';

test('Pokecard component will render with props', () => {
  render(
    <Pokecard 
       base_experience={62} 
       id={4} name={'Charmander'} 
       type={'fire'} />
    );
});

test('Pokecard component matches snapshot', () => {
  const { container } = render(
    <Pokecard 
       base_experience={62} 
       id={4} name={'Charmander'} 
       type={'fire'} />
    );

  expect(container).toMatchSnapshot();
})


