const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie=req.cookies.userEmail;
	
	console.log(emailInCookie + " estoy aca");
	
	db.User.findOne({
			where:{
				email:emailInCookie
			}
		})
		.then(function(response){
		//	console.log(userFromCookie)
			let userFromCookie = response[0]
			if(userFromCookie){
			req.session.userLogged=userFromCookie;
			}

    		if (req.session.userLogged) {
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
			}
		}
	);



	next();
}

module.exports = userLoggedMiddleware;