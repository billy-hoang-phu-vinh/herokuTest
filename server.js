//require express, require express handlebars
const express = require("express");
const exphdb = require("express-handlebars");
const app = express();//call constructor ?
 
//set engine for view handle bar
app.engine("handlebars",exphdb());
app.set("view engine","handlebars");//middleware?
//html css javascript
app.use(express.static("public"));//for css and sources
//for javascript
const fake_data_called = require("./model/fakeDBdata");//in this case call its data and its functions


var bodyParser = require('body-parser');//get data from submit = "\anylink"
app.use(bodyParser.urlencoded({extended:false}));



//test body parser for SIGNIN page
app.post("/signIn_Form",(req,res)=> {
    console.log('run validate form');
    //get password to check <6 length -> false, console log cho nhanh what ?
    if (req.body.password <6) {
        console.log('under 6 char-> error');
    } else {
        console.log(`here is the LENGTH: ${req.body.password.length}`);
    }
    

    res.render("s",{
        //param for $handlebar
        title: "Signin webite"
    });
});
//route
app.get("/",(req,res)=> {
    console.log('ef');
    //using handlebar-> render
    res.render("s",{
        //param forwdwdw $handlebar
        title: "Signin webite",
        PARAM: fake_data_called.getthisfakeData()
    });
});
app.get("/backup",(req,res)=> {
    console.log('ef');
    //using handlebar-> render
    res.render("s",{
        //param forwdwdw $handlebar
        title: "Signin webite",
        PARAM: fake_data_called.getthisfakeData()
    });
});
//listen port
const port = 3000 || process.env.PORT;
app.listen(port,()=> {console.log('web start successfully');});
