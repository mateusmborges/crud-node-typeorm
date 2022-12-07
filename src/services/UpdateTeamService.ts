import { AppDataSource } from "../database"
import { Team } from "../entities/Team";

type TeamUpdateRequest = {
    id: string;
    name: string;
    coach: string;
}

export class UpdateTeamService {
    async execute({ id, name, coach }: TeamUpdateRequest) {
        const repo = AppDataSource.getRepository(Team);

        const team = await repo.findOne({ where: {id: id} });

        if (!team) {
            return new Error("Team does not exist.");
        }

        team.name = name ? name : team.name;
        team.coach = coach ? coach : team.coach;

        await repo.save(team);

        return team;
    }
}