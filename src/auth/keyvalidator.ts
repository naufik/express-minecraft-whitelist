/**
	This file is used for my 'more sophisticated whitelisting method'.
	Which right now it is a 'simple password'.
*/
import * as Crypto from 'crypto';
import Validator from './ivalidator';

export default class KeyValidator {
	private hashedKey: string;
	public validationMethod: Validator;

	constructor(key: string) {
		this.hashedKey = Crypto.createHash('sha256')
			.update(key)
			.digest('base64');

		this.validationMethod = (key: any) => {
			if (Crypto.createHash('sha256').update(key.string).digest('base64') == this.hashedKey) {
				return true;
			}
			return false;
		}
	}
}