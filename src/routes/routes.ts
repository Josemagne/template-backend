import { Express, Request, Response } from "express"
import { getPersons } from '../controller/person.controller';
const routes = (app: Express) => {
    app.get("/api", (req: Request, res: Response) => {
        res.sendStatus(200);
    })
}

export default routes