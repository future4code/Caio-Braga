import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";


const HomePage = (props) => {
    return (
        <div>
            Future X - Viagens interplanetárias
            <button onClick={props.goToLogin}>Cadastro/Login</button>
            <button onClick={props.goToAppForm}>Inscrições</button>
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        goToAppForm: () => dispatch(push(routes.application))
    }
}






export default connect(null, mapDispatchToProps) (HomePage);