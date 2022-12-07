import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePlayers1670365597836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "players",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true   
                    },
                    {
                        name: "position",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "numeric",
                    },
                    {
                        name: "age",
                        type: "numeric",
                    },
                    {
                        name: "teamId",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_players_team",
                        columnNames: ["teamId"],
                        referencedTableName: "teams",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("players")
    }

}
