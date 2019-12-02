import React from 'react';
import styled from 'styled-components';


const Header = styled.header `
color: white;
display: flex;
align-items: center;
justify-content: center;
background-color: orangered;
`

const Main = styled.section `
background-color: #FFF8DC;
display: flex;
align-items: center;
justify-content: center;
min-height: 91vh;
flex-direction: column;
`

const Formulario = styled.section `
display: flex;
align-items: center;
justify-content: center;
text-align: center;
border: 1px dotted black;
flex-direction: column;
padding: 30px;
`

const InputNome = styled.input `

`

const InputIdade = styled.input `

`

const InputEmail = styled.input `

`
const DropEscolaridade = styled.select `

`

const Enviar = styled.button `
margin: 20px;
`


function App() {
  return (
    <div className="App">
      <Header>
        <h1>
          FutureForms
        </h1>
      </Header>
      <Main className="Main">
        <h3>
          Etapa 1 - Dados Gerais
        </h3>
        <Formulario>
          <p>
            1 - Qual o seu nome?
          </p>
          <InputNome></InputNome>
          <p>
            2 - Qual a sua idade?
          </p>
          <InputIdade></InputIdade>
          <p>
            3 - Qual seu email?
          </p>
          <InputEmail></InputEmail>
          <p>
            4 - Qual a sua escolaridade?
          </p>
          <DropEscolaridade>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
          </DropEscolaridade>
          <Enviar>Enviar</Enviar>
        </Formulario>
      </Main>
    </div>
  );
}

export default App;
