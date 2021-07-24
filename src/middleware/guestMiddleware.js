function guestMiddleware (req, res, next){
    if (req.session.userLogged){
        return res.redirect ('/users/detail')
    }
    next();
}

module.exports = guestMiddleware;