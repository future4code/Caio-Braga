import React from 'react';
import styled from 'styled-components';

const Text = styled.div `

`

const ListText = styled.div `

`




function MainSection() {
    return (
        <div>
            <Text>
                <input type="text" placeholder = "O qye tem que ser feito?" />
            </Text>
            <ListText>
                <input type = "checkbox" />
                <li>
                    <a>Use Redux</a>
                </li>
                <span>X</span>
            </ListText>
        </div>
    );
    }


    const mapStateToProps = state => {
        return {
          taskList: state.lista.taskList,
        };
      };

      const mapDispatchToProps = dispatch => {
          return {
              changeTask: task => dispatch(changeTaskAction(task))
          };
      };



export default MainSection;