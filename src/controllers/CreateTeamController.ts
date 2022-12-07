import { Request, Response } from 'express';
import { CreateTeamService } from '../services/CreateTeamService';


export class CreateTeamController {
    async handle(request: Request, response: Response) {
        const { name, coach } = request.body;

        const service = new CreateTeamService();

        const result = await service.execute({ name, coach });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        return response.json(result);
    }
}