import * as moment from 'moment';
moment.locale("pt-br")

export class ErrorPrinter {
    public message: string
    public timestamp: Date 
    Date = moment("DD/MM/YYYY HH:mm:ss")

    getError(message: string, timestamp: Date) {
        return console.log(message, "-", timestamp )
    }
}

