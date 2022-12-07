import { AppDataSource } from "../database"
import { Player } from "../entities/Players";


export class GetAllPlayersService {
    async execute() {
        const repo = AppDataSource.getRepository(Player);

        const players = await repo.find({
            relations: {
                team: true
            }
        });

        return players;
    }
}