import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class MainCard extends Component {
    render() {
        return (
            <div>
             <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props. image_url} style={{ width: '18rem' }}/>
  <Card.Body>
    <Card.Title>Title:{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.ingredients}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.handleAddToFav(this.props)}>Favourite</Button>
  </Card.Body>
</Card>   
            </div>
        )
    }
}

export default MainCard
