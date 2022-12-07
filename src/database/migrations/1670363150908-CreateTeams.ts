import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTeams1670363150908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "teams",
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
                        name: "coach",
                        type: "varchar"
                    }
                ]
            })
        );   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("teams");
    }

}
