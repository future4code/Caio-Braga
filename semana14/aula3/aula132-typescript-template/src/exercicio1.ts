import {readdir} from 'fs';
import { resolve } from 'dns';


const folderName = "textos";

const readPromise = new Promise((resolve, reject) => {
    readdir(textos), (err :Error, data :Buffer) => {
        if(err)
            reject(err)

        resolve(data.toString())
    };
} );

const init = async () => {
    try {
    const dirContent = await readPromise;
    console.log(dirContent)
    } catch(error){
        console.error("Falha na promise", error)
    }
}

init();