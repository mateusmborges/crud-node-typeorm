import { Request, Response } from 'express';
import { UpdateTeamService } from '../services/UpdateTeamService';

export class UpdateTeamController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, coach } = request.body;

        const service = new UpdateTeamService();

        const result = await service.execute({ id, name, coach });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        return response.json(result);
    }
}