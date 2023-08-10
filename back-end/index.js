const express = require('express');
require('./db/config')//mongodb connection
const User = require('./db/userinfo');
const cors = require("cors");
const  Connection =require('./db/config');
const { connection } = require('mongoose');

//const jwt = require('jsonwebtoken');
//const jwtkey = "loginPage";

const app = express();
app.use(express.json());//middleware
app.use(cors());


app.post("/register", async (req, resp) => {

  //     const fun = async (req, resp)=>{
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  let result = await user.save();
  result = result.toObject() //it is function which change data into object
  delete result.password;


  /*jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send({ result: "something went wrong,please try after sometime" })
    }
    resp.send({ result, auth: token })

  })*/
})

app.post("/login", async (req, resp) => {
  console.log(req.body)//data obtained from db but, if email and password both get(or filled in login page) then only loged in
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");

   /* if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({ result: "something went wrong,please try after sometime" })
        }
        resp.send({ user, auth: token })
      })

    } else {
      resp.send({ result: "user not found" })
    }
*/
  } else {
    resp.send({ result: "user not found" })
  }
})

app.listen(5000,()=>{console.log("running in this port")})
Connection();