import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


const TripList = (props) => {
    return (
        <div>
            <h1>Lista de Viagens</h1>
            <p>
                Aqui você encontra detalhes sobre as próximas viagens
            </p>
            <button onClick={props.goToDetails}>Gerenciar</button>
            <button onClick={props.goToCreate}>Criar Viagens</button>
            
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        goToDetails: () => dispatch(push(routes.tripDetails)),
        goToCreate: () => dispatch(push(routes.createTrip))
    }
}


export default connect(null, mapDispatchToProps) (TripList);