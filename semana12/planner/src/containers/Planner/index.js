import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getTasks, createTask } from "../../actions";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button"

const MainContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px;
margin: 0 auto;
`


class Planner extends React.Component {
  render() {
    return (
      <MainContainer>
        O Planner vai aqui
        <Input></Input>
        <Button></Button>
      </MainContainer>
    );
  }
}

export default connect()(Planner);
