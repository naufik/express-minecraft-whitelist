import * as Path from 'path';
import * as Http from 'http';
import * as Filesystem from 'fs';
import * as Locutus from 'locutus';
import * as Crypto from 'crypto';
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
		
		this.getUUID(name, false);

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

	private getUUID(player: string, online: boolean): string {
		if (online) {
			/** set post request to Minecraft's UUID database */
			return "";
		} else {
			let uuid: string;

			/** Call UUID API */

			/** Try to manually compute UUID, this algorithm was extracted from Java Minecraft's source code - however */
			/** this seems to be incomplete as UUID's made this way are missing the two first characters. Will find ways to
				calculate them because an API call is more expensive. */
			// let md5 = Locutus.php.strings.hex2bin(Crypto.createHash('md5').update("OfflinePlayer:" + player).digest("hex"));
			// let char6 = String.fromCharCode(md5.charCodeAt(6) & 0x0f | 0x30);
			// let char8 = String.fromCharCode(md5.charCodeAt(8) & 0x3f | 0x80);
			// uuid = md5.substring(1,6) + char6 + md5.charAt(7) + char8 + md5.substring(9);

			return uuid;
		}
	}
}