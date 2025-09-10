import express from "express";
import {protectRoute} from "../middleware/protectRoute.js"
import { getNotifications,deleteNotifications,deleteOneNotifications } from "../controllers/notifications.controller.js"


const router = express.Router();

router.get('/',protectRoute,getNotifications)
router.delete('/delete',protectRoute,deleteNotifications)
router.delete('/delete/:id',protectRoute,deleteOneNotifications)


export default router