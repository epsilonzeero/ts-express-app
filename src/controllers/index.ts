import {Request, Response} from 'express';

export default class Controller {
	public static async get(req: Request, res: Response) {
		return res.json({success: true, data: ''});
	}

	public static async post(req: Request, res: Response) {
		return res.json({success: true, data: ''});
	}
}
