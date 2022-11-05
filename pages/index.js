import Layout from "../components/Layout" // General Layout

import PokemonInfo from "../components/pokemonInfo"

function Index({ pokedex }) {

    return (
        <Layout title='Pokedex API'>
            <h1 className="pokemon-list-title">National pokedex</h1>
            <div>

                {
                    pokedex.pokemon_entries.map((pokemon) => {
                        return (
                            <PokemonInfo pokemon={pokemon} />
                        )
                    })

                }

            </div>
        </Layout>
    )
}
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex/1')
    const json = await res.json()
    return { pokedex: json }
}

export default Index