import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";


const AboutPage = (props) => {
    return (
        <div>
            <h1>Dúvidas / F.A.Q </h1>
            <p>
                Aqui você encontra informações da empresa e detalhes sobre as viagens
            </p>
            <button onClick={props.goToRoot}>Voltar para Home</button>
            <button onClick={props.goToLogin}>Cadastro/Login</button>
            
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        goToRoot: () => dispatch(push(routes.root)),
        goToLogin: () => dispatch(push(routes.login))
    }
}


export default connect(null, mapDispatchToProps) (AboutPage);