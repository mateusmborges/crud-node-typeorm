import { AppDataSource } from "../database"
import { Player } from "../entities/Players";


export class DeletePlayerService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Player);
        
        if(!await repo.findOne({ where: {id: id} })) {
            return new Error("Player does not exist.");
        }
        
        await repo.delete(id);
    }
}