import * as Crypto from 'crypto';
import * as Filesystem from 'fs';
import Validator from './ivalidator';

/**
	Another validation method, the validation method this time is a 'periodic password' in which
	the password changes as time changes.
*/

export default class PeriodicValidator {
	private keyStructure;
	public validationMethod: Validator;

	constructor(keyStruct) {
		this.keyStructure = keyStruct;

		this.validationMethod = (key) => {
			if (!key.first && !key.second) {
				return false;
			}
			/** Is this lazy evaluated? */
			let date = new Date();
			let minuteIndex = date.getMinutes();
			let dayIndex = date.getDate();

			let a = keyStruct.first[parseInt((minuteIndex / 10).toString())];
			let b = keyStruct.second[dayIndex % 10];
			
			if (key.first == a && key.second == b) {
				return true;
			}
			return false;
		};
	}
}