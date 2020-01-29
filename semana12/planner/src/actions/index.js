import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-caioeduardo"

export const getTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}`)
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível pegar as tarefas")
    }
}

export const createTask = () => async (dispatch) => {
    try {
        await axios.post (`${baseURL}`)
        window.alert("Tarefa criada")
    } catch(error) {
        console.log(error)
        window.alert("Falha ao criar tarefa")
    }
}

