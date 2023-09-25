import Pokecard from "./Pokecard";

function Pokedex({ pokeData }) {
  return (<ul>
    {pokeData.map(p => <Pokecard id={p.id}
      name={p.name}
      type={p.type}
      baseExperience={p.base_experience} />)}
  </ul>);
}

export default Pokedex;