import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Team } from "./Team"

@Entity("players")
export class Player {
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    position: string;

    @Column()
    number: number;

    @Column()
    age: number;

    @Column()
    teamId: string;

    @ManyToOne(() => Team)
    @JoinColumn({ name: "teamId" })
    team: Team;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}