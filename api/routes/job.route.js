import express from "express";
import {verifyToken} from '../utils/verifyUser.js';
import { create } from "../controllers/job.controller.js";


router.post('/create', verifyToken,create)
router.get('/getjobs',getjobs);
router.delete('/deletejob/:jobId/:userId',verifyToken,deletejob);
router.put('/updatejob/:jobId/:userId', verifyToken, updatejob);
export default router;