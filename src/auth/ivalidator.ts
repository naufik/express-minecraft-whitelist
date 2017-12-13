export default interface Validator {
	/** The validation function */
	(key: any): boolean;
}