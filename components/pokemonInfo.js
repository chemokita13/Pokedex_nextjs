import Link from "next/link"

function PokemonInfo({ pokemon }) {

  return (
    <div key={pokemon.entry_number}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} />
      <h1>{pokemon.entry_number}</h1>,
      <h2>{pokemon.pokemon_species.name}</h2>
      <Link href={'/pokemon/' + pokemon.entry_number} legacyBehavior>
        <a>more info</a>
      </Link>
    </div>
  )

}


export default PokemonInfo