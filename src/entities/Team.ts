import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("teams")
export class Team {
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    coach: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}