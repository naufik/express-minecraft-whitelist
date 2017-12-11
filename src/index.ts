import app from './minecraft';

/** The script used to start the server. */
app.listen(3000, (err) => {
	if(err){
		console.log(err);
	}
	console.log("started at 3k");

})