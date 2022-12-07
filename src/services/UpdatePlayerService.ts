import { AppDataSource } from "../database"
import { Player } from "../entities/Players";
import { Team } from "../entities/Team";

type PlayerUpdateRequest = {
    id: string;
    name: string;
    position: string;
    number: number;
    age: number;
    teamId: string;
}

export class UpdatePlayerService {
    async execute({ id, name, position, number, age, teamId }: PlayerUpdateRequest) {
        const repo = AppDataSource.getRepository(Player);

        const player = await repo.findOne({ where: {id: id} });

        if (!player) {
            return new Error("Player does not exist.");
        }

        player.name = name ? name : player.name;
        player.position = position ? position : player.position;
        player.number = number ? number : player.number;
        player.age = age ? age : player.age;
        player.teamId = teamId ? teamId : player.teamId;

        await repo.save(player);

        return player;
    }
}