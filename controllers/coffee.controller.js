'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');
const express=require('express')
const apiUrl=process.env.API_URL

// Endpoint for testing
const home=(req,res)=>{
// provide your logic here
res.send('Hello From The Back End')
}
// Call the coffee api here and return the results
const retreiveItemController=(req,res)=>{

axios.get('https://coffeepedias.herokuapp.com/coffee-list/').then(response=>{
    res.send(response.data)
}).catch(error=>res.send(error.message))

};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
    coffeeModel.find({},(error,data)=>{
        if(error){res.send(error.meesage)}else{
            res.send(data)
        }
    })

}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
const{id,title,ingredients,image_url}=req.body
coffeeModel.find({id:id},(error,data)=>{
    if(data.length>0){
        res.send('already exist')
    }else{
        const newcoffeeModel = new coffeeModel({
            id:id,
            title:title,
            ingredients:ingredients,
            image_url:image_url
        })
        newcoffeeModel.save()
        res.send( newcoffeeModel)

    }
})

};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
const choosenId=req.params.id
const{title,ingredients}=req.body
coffeeModel.findOne({id:choosenId},(error,data)=>{
if (error){
    res.send(error.meesage)
}else{
    data.title=title
    data.ingredients=ingredients
    data.save(
        res.send(data)
    )
}
})
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
const id=req.params.id
coffeeModel.deleteOne({id:id},(error,data)=>{
if(error){res.send(error.meesage)}else{
    res.send(data)
}
})

};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemController
};