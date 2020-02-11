import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


class TripDetails extends React.Component {
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
            <h1>Gerenciar</h1>
            <p>
                Aqui você pode editar todas as informações.
            </p>
            <button onClick={this.props.goToList}>Lista de Viagens</button>
            <button onClick={this.props.goToCreate}>Criar Viagens</button>
            
        </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        goToList: () => dispatch(push(routes.tripList)),
        goToCreate: () => dispatch(push(routes.createTrip)),
        goToLogin: () => dispatch(push(routes.login))
    }
}


export default connect(null, mapDispatchToProps) (TripDetails);

