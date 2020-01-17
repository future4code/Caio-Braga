import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


class CreateTrip extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const token = window.localStorage.getItem('token')

        if (token === null) {
            this.props.goToLogin()
        }
    }

    render() {
        return (
            <div>
            <h1>Criar Viagem</h1>
            <p>
                Aqui você pode criar novas viagens
            </p>
            <button onClick={this.props.goToDetails}>Gerenciar</button>
            <button onClick={this.props.goToList}>Lista de Viagens</button>
            
        </div> 
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        goToDetails: () => dispatch(push(routes.tripDetails)),
        goToList: () => dispatch(push(routes.tripList)),
        goToLogin: () => dispatch(push(routes.login))
    }
}


export default connect(null, mapDispatchToProps) (CreateTrip);