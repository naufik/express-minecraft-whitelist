import { Router, Request, Response, NextFunction } from 'express';
import Whitelister from '../customization';

const wl = Whitelister;

class WhitelistRouter {
	public router: Router;

	constructor(){
		this.router = Router();
		this.initRoutes();
	}

	public handleWhitelistRequest(req: Request, res: Response) {
		let out: boolean;
		console.log("post request received");
		if (req.body.key) {
			out = wl.whitelist(req.body.username, req.body.key);
		} else {
			out = wl.whitelist(req.body.username, {});
		}
		
		res.header("Access-Control-Allow-Origin", "*");		
		res.json({
			username: req.body.username,
			success: out
		});
	}
	public handleIsWhitelistedRequest(req: Request, res: Response) {
		res.header("Access-Control-Allow-Origin", "*");
		res.json({
			username: req.params.player,
			whitelisted: wl.isWhiteListed(req.params.player)
		});
	}

	public initRoutes() {
		this.router.post('/', this.handleWhitelistRequest);
		this.router.get('/:player', this.handleIsWhitelistedRequest);
		this.router.get('/', (req, res) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.send("Whitelist server active.");
		})
	}
}

export default new WhitelistRouter().router;