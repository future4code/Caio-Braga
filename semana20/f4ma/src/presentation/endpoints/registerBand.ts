import {Request, Response} from 'express';
import {BandDatabase} from '../../data/bandDatabase';
import {GetBandInfoUC} from '../../business/usecase/getBandInfo';

export const registerBandEndpoint = async (req: Request, res: Response) => {
    try {
        const bandId = BandDatabase

        const useCase = new GetBandInfoUC()

        // const input = {
        //     bandId
        // }

        //const bandInfo = await useCase.execute(input)
    }
}