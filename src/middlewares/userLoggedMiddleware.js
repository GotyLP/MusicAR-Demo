 const User = require('../models/User')
 
 const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;

    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findFirstByField('email', emailInCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    next();
}

module.exports = userLoggedMiddleware;