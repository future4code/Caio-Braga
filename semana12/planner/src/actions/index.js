import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-caioeduardo"

export const getTasks = (tasks) => ({
    type: "GET_ALL_TASKS",
    payload: {
        tasks,
    }
})

export const getAllTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}`)
        dispatch(getTasks(response.data))
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível pegar as tarefas")
    }
}

export const createTask = (text, day) => async (dispatch) => {
    const newTask = {
        text,
        day,
    }
    
    try {
        await axios.post (`${baseURL}`)
        window.alert("Tarefa criada")
    } catch(error) {
        console.log(error)
        window.alert("Falha ao criar tarefa")
    }
}

