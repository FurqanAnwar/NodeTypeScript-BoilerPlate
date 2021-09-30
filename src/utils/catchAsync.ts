import express, { Handler, NextFunction}from "express";

const catchAsync = (controllerFunction: (req:Request, res:Response, next:NextFunction) => void) => {
    return (req: Request, res: Response, next: NextFunction) => {
        /* Since .cath isn't present in controllerFunction interface
           thus ignoring that part by saying as any  */
        (controllerFunction(req, res, next) as any).catch(next);
    }
}

module.exports = catchAsync;
