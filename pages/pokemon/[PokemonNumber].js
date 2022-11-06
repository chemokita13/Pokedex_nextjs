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

        // to select the first flavour text in english
        var flavour = ''
        var indexOfFlavorText = 0
        pokemonInfo.flavor_text_entries.map((element, index) => {
            if (element.language.name == 'en' && index == indexOfFlavorText) {
                console.log('PREMIO')
                console.log(element, index)
                flavour = element
            } else {
                indexOfFlavorText++
            }


        })
        console.log(flavour)
        return (
            <Layout title={'Pokemon: ' + PokemonNumber}>
                <h1>{pokemonInfo.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonNumber}.png`} className='PokemonImg' id='NormalImg' alt="" />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonNumber}.png`} className='PokemonImg' id='ShinyImg' alt="" />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${PokemonNumber}.png`} className='PokemonImg' id='FemaleShinyImg' alt=""/>

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${PokemonNumber}.png`} className='PokemonImg' id='FemaleImg' alt=""/>

                <ul>
                    <li>
                        Pokemon number: {PokemonNumber}.
                    </li>
                    <li>
                        {flavour.flavor_text} ({flavour.version.name}, {flavour.language.name})
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
                        arrayVarieties[1] // if there is more than 1 form
                            ?
                            <li>
                                Forms:
                                <ul>
                                    {arrayVarieties.map((element) => { return <li>{element}</li> })}
                                </ul>
                            </li>
                            :
                            null
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