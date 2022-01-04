const modelsFavorite =require("./Favorite")
const modelsUser=require("./Users")


modelsUser.hasMany(modelsFavorite,  {as:"userId"})

module.exports= {modelsUser,modelsFavorite}