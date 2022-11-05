import Layout from "../../components/Layout" // General Layout

import { useRouter } from 'next/router'
import React from "react"

function Pokemon({ pokemonInfo }) {

    const FemaleImg = React.createRef()
    const ShinyFemaleImg = React.createRef()

    const router = useRouter()
    const { PokemonNumber } = router.query

    if (pokemonInfo == 'error') {
        return (
            <Layout>
                <h1>Error</h1>
            </Layout>
        )
    } else {
        var arrayVarieties = []
        pokemonInfo.varieties.map((element) => {
            if (element.is_default) {
                arrayVarieties.push((element.pokemon.name + '(Default)'))
            } else {
                arrayVarieties.push(element.pokemon.name)
            }
        })
        return (
            <Layout title={'Pokemon: ' + PokemonNumber}>
                <h1>{pokemonInfo.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonNumber}.png`} className='PokemonImg' id='NormalImg' />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png`} className='PokemonImg' id='ShinyImg' />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${PokemonNumber}.png`} className='PokemonImg' id='FemaleShinyImg' ref={ShinyFemaleImg} /*onEmptied={}*/ />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${PokemonNumber}.png`} className='PokemonImg' id='FemaleImg' ref={FemaleImg} /*onEmptied={}*/ />

                <ul>
                    <li>
                        Pokemon number: {PokemonNumber}.
                    </li>
                    <li>
                        {pokemonInfo.flavor_text_entries[0].flavor_text} ({pokemonInfo.flavor_text_entries[0].version.name}, {pokemonInfo.flavor_text_entries[0].language.name})
                    </li>
                    <li>
                        {pokemonInfo.genera.map((element) => {
                            if (element.language.name == 'en') {
                                return (element.genus)
                            }
                        })}
                    </li>
                    <li>
                        {pokemonInfo.generation.name}
                    </li>

                    {
                        arrayVarieties[1] // if exits more than 1 form
                            ? <li>
                                Forms:
                                <ul>
                                    {arrayVarieties.map((element) => { return <li>{element}</li>})}
                                </ul>
                            </li>
                            :
                            console.log(arrayVarieties.lenght)
                    }
                </ul>
            </Layout>
        )
    }
}

Pokemon.getInitialProps = async (ctx) => {
    const { PokemonNumber } = ctx.query
    const PokemonNumberChecked = (!isNaN(PokemonNumber) ? (PokemonNumber < 898 ? PokemonNumber : 'error') : 'error')
    if (PokemonNumberChecked !== 'error') {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonNumberChecked}`)
        const json = await res.json()
        return { pokemonInfo: json }
    } else {
        return { pokemonInfo: 'error' }
    }
}

export default Pokemon