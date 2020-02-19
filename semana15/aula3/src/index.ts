import { ResidentialClient } from './residentialclient';
import { CommercialClient } from './commercialclient';

const almeida = new ResidentialClient("Almeida", 5, 10, "555.555.555-55", "50367-475")
const pacheco = new ResidentialClient("Pacheco", 9, 15, "777.777.777-77", "20385-349")

const padaria = new CommercialClient("Padaria do Manél", 32, 55, "50.456.576/9169-23", "20386-389")
const borracharia = new CommercialClient("Tião Borracharia", 27, 62, "25.360.594/4793-34", "35827-566")