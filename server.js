'use strict';
const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT;
const {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemController
}=require('./controllers/coffee.controller');

mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`, 
                {useNewUrlParser: true, useUnifiedTopology:true});

app.get('/',home);
app.get('/fav-list',getFavoriteCoffee);
app.get('/retreive',retreiveItemController);
app.post('/create',createItemController);
app.put('/update/:id',updateItemController);
app.delete('/delete/:id',deleteItemController);

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}` );
});