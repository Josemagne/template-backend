import { Request, Response, NextFunction } from "express";
import { AnyZodObject, Schema } from "zod"

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (err: any) {
        return res.status(400).send(err.errors);
    }
}

export default validate;