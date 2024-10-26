import express from 'express';
import {testApi} from '../controller/testApi.js'
const router = express.Router();

const initApiRoutes = (app) => {
    router.get("/test",testApi)
 
    return (app.use("/api/v1/", router))
}

export default initApiRoutes;