import { AppDataSource } from "../database"
import { Team } from './../entities/Team';
import { Player } from "../entities/Players";

type PlayerRequest = {
    name: string;
    position: string;
    number: number;
    age: number;
    teamId: string;
}


export class CreatePlayerService {

    async execute({ name, position, number, age, teamId }:PlayerRequest ): Promise<Player | Error> {
        const repo = AppDataSource.getRepository(Player);
        const repoTeam = AppDataSource.getRepository(Team);

        if(!await repoTeam.findOne({ where: {id: teamId} })) {
            return new Error("Team does not exist.");
        }

        const player = repo.create({
            name,
            position,
            number,
            age,
            teamId,
        })

        await repo.save(player);

        return player;
    }
}