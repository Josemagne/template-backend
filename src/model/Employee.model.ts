/* In TypeORM we talk of 'entities' instead of 'models'. */
import { Column Entity, PrimaryGeneratedColumn, } from "typeorm"
import config from "config";
import { PersonEntity } from './Person.model';


// In brackets we give the entity its name in the db
@Entity('employee')
export class EmployeeEntity extends PersonEntity {
    @PrimaryGeneratedColumn({})
    employee_id: number;
}