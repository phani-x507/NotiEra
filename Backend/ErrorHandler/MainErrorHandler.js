	export function ErrorHandler (req,res,next){
		const error = new Error("The Requested Page is Not Found");
		error.status = 404 || 500;
		res.json({msg:'Internal Server Error'});
		next(error);
	} 
