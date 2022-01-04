const Favorite = require("../models/Favorite");

class FavoriteController {
  static favorites(req, res, next) {
    Favorite.findAll({
      where: {
        userId: req.params.userId,
      },
    })
      .then((data) => res.send(data))
      .catch(next);
  }

  static addFavorites(req, res, next) {

    Favorite.create(req.body)
      .then((fav) => res.status(201).send(fav))
      .catch(next);
  }

  static delete(req,res,next)  {
  Favorite.destroy(  {where: {
    userId:req.body.userId,
    id:req.body.id
   },})
  .then(()=>   { return res.sendStatus(204)  }
  
  )}
}

module.exports = FavoriteController;
