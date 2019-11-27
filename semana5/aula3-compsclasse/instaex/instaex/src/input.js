import React from 'react'
import './input.css'

class Input extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            textoComentario: ""
        }
    }

    textoComentario = () => {
        this.state(
            {
                textoComentario: ""
            }
        )
    }

    render() {
        return (
            <div>
                <button></button>
                
            </div>
        )
    }
}

export default Input