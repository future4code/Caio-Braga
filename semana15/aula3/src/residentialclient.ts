import { Residence } from './residence';
import { Client } from './client';

export class ResidentialClient implements Client {
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;
    clientCpf: string;
    clientCep: string;

    calculateBill(): number;
}

