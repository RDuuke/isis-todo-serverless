import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateDto(dtoClass: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dtoObject = plainToInstance(dtoClass, req.body);
            const errors = await validate(dtoObject, req.body);
            if (errors.length) {
                return res.status(400).json({ error: Object.values(errors[0].constraints!).join(', ') });
            }
            req.body = dtoObject;
            next();
        } catch (error) {
            next(error);
        }
    };
}