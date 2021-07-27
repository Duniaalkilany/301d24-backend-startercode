import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateFavs}>
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Tittle:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.title} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="ingredients">
    <Form.Label>ingredients:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.ingredients} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default UpdateForm
