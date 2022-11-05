import Link from "next/link"

function PokemonInfo({ pokemon }) {

  return (
    <div key={pokemon.entry_number} className='pokemon-list-container'>
      <img className='pokemon-list-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} />
      <div className="pokemon-list-nameandnumber">
        <div className="pokemon-list-number">{pokemon.entry_number}</div>
        <div className="pokemon-list-name">{pokemon.pokemon_species.name}</div>
      </div>
      <Link href={'/pokemon/' + pokemon.entry_number} legacyBehavior>
        <a className="pokemon-list-moreinfo">more info</a>
      </Link>
    </div>
  )

}


export default PokemonInfo