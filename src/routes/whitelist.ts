import { Router, Request, Response, NextFunction } from 'express';
import Whitelister from '../whitelister';

const wl = new Whitelister();

class WhitelistRouter {
	public router: Router;

	constructor(){
		this.router = Router();
		this.initRoutes();
	}

	public handleWhitelistRequest(req: Request, res: Response) {
		let out: boolean;
		if (req.body.key) {
			out = wl.whitelist(req.body.player, req.body.key);
		} else {
			out = wl.whitelist(req.body.player, {});
		}
		res.send(out);
	}

	public handleIsWhitelistedRequest(req: Request, res: Response) {
		res.send(wl.isWhiteListed(req.params.player));
	}

	public initRoutes() {
		this.router.post('/', this.handleWhitelistRequest);
		this.router.get('/:player', this.handleIsWhitelistedRequest);
	}
}

export default new WhitelistRouter().router;