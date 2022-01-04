const S = require("sequelize");
const db = require("../db/db");



class Favorite extends S.Model {}

Favorite.init(
  {
    movie: {
      type: S.STRING,
    },
    image:  {
        type:S.STRING
    },
   
   
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports=Favorite