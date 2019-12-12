import React from "react";


const users = [
    {
        name: "Soter",
        email:"so@ter,com",
    } ,
    {
        name: "Golias",
        email: "go@lias.com"
    }
];

class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allUsers: []
        };
    }


    render() {
        return (
            <div>
                <h3>Usuários Cadastrados</h3>
            </div>
        );
    }
}

export default UsersList;