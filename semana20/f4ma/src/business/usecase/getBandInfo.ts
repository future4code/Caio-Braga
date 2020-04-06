import {BandDatabase} from '../../data/bandDatabase';

interface GetBandInfoInput {
    bandId: string
}

interface GetBandInfoOutput {
    id: string
    name: string
    musicGenre: string
    responsible: string
}

export class GetBandInfoUC {
    async execute(input: GetBandInfoInput): Promise<GetBandInfoOutput> {
        const bandDatabase = new BandDatabase()

        const band = await bandDatabase.getBandById(input.bandId)

        if(!band) {
            throw new Error("Banda não encontrada")
        }

        return {
            id: band.getId(),
            name: band.getName(),
            musicGenre: band.getMusicGenre(),
            responsible: band.getResponsible()
        }
    }
}