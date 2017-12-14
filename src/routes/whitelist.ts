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
		if (req.body.key) {
			out = wl.whitelist(req.body.username, req.body.key);
		} else {
			out = wl.whitelist(req.body.username, {});
		}
		
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

	public handleCorsRequest(req: Request, res: Response) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "POST, GET");
		res.header("Access-Control-Allow-Headers", "Content-Type");
		res.json({
			allow: (req.method == "GET" || req.method == "POST")
		})
	}

	public initRoutes() {
		this.router.post('/', this.handleWhitelistRequest);
		this.router.get('/:player', this.handleIsWhitelistedRequest);
		this.router.get('/', (req, res) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.send("Whitelist server active.");
		});
		this.router.options('/', this.handleCorsRequest)
	}
}

export default new WhitelistRouter().router;