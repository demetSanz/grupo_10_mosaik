const User= require('../models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email',emailInCookie)

    if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		// Verificar los campos que arroja el userLogged
		// let userConsole = res.locals.userLogged
        // console.log(JSON.stringify(userConsole)+' EL USER')
	}



	next();
}

module.exports = userLoggedMiddleware;