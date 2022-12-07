import { Request, Response } from "express";
import { DeleteTeamService } from "../services/DeleteTeamService";

export class DeleteTeamController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteTeamService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}