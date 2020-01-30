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
const TaskButton = styled.button `
width: 100px;
`

const Dropdown = styled.select `
width: 150px;
`


class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: {}
    }
  }

handleCreateTask = (event) => {
  event.preventDefault();

  const { text } = this.state.select

  this.props.createTask(text)
  this.setState({select:{}})
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

        <TaskButton onClick = {this.handleCreateTask}>Criar Tarefa</TaskButton>

      </MainContainer>
    );
  }
}

export default connect()(Planner);
