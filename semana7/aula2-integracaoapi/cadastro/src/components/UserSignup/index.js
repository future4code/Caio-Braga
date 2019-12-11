import React from "react";




class UserSignup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: ""
        };
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value});
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value});
    };

    render() {

        return (
            <div>
                <input OnChange={this.handleNameChange} placeholder="Nome" value={this.state.name} />
                <input OnChange={this.handleEmailChange} placeholder="Email" value={this.state.email} />
                <button>Salvar</button>
            </div>
        );
    }
}



export default UserSignup;