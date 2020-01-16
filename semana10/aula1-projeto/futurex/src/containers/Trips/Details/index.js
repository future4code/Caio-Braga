import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


const TripDetails = (props) => {
    return (
        <div>
            <h1>Gerenciar</h1>
            <p>
                Aqui você pode editar todas as informações.
            </p>
            <button onClick={props.goToList}>Lista de Viagens</button>
            <button onClick={props.goToCreate}>Criar Viagens</button>
            
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        goToList: () => dispatch(push(routes.tripList)),
        goToCreate: () => dispatch(push(routes.createTrip))
    }
}


export default connect(null, mapDispatchToProps) (TripDetails);