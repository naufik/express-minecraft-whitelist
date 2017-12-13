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
		this.app.use(BodyParser.urlencoded({
			extended: true
		}));
	}

	public routes() {
		this.app.use('/', WhitelistRouter);
	}

}

export default new Server().app;