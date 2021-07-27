import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
            <div>
              < Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} style={{ width: '18rem' }} />
  <Card.Body>
    <Card.Title>Title:{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.ingredients}
    </Card.Text>
    <Button variant="primary"onClick={()=>this.props.deleteFavs(this.props)}  >Delete</Button>
    <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props)}  >update</Button>
  </Card.Body>
</Card>    
            </div>
        )
    }
}

export default FavouriteCard
