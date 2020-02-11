const fs = require('fs');
const task = '\nAbrir o Slack';
const fileName = "tarefas.txt";

try{
    fs.appendFileSync(fileName, task, 'utf8');
    console.log("Nova tarefa adicionada!")
} catch(err) {
    console.error(err)
}