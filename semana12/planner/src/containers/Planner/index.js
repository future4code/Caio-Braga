import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getTasks, createTask } from "../../actions";
import Input from "@material-ui/core/Input";

const MainContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px;
margin: 0 auto;
`
const CreateButton = styled.button `
width: 100px;
`

const Dropdown = styled.select `
width: 150px;
`

const GetButton = styled.button `
width: 100px;
`


class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: {}
    }
  }

handlecreateTask = (event) => {
  event.preventDefault();

  const { day } = this.state.select

  this.props.createTask(day)
  this.setState({select:{}})
}

handlegetTasks = (event) => {
  event.preventDefault();

  this.props.getTasks()
  this.setState({button:{}})
}

  render() {
    return (
      <MainContainer>
        O Planner vai aqui
        <Input></Input>

        <Dropdown>
          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </Dropdown>

        <CreateButton onClick = {this.handlecreateTask}>Criar Tarefa</CreateButton>

        <GetButton>Baixar tarefas</GetButton>



      </MainContainer>
    );
  }
}

export default connect()(Planner);
