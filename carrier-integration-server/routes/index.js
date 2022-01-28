import { Router } from 'express';
import { getAllCarriers, validate } from '../controllers/carrier.js';

const carrierRouter = Router();
carrierRouter.get('/', getAllCarriers);
carrierRouter.post('/validate/', validate);

const baseRouter = Router();
baseRouter.use('/carriers', carrierRouter);

export default baseRouter;