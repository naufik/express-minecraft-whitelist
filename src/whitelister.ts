import * as Path from 'path';
import * as Filesystem from 'fs';
import Validator from './ivalidator';

/** Insert your relative path to minecraft's whitelist.txt here */
const WHITELIST_TXT = "mantap.txt";

export default class Whitelister {
	private keyMatch: Validator;
	private keyNeeded: boolean;

	public setValidator(keyFunction: Validator) {
		this.keyNeeded = true;
		this.keyMatch = keyFunction;
	}

	public read(): string[] {
		let contents = Filesystem.readFileSync(WHITELIST_TXT).toString();
		return contents.split('\n');
	}

	public whitelist(name: string, key: any): boolean {
		if (this.keyNeeded) {
			if(key && !this.keyMatch(key)) {
				return false;
			}
		}
		if (!this.isWhiteListed(name)) {
			try {
				Filesystem.appendFileSync(WHITELIST_TXT, name + "\n");
				return true;
			} catch(err) {
				/** Doesn't catch the error at this time, might want to change that */
				return false;
			}
		}

		/** Return false by default if unsuccessful. */
		return false;
	}

	public isWhiteListed(name: string): boolean {
		try {
			return this.read().includes(name);
		} finally {
			return false;
		}
	}

}