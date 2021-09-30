import express,{Application, NextFunction, Request, Response} from "express";
const userRouter = require("./routers/userRouter");
const app: Application = express();

app.use("/", (req: Request, res: Response, next: NextFunction):void => {
    console.log(`First Middleware`);

    // adding onto req object
    (req as any).timeNow = Date.now();
    next();
})

app.use("/api/user", userRouter);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    
    next( new Error(`There is no route with this ${req.originalUrl} path`))
});

// Global Error Handling Middleware

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    err.message = err.message ? err.message : "Global Middleware Handler"
    res.status(400).json({
        status: "fail",
        message: err.message
    })
});
const PORT: number = 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
});