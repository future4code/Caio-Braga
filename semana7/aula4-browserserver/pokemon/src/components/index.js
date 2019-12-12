import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2"

class PokeAPI extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            allPokemons: [],
            selectedPokemonPhoto: '',

        }
    }

    fetchAllPokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ allPokemons: response.data.results })
    }

    componentDidMount() {
        this.fetchAllPokemons();
    }

    fetchPokemondetails = async (event) => {
        const pokemonDetailsURL = event.target.value;
        const response = await axios.get(pokemonDetailsURL);
        const photoURL = response.data.sprites.front_default;
        this.state({ selectedPokemonPhoto: photoURL})
    }

    render(){
        const isPokemonSelected = this.state.selectedPokemonPhoto !== '';
        return(
            <div>
                <select onChange={this.fetchPokemondetails}>
                    <option>Selecione um Pokémon</option>
                    {this.state.allPokemons.map((pokemon)=> (<option value={pokemon.url}>{pokemon.name}</option>))}
                </select>
                <hr />
                {this.state.selectedPokemonPhoto && (<img src={this.state.selectedPokemonPhoto}alt="Foto do Pokémon" />)}
            </div>
        )
    }

}

export default PokeAPI;