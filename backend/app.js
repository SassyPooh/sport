// import express application
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// bcrypt importation
const bcrypt = require("bcrypt");
// multer importation
const multer = require("multer");
// path importation (doesn't need installation)
const path = require("path");
// AXIOS importation
const axios = require("axios");
// jsonwebtoken importation
const jwt = require("jsonwebtoken");
// express session importation
const session = require("express-session");

// Security configuration

// connect to the data base
mongoose.connect("mongodb://127.0.0.1:27017/sport");
// import body-parser module
const bodyparser = require("body-parser");
// create a express application
const app = express();
// configuration of the body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// configuration of image (i guess)
app.use("/images", express.static(path.join("backend/images")));
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
};
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// express session configuration
const secretKey = "your-secret-key";
app.use(
  session({
    secret: secretKey,
  })
);

// security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, PATCH, PUT"
  );

  next();
});
//   Models importation
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");
const Stadium = require("./models/stadium");
// Buisness Logic : Get All matches
app.get("/matches", (req, res) => {
  console.log("here all matches");
  Match.find().then((docs) => {
    res.json({ matches: docs });
  });
});
// Buis,ess Logic : Get match by ID
app.get("/matches/:id", (req, res) => {
  console.log("here match id");
  // let matchId=req.params.id;
  // for (let i = 0; i < matchesData.length; i++) {
  //     if (matchId == matchesData[i].id) {
  //         res.json({match:matchesData[i]});
  //         break
  //     }

  // }
  // let findedMatch = matchesData.find((obj)=>{
  //     return obj.id==matchId;
  // });
  // res.json({match:findedMatch});
  Match.findById(req.params.id).then((doc) => {
    res.json({ match: doc });
  });
});
// Buisness Logic : add match
app.post("/matches", (req, res) => {
  console.log("here add match");
  let newMatch = new Match(req.body);
  // console.log("here add match",newMatch);
  // matchesData.push(newMatch);
  // res.json({msg: newMatch});
  newMatch.save();
  res.json({ msg: "match has been added" });
});
// Buisness Logic : Delete match
app.delete("/matches/:id", (req, res) => {
  console.log("here in delete matches");
  // let matchId=req.params.id;
  // for (let i = 0; i < matchesData.length; i++) {
  //     if (matchId == matchesData[i].id)
  //      {
  //        matchesData.splice(i,1);
  //        break
  //     }

  // }
  // res.json({match:true})
  Match.deleteOne({ _id: req.params.id }).then((response) => {
    console.log("match has been deleted", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "match has been deleted" });
    } else {
      res.json({ msg: "no match found with this id" });
    }
  });
});
// Buisness Logic : Update matches
app.put("/matches", (req, res) => {
  console.log("here in BL edit matches", req.body);
  // for (let i = 0; i < matchesData.length; i++) {
  //     if (updatedMatch.id == matchesData[i].id) {
  //         matchesData[i]=updatedMatch;
  //         break
  //     }
  // }
  // res.json({matchUpdated:true})
  Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("match has been updated", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ matchUpdated: true });
    } else {
      res.json({ matchUpdated: false });
    }
  });
});
app.get("/teams", (req, res) => {
  console.log("this is all teams");
  Team.find().populate("players").populate("stadium").then((docs) => {
    res.json({ teams: docs });
  });
});
// get all players info in the chosen team
app.get("/teams/:id/info", (req, res) => {
  Team.findById(req.params.id)
    .populate("players")
    .then((team) => {
      if (!team) {
        return res.json({ message: "Team not found" });
      }

      console.log("Team Players", team.players);
      res.json({ players: team });
    });
});
app.get("/teams/:id", (req, res) => {
  console.log("this is team by id");
  // let teamId = req.params.id;
  // let teamFound = teamsData.find((team)=>{
  //     return team.id = teamId
  // })
  Team.findById(req.params.id).then((doc) => {
    res.json({ team: doc });
  });
});
app.delete("/teams/:id", (req, res) => {
  console.log("this is delete team");
  Team.deleteOne({ _id: req.params.id }).then((response) => {
    console.log("match has been deleted", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "team has been deleted" });
    } else {
      res.json({ msg: "no team found with this id" });
    }
  });
});
app.put("/teams", (req, res) => {
  console.log("this is update team");
  Team.updateOne({ _id: req.body._id }, teamUpdated).then((updateResponse) => {
    console.log("team has been updated", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ matchUpdated: true });
    } else {
      res.json({ matchUpdated: false });
    }
  });
});
app.post("/teams", (req, res) => {
  console.log("this is add team");
  // let newTeam = new Team(req.body);
  // newTeam.save((err, doc) => {
  //   if (err) {
  //     res.json({ msg: "error" });
  //   } else {
  //     res.json({ msg: "team added" });
  //   }
  // });
  Stadium.findById(req.body.stadiumId).then((stadium)=>{
    if (!stadium) {
      res.json({msg:"stadium doesn't exist"})
    } else {
      let team = new Team({
        name:req.body.name,
        owner:req.body.owner,
        foundation:req.body.foundation,
        stadium: stadium._id
      })
      team.save((err,doc)=>{
        if (err) {
          res.json({msg:"team didn't add successfully"});
        } else {
          stadium.team = doc._id;
          stadium.save();
          res.json({msg:"added successfully"});
        }
      })
    }
  })
});
app.get("/players", (req, res) => {
  console.log("this is all teams");
  Player.find().then((docs) => {
    res.json({ players: docs });
  });
});
app.get("/players/:id", (req, res) => {
  console.log("this is team by id");
  // let playerId = req.params.id;
  // let playerFound = playersData.find((player)=>{
  //     return player.id = playerId
  // })
  Player.findById(req.params.id).then((doc) => {
    res.json({ player: doc });
  });
});
app.delete("/players/:id", (req, res) => {
  console.log("this is delete team");
  Player.deleteOne({ _id: req.params.id }).then((response) => {
    console.log("player has been deleted", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "player has been deleted" });
    } else {
      res.json({ msg: "no player found with this id" });
    }
  });
});
app.put("/players", (req, res) => {
  console.log("this is update team");
  Player.updateOne({ _id: req.body._id }, playerUpdated).then(
    (updateResponse) => {
      console.log("player has been updated", updateResponse);
      if (updateResponse.nModified == 1) {
        res.json({ matchUpdated: true });
      } else {
        res.json({ matchUpdated: false });
      }
    }
  );
});
app.post("/players", (req, res) => {
  Team.findById(req.body.idTeam).then((team) => {
    if (!team) {
      return res.json({ message: "Team not found" });
    }
    const player = new Player({
      name: req.body.name,
      position: req.body.position,
      nbr: req.body.nbr,
      age: req.body.age,
      team: team._id,
    });
    player.save((err, doc) => {
      team.players.push(player);
      team.save();
      res.json({ msg: "Player added successfully" });
    });
  });
});
app.post(
  "/users/signup",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    console.log("this is add user");
    User.findOne({ email: req.body.email }).then((doc) => {
      if (doc) {
        res.json({ msg: "email exist" });
      } else {
        bcrypt.hash(req.body.password, 8).then((passwordCrypted) => {
          console.log("crypted password is:", passwordCrypted);
          req.body.password = passwordCrypted;
          req.body.pfp = `http://localhost:3000/images/${req.file.filename}`;
          let newUser = new User(req.body);
          newUser.save((err, doc) => {
            if (doc) {
              res.json({ msg: "added successfully" });
            } else {
              res.json({ msg: "failed to add" });
            }
          });
          res.json({ msg: "user has been added" });
        });
      }
    });
  }
);
app.put("/users", (req, res) => {
  console.log("this is update user");
});
app.get("/users", (req, res) => {
  console.log("this is update user");
  User.find().then((users) => {
    res.json({ users: users });
  });
});
app.post("/users/login", (req, res) => {
  let result;
  console.log(req.body);
  //     User.findOne({email:req.body.email,password:req.body.pass}).then((doc)=>{
  //         if (doc) {
  //          res.json({msg:true})
  //         }else{
  //             res.json({msg:false})
  //         }
  // })
  // second way
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("the user that's found by email:", doc);
      if (!doc) {
        return res.json({ msg: "check your email" });
      }
      result = doc;
      return bcrypt.compare(req.body.password, doc.password);
    })
    .then((bcryptCompare) => {
      console.log("the result of compare :", bcryptCompare);
      if (bcryptCompare) {
        // If the user is valid, generate a JWT token
        const token = jwt.sign(
          {
            firstName: result.firstName,
            lastName: result.lastName,
            id: result._id,
            role:result.role
          },
          secretKey,
          {
            expiresIn: "1h",
          }
        );
        res.json({
          msg: "welcome back",
          token: token,
        });
      } else {
        res.json({ msg: "wrong pass" });
      }
    });
});
// api
app.post("/weather", (req, res) => {
  console.log("city:", req.body);
  let key = "3f031c2cfb434f2dab564ec03baa9bd5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
  axios.get(apiUrl).then((response) => {
    console.log("here API response", response.data);
    let weatherToSend = {
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    };
    res.json({ weather: weatherToSend });
    // if (response.data) {
    //   res.json({weather: response.data})

    // }else{
    //   res.json({weather: "check your city name"})
    // }
  });
});
app.post('/stadiums',(req,res)=>{
console.log("response from BE: add stadium",req.body );
let stadium = new Stadium(req.body);
stadium.save((err,doc)=>{
  if (err) {
    res.json({msg:"adding match failed"})
  } else {
    res.json({msg:"match added successfully"})
  }
})
});

app.get('/stadiums',(req,res)=>{
console.log('getting all stadiums...');
Stadium.find().then((docs)=>{
  res.json({stadiums:docs})
})
})

// make app importable in another files
module.exports = app;
