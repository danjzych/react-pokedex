import "./Pokecard.css";
/**
 * Accepts: {id, name, type, baseExperience} for single pokemon
 * Returns Pokemon card
 *
 */
//TODO: make img global constant
function Pokecard({ id, name, type, baseExperience }) {
  return (<div className="pokecard">
    <p>{name}</p>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
    <p>Type: {type}</p>
    <p>EXP: {baseExperience}</p>
  </div>);
}

export default Pokecard;