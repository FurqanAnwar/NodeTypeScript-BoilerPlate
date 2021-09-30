

class AppError extends Error {
    
    constructor(message: string, statusCode: number) {
        super(message);
        (this as any).statusCode = statusCode;
        (this as any).status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        (this as any).isOperational = true;
        

       Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = AppError;