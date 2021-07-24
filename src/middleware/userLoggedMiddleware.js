const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let loggedUser = req.session.userLogged;
	
	db.User.findOne({
			where:{
				email: loggedUser
			}
		})
		.then(function(loggedUser){
		
			let UserFound = loggedUser
			// console.log(UserFound.name + " estoy aca")

			if(UserFound){
			req.session.userLogged = UserFound;
			}

    		if (req.session.userLogged) {
			res.locals.isLogged = true;
			res.locals.userLogged = UserFound;
			
			}
		}
	);



	next();
}

module.exports = userLoggedMiddleware;