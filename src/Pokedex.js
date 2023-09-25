import Pokecard from "./Pokecard";
import "./Pokedex.css";

/**
 * Accepts [ {pokeData}, { pokeData} ...]
 * Returns Pokedex component
 */

function Pokedex({ pokeData, totalExp, isWinner }) {
  return (<div>
    <ul className="Pokedex">
      {pokeData.map(p => <Pokecard id={p.id}
        name={p.name}
        type={p.type}
        baseExperience={p.base_experience} />)}
    </ul>
    <p>Total Pokedex EXP: {totalExp}</p>
    {isWinner ? <p>THIS HAND WINS!!!!!!</p> : ""}
  </div>
  );
}

export default Pokedex;