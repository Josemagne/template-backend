/* In TypeORM we talk of 'entities' instead of 'models'. */
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import config from "config";


// In brackets we give the entity its name in the db
/**
 * Data model that represents enterprises in the database
 */
@Entity('enterprises')
export class EnterpriseEntity extends BaseEntity implements Enterprise {
    @PrimaryColumn({
        type: "numeric",
        nullable: false
    })
    enterprise_id: number;

    @CreateDateColumn({

    })
    created_at: Date;

    @UpdateDateColumn({

    })
    updated_at: Date;
}