import axios from 'axios'
import React, { Component } from 'react'
import { CardGroup,Spinner } from 'react-bootstrap'

import MainCard from './MainCard'
const serverUrl=process.env.REACT_APP_SERVER_URL

export class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            coffeData:[]
        }
    }
    //=========================================

    componentDidMount=()=>{
axios.get(`${serverUrl}/retreive`).then(response=>{
    this.setState({
        coffeData:response.data 
    })
}).catch(error=>alert(error.message))
    }
    //===========================================

    handleAddToFav=(item)=>{
const reqBody={
    id:item.id,
    title:item.title,
    ingredients:item.ingredients,
    image_url:item.image_url
}
axios.post(`${serverUrl}/create`,reqBody).then(response=>{
    if(response.data==='already exist'){
        alert('already in your favourite list')
    }else{
        alert('added successfully')
    }
}).catch(error=>alert(error.message))
    }
    render() {
        return (
            <div>
              {
                  this.state.coffeData.length>0?
                  <CardGroup>
{
    this.state.coffeData.map((value,idx)=>{
        return(
            <MainCard
            id={value.id}
            title={value.title}
            ingredients={value.ingredients}
            image_url={value.image_url}
            key={idx}
            handleAddToFav={this.handleAddToFav}
            
            />
        )
    })
}
                  </CardGroup>:
                  <Spinner animation="border" variant="primary" />
              }  
            </div>
        )
    }
}

export default Main
