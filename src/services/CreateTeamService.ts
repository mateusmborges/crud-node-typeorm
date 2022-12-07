import { AppDataSource } from "../database"
import { Team } from "../entities/Team";

type TeamRequest = {
    name: string;
    coach: string;
}


export class CreateTeamService {

    async execute({ name, coach }:TeamRequest ): Promise<Team | Error> {
        const repo = AppDataSource.getRepository(Team);

        if(await repo.findOne({ where: {name: name} })) {
            return new Error("Team already exists.");
        }

        const team = repo.create({
            name,
            coach
        })

        await repo.save(team);

        return team;
    }
}