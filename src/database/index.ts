import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "mateus",
    password: "password",
    database: "wc2022",
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/entities/*.ts"],
});

AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error));


export { AppDataSource }