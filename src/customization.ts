import * as Filesystem from 'fs';
/**
	This temporarily serves as a configuration file. Having a configurable part of the program allows you to go
	as nuts as possible, while having a simple config file does not allow maximum flexibility. I encourage modifying
	this express server as much as possible.

	Also I'm too lazy to write a config parser. Fields marked with [P] are intended to be moved to an independent config file.
*/

/** Import the Whitelister class, do not remove. */
import Whitelister from './whitelister';

/** Import different validation methods, if you have made a custom one, add them here. */
import PasswordValidator from './auth/keyvalidator';
import PeriodicValidator from './auth/periodicvalidator';

/** Path to the whitelist.txt textfile. [P] */
const WHITELIST_TXT = "../minecraft/whitelist.txt";

/** Creates a new Whitelister instance */
var instance = new Whitelister(WHITELIST_TXT);


/** Exports the whitelister instance, do not remove this code */
export default instance;