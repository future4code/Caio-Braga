import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


class TripList extends React.Component {
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
            <h1>Lista de Viagens</h1>
            <p>
                Aqui você encontra detalhes sobre as próximas viagens
            </p>
            <button onClick={this.props.goToDetails}>Gerenciar</button>
            <button onClick={this.props.goToCreate}>Criar Viagens</button>
            
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToDetails: () => dispatch(push(routes.tripDetails)),
        goToCreate: () => dispatch(push(routes.createTrip)),
        goToLogin: () => dispatch(push(routes.login))
    }
}


export default connect(null, mapDispatchToProps) (TripList);

