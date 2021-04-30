const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {

        return next();
    }
    req.flash('error_msg', 'Not Authorizated');
    res.redirect('/users/singin');
}

module.exports = helpers;