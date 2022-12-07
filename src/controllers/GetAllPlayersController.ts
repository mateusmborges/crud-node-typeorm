import { Request, Response } from "express";
import { GetAllPlayersService } from "../services/GetAllPlayersService";

export class GetAllPlayersController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPlayersService();

        const players = await service.execute();

        return response.json(players);
    }
}