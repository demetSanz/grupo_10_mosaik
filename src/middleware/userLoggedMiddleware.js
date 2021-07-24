const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let loggedUser = req.session.userLogged;
	
	console.log(loggedUser + " estoy aca");
	
	db.User.findOne({
			where:{
				email: loggedUser
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