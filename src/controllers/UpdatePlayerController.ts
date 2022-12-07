import { Request, Response } from 'express';
import { UpdatePlayerService } from '../services/UpdatePlayerService';

export class UpdatePlayerController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, position, number, age, teamId } = request.body;

        const service = new UpdatePlayerService();

        const result = await service.execute({ id, name, position, number, age, teamId });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        return response.json(result);
    }
}