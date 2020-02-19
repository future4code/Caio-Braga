import { Residence } from './residence';
import { Client } from './client';

export class ResidentialClient implements Client {
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number;
    public clientCpf: string;
    public clientCep: string;

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, clientCpf: string, clientCep: string) {
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
        this.clientCpf = clientCpf
        this.clientCep = clientCep
    }
    calculateBill(): number;
}

