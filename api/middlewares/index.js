function isLogin(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.sendStatus(401);
  }

  module.exports=isLogin