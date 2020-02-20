import * as moment from 'moment';
moment.locale("pt-br")

class HandleError {
    public message: string
    public timestamp: Date 
    Date = moment("DD/MM/YYYY HH:mm:ss")
}