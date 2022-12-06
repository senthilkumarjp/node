//REST-Representational state transfer.
//new

//it is  basically a set of guidelines for how a client + server should communicate and perform CRUD operation on a given resource.

// GET /comments-list all comments
//POST /comments - create a new comment
//GET /comments/:id - get one comment(using ID)
//PATCH /comments/:id - update one comment
//DELETE /comments/:id -destroy one comment

const express =require('express');
const mongoose = require('mongoose');
const app =express();
const url="mongodb://localhost:27017/Alien";
// const port = process.env.

app.use(express.json());

mongoose.connect(url,(err)=>{
if(err){
    console.log(err);
    console.log('error')
}else{
    console.log('connect to db')
}
});

const Router = require('./routers/alien');
app.use('/',Router)

app.listen(4000,()=>{
    console.log('listen on port 4000');
})
