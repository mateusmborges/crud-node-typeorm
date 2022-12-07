import { Request, Response } from 'express';
import { CreatePlayerService } from '../services/CreatePlayerService';


export class CreatePlayerController {
    async handle(request: Request, response: Response) {
        const { name, position, number, age, teamId } = request.body;

        const service = new CreatePlayerService();

        const result = await service.execute({ name, position, number, age, teamId });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        return response.json(result);
    }
}