import Pokedex from "./Pokedex";

function Pokegame({ pokeData }) {
  const deckOne = [];
  const deckTwo = [];

  for (let p of pokeData) {
    if (deckOne.length === 4) {
      deckTwo.push(p);
    } else if (deckTwo.length === 4) {
      deckOne.push(p);
    } else {
      const random = Math.random();
      if (random > .5) {
        deckOne.push(p);
      } else {
        deckTwo.push(p);
      }
    }
  }

  const deckOneExp = deckOne.map(p => p.base_experience).reduce((acc, currVal) => {
    return acc += currVal;
  }, 0);
  const deckTwoExp = deckTwo.map(p => p.base_experience).reduce((acc, currVal) => {
    return acc += currVal;
  }, 0);

  const winner = deckOneExp > deckTwoExp ? 1 : 2;

  return (<div>
    <h1>Player 1: </h1>
    <Pokedex pokeData={deckOne}
      totalExp={deckOneExp}
      isWinner={winner === 1 ? true : false} />
    <h1>Player 2: </h1>
    <Pokedex pokeData={deckTwo}
      totalExp={deckTwoExp}
      isWinner={winner === 2 ? true : false} />
  </div>);
}

export default Pokegame;