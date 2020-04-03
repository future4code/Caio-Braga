import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { loginEndpoint } from "./endpoints/login";
import { SignupUC } from "../business/usecase/signupUC";


const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint, async (request: Request, response: Response) => {
    const useCase = new SignupUC()

    const input = {
        email: request.body.email,
        password: request.body.password,
        name: request.body.name,
    }

    try {
        await useCase.execute(input)

    response.send({message: "Usuário criado"})
    } catch(e) {
        response.status(500).send({message: e.message})
    }
    
})

app.post('/login', loginEndpoint);
app.get('/getUser', getUserInfoEndpoint)
app.post('/user/follow', followUserEndpoint)
app.get('/feed', getFeedEndPoint)

export default app;