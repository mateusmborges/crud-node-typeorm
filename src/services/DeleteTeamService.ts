import { AppDataSource } from "../database"
import { Team } from "../entities/Team";


export class DeleteTeamService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Team);
        
        if(!await repo.findOne({ where: {id: id} })) {
            return new Error("Team does not exist.");
        }
        
        await repo.delete(id);
    }
}