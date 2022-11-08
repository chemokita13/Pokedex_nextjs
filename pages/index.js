import Layout from "../components/Layout" // General Layout

import PokemonInfo from "../components/pokemonInfo"
import SearchIcon from "../components/search-icon"

import { useEffect, useState } from "react"

function Pokedex({ pokedex }) {

    const [Search, setSearch] = useState('')

    //TODO: loading system

    return (
        <div>
            <Layout title='National Pokedex'>
                <div className="pokemon-list-title-container" id="pokemon-list-header">
                    <div className="pokemon-list-title">National pokedex</div>
                    <div className="search">
                        <input type="text" placeholder="Search" required onChange={e => setSearch(e.target.value)} />
                        <div className="search-btn">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="pokemon-list-pokecards">

                    {
                        pokedex.pokemon_entries.map((pokemon) => {
                            if (pokemon.entry_number.toString().includes(Search) || pokemon.pokemon_species.name.toLowerCase().includes(Search.toLowerCase())) {
                                
                                return (
                                    <PokemonInfo pokemon={pokemon} />
                                )
                            }
                        })

                    }

                </div>
            </Layout>
            <footer className="pokemon-list-footer">
                <a href="#top" className="footer-btn-a">
                    <button className="btn pokemon-list-scrollbtn" >
                        scroll top
                    </button>
                </a>
            </footer>
        </div>
    )
}
Pokedex.getInitialProps = async (ctx) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex/1')
    const json = await res.json()
    return { pokedex: json }
}

export default Pokedex