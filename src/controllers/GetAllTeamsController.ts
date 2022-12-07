import { Request, Response } from "express";
import { GetAllTeamsService } from '../services/GetAllTeamsService';

export class GetAllTeamsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllTeamsService();

        const teams = await service.execute();

        return response.json(teams);
    }
}