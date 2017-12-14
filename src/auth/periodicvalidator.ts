import Validator from './ivalidator';

/**
	This is experimental validation method that will be removed soon.
	Due to lack of customizability, and this is only useful for personal use.
*/

export default class PeriodicValidator {
	private keyStructure;
	public validationMethod: Validator;

	constructor(keyStruct) {
		this.keyStructure = keyStruct;

		this.validationMethod = (key) => {
			if (!key.string) {
				return false;
			}
			/** Is this lazy evaluated? */
			let date = new Date();
			let minuteIndex = date.getMinutes();
			let hourIndex = date.getHours() % 12 == 0 ? 12 : date.getHours() % 12;

			let a = keyStruct.first[parseInt((minuteIndex / 10).toString())];
			let b = keyStruct.second[hourIndex % 10];
			
			if (key.string == a + b) {
				return true;
			}
			return false;
		};
	}
}