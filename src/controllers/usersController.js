const path = require('path');

let usersController ={
    
    login:function(req, res) {
        res.render('login');
    } ,

    register: function(req, res) {
        res.render('register');
    },

}

module.exports = usersController;