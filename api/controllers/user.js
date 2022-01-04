const   User=require("../models/Users")

class UserControllers  {

static users(req,res,next)  {
User.findAll()
    .then((user) => res.send(user))
    .catch(next);

}

}

module.exports=UserControllers