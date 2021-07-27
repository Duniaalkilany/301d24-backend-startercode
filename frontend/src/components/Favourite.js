import axios from 'axios'
import React, { Component } from 'react'
import { CardGroup,Spinner } from 'react-bootstrap'
import FavouriteCard from './FavouriteCard'

import UpdateForm from './UpdateForm'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Favourite extends Component {
    constructor(props){
        super(props)
        this.state={
            favData:[],
            choosenToUpdate:{},
            showForm:false

        }
    }


    //=========================================
    componentDidMount=()=>{
        axios.get(`${serverUrl}/fav-list`).then(response=>{
            this.setState({
                favData:response.data
            })
        }).catch(error=>alert(error.message))

    }
    //=================================================


    deleteFavs=async(item)=>{
await axios.delete(`${serverUrl}/delete/${item.id}`).then(
    response=>{

    }
).catch(error=>alert(error.message))
axios.get(`${serverUrl}/fav-list`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))

    }

//================================================
    showUpdateForm=(item)=>{
        this.setState({
            choosenToUpdate:item,
            showForm:!this.state.showForm 
        })
    }

    //=====================================
updateFavs=async(e)=>{
    e.preventDefault()
    const id= this.state.choosenToUpdate.id
    const reqBody={
        title:e.target.title.value,
        ingredients:e.target.ingredients.value
    }
    await axios.put(`${serverUrl}/update/${id}`,reqBody).then(response=>{
        this.setState({
            showForm:false
        })
    }).catch(error=>alert(error.message))
    axios.get(`${serverUrl}/fav-list`).then(response=>{
        this.setState({
            favData:response.data
        })
    }).catch(error=>alert(error.message))

}


    render() {
        return (
            <div>


                {
                    this.state.showForm&&
                    <UpdateForm
                    updateFavs={this.updateFavs}
                    item={this.state.choosenToUpdate}
                    />
                }
               {
                   this.state.favData.length>0?
                   <CardGroup>
{
    this.state.favData.map((value,idx)=>{
        return(
            <FavouriteCard
            
            id={value.id}
            title={value.title}
            ingredients={value.ingredients}
            image_url={value.image_url}
            key={idx}
            showUpdateForm={this.showUpdateForm}
            deleteFavs={this.deleteFavs}
            
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

export default Favourite
