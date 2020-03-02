import { Client } from './client';
import { Industry } from './industry';

export class IndustrialClient extends Industry implements Client {
    public industryName: string;
    public industryNumber: number;
    public consumedEnergy: number;
    public clientCpf: string;
    public clientCep: string;

    constructor() {
        super(industryName, industryNumber, cep)
        this.industryName 
        this.industryNumber 
        this.consumedEnergy
        this.clientCpf
        this.clientCep
    }
    calculateBill(): number;
}
