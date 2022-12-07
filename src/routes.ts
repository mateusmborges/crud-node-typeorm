import { Router } from "express";
import { CreateTeamController } from './controllers/CreateTeamController';
import { GetAllTeamsController } from "./controllers/GetAllTeamsController";
import { DeleteTeamController } from "./controllers/DeleteTeamController";
import { UpdateTeamController } from './controllers/UpdateTeamController';
import { CreatePlayerController } from './controllers/CreatePlayerController';
import { GetAllPlayersController } from './controllers/GetAllPlayersController';
import { DeletePlayerController } from './controllers/DeletePlayerController';
import { UpdatePlayerController } from './controllers/UpdatePlayerController';

const routes = Router();

routes.post("/teams", new CreateTeamController().handle);
routes.get("/teams", new GetAllTeamsController().handle);
routes.delete("/teams/:id", new DeleteTeamController().handle);
routes.put("/teams/:id", new UpdateTeamController().handle);

routes.post("/players", new CreatePlayerController().handle);
routes.get("/players", new GetAllPlayersController().handle);
routes.delete("/players/:id", new DeletePlayerController().handle);
routes.put("/players/:id", new UpdatePlayerController().handle);

export { routes };