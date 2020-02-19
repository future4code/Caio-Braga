import { Client } from './client';

export class CommercialClient implements Client {
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number;
    public clientCnpj: string;
    public clientCep: string;

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, clientCnpj: string, clientCep: string) {
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
        this.clientCnpj = clientCnpj
        this.clientCep = clientCep
    }
    calculateBill(): number;
}