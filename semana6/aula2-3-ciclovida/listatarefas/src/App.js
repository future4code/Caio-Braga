import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Filtro from './Filtro'

const Principal = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Tilulo = styled.h1 `
text-align: center;
`

const InputTarefa = styled.input `
margin-bottom: 10px;
`

const Adicionar = styled.button `

`

function App() {
  return (
    <Principal>
      <Tilulo>Lista de tarefas</Tilulo>
      <InputTarefa />
      <Adicionar>
        Adicionar
      </Adicionar>
      <Filtro></Filtro>

    </Principal>
  )
}


export default App;
