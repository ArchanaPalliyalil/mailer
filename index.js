const express =require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app= new express;

const homeRouter = require('./src/routes/homerouter');
const mailerRouter = require('./src/routes/mailerrouter');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/home',homeRouter); 
app.use('/mailer',mailerRouter);





app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './src/views/welcome.html'));

    // res.send("Welcome to coding competition,Archana Raj,Norka B3");
});
app.listen(process.env.PORT || 3030,()=>{

    console.log("Listening to port 3030");
});