import * as Path from 'path';
import * as Filesystem from 'fs'
import Validator from './auth/ivalidator';

/** Insert your relative path to minecraft's whitelist.txt here */

export default class Whitelister {
	private keyMatch: Validator;
	private keyNeeded: boolean;
	private pathToFile: string;

	constructor(file: string) {
		this.pathToFile = file;
	}

	public removeValidator() {
		this.keyNeeded = false;
		this.keyMatch = null;
	}

	public setValidator(keyFunction: Validator) {
		this.keyNeeded = true;
		this.keyMatch = keyFunction;
	}

	public read(): string[] {
		let contents: string;
		try {
			contents = Filesystem.readFileSync(this.pathToFile).toString();
		} catch (err) {
			contents = "";
			console.log("An IO error occured and no content is read.");
		}
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
				Filesystem.appendFileSync(this.pathToFile, name + "\n");
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
		return this.read().includes(name);
	}

}