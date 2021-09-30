import express,{NextFunction,Request,Response, Router} from "express";
const userRouter = require( "../controllers/userController");


const router: Router = express.Router();

router.get("/dashboard", userRouter.dashboard )

module.exports = router;