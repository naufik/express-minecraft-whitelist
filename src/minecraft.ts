import * as Express from 'express';
import * as BodyParser from 'body-parser';
import WhitelistRouter from './routes/whitelist';

class Server {
	public app: Express.Application;

	constructor() {
		this.app = Express()
		this.config();
		this.routes();
	}

	public config() {
		this.app.use(BodyParser.json());
	}

	public routes() {
		let router = Express.Router();
		router.get('/', (req, res) => {
			res.send('lmao nice try hacker');
		});

		this.app.use('/wl', WhitelistRouter);
	}

}

export default new Server().app;