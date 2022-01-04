// server configs
const express = require("express");
const db = require("../api/db/db");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const User = require("../api/models/Users");

const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const models=require("../api/models")
const routes=require("../api/routes")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* app.use(express.json()); */

app.use(
  session({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ where: { id: id } })
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});
// routes
app.use("/api", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
});
