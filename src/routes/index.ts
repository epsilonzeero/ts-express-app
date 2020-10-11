import express, {Router} from 'express';
import Controller from '../controllers/index';

const router: Router = express.Router();
router.route('/')
	.get(Controller.get)
	.post(Controller.post);

export default router;
