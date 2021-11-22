import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { PersonEntity } from '../model/Person.model';

/**
 * Returns all the persons
 * @param req Request
 * @param res Response
 */
export const getPersons = async (req: Request, res: Response) => {
    {
        const persons = await getRepository(PersonEntity).createQueryBuilder('persons').select("persons").from(PersonEntity, "persons");
        return persons;
    }

}