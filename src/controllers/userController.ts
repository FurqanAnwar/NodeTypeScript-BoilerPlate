import { Request, Response, NextFunction } from "express";


exports.dashboard = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to dashboard"
    })
}

