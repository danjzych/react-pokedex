import "./Pokecard.css";

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
/**
 * Accepts: {id, name, type, baseExperience} for single pokemon
 * Returns Pokemon card
 *
 */

function Pokecard({ id, name, type, baseExperience }) {
  return (<div className="Pokecard">
    <p>{name}</p>
    <img src={`${BASE_URL}${id}.png`} />
    <p>Type: {type}</p>
    <p>EXP: {baseExperience}</p>
  </div>);
}

export default Pokecard;