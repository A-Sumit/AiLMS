import express from 'express';
import { createLead, getAllLeads } from '../controllers/leadController.js';
import { verifyAdmin } from '../middleware/auth.js';
import { updateLeadStatus } from '../controllers/leadController.js';
import { deleteLead } from '../controllers/leadController.js';



const router = express.Router();

router.post('/leads', createLead);
router.get('/leads', verifyAdmin, getAllLeads); 
router.patch('/leads/:id/status', verifyAdmin, updateLeadStatus);
router.delete('/leads/:id', verifyAdmin, deleteLead);

export default router;