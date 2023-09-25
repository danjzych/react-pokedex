import Pokecard from "./Pokecard";
import "./Pokedex.css";

/**
 * Accepts [ {pokeData}, { pokeData} ...]
 * Returns Pokedex component
 */
//TODO: capital classname
function Pokedex({ pokeData }) {
  return (<ul className="pokedex">
    {pokeData.map(p => <Pokecard id={p.id}
      name={p.name}
      type={p.type}
      baseExperience={p.base_experience} />)}
  </ul>);
}

export default Pokedex;