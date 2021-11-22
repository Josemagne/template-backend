/* In TypeORM we talk of 'entities' instead of 'models'. */
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import config from "config";


// In brackets we give the entity its name in the db
@Entity('enterprise')
export class PersonEntity extends BaseEntity implements Person {
    @PrimaryColumn({
        type: "numeric",
        nullable: false
    })
    person_id: number;
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        type: "varchar"
    })
    email: string;

    @Column({
        type: "boolean",
        default: true
        , name: "is_alive"
    })
    is_alive: boolean;

    @Column({
        type: "simple-json"
        , name: "notes"
    })
    notes: string;

    @CreateDateColumn({

    })
    created_at: Date;

    @UpdateDateColumn({

    })
    updated_at: Date;
}