import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

const data = {
    name: "Caio Braga",
    email: "caioeduardobbsantos@gmail.com"
}

const request = axios.post('https://us-central1-spotif4.cloudfunctions.net/api', data, {
    headers: {
    "Content-Type": "application/json",
    "auth": "authentication-token"
    }
})

class SpotAPI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: []
        }
    }

    postPlaylist = async () => {
        const response = await axios.post(`${baseURL}/playlists/createPlaylist`)
        this.setState({ playlists: response.data})
    }

    componentDidMount() {
        this.postPlaylist();
    }

    render(){

        return(
            <input></input> 
        )
    }
}





export default SpotAPI