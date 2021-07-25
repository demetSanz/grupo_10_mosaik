// const db = require('../database/models');


// function userLoggedMiddleware(req, res, next) {
// 	res.locals.isLogged = false;
	
// 	let emailInCookie=req.cookies.userEmail;

// 		db.User.findOne({include:['roles'],
// 			where:{
// 				email:emailInCookie

// 			}
			
// 		})
// 		.then(loggedUser=>{
			
// 			console.log(loggedUser.name +" quien soy ")		 
	

// 			if(loggedUser){
// 			req.session.userLogged =loggedUser.email;
// 			}

//     		if (req.session.userLogged) {
// 			res.locals.isLogged = true;
// 			res.locals.userLogged =loggedUser;
			
// 			}

// 			return loggedUser
// 		}
// 	)
// 	.catch(e=>console.log(e));



// 	next();
// }

// module.exports = userLoggedMiddleware;

/********************************************************************** */
 const User= require('../models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie=req.cookies.userEmail;
	let userFromCookie= User.findByField('email',emailInCookie)

	if(userFromCookie){
		req.session.userLogged=userFromCookie;
	}


    if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}




next();
}

module.exports = userLoggedMiddleware;