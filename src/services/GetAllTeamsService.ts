import { AppDataSource } from "../database"
import { Team } from "../entities/Team";


export class GetAllTeamsService {
    async execute() {
        const repo = AppDataSource.getRepository(Team);

        const teams = await repo.find();

        return teams;
    }
}