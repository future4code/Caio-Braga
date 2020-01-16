import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";


const CreateTrip = (props) => {
    return (
        <div>
            <h1>Criar Viagem</h1>
            <p>
                Aqui você pode criar novas viagens
            </p>
            <button onClick={props.goToDetails}>Gerenciar</button>
            <button onClick={props.goToList}>Lista de Viagens</button>
            
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        goToDetails: () => dispatch(push(routes.tripDetails)),
        goToList: () => dispatch(push(routes.tripList))
    }
}


export default connect(null, mapDispatchToProps) (CreateTrip);