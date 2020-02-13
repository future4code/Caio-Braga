import * as moment from 'moment'
import { readFile } from 'fs'
moment.locale('pt-br')

const jsonFileName: string = "calendarData.json";

type event = {
    startDate: Date,
    endDate: Date,
    name: string,
    description: string,
}

const getEvents = async () => {
    const readEventsPromise: Promise<string> = new Promise((resolve, reject) => {
        readFile(jsonFileName, (err: Error, data: Buffer) => {
            if (err) {
             reject(err);
             return;        
            }
         console.log(data);
         resolve(data.toString());
        });
    });

    const jsonContent: string = await readEventsPromise;

    const eventsObject = JSON.parse(jsonContent);
    return eventsObject;
}

