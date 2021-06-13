import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button, Row, Form } from 'react-bootstrap';
export class Marvel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API: process.env.REACT_APP_API,
      marvelData: [],
      name: '',
      slug: '',
      showForm: false
    }
  }
  componentDidMount = async () => {
    const getRequest = await axios.get(`${this.state.API}/marvel/fav`);
    this.setState({
      marvelData: getRequest.data
    })
  }
  deleteData = async (slug) => {
    const deleteRequest = await axios.delete(`${this.state.API}/marvel/fav/${slug}`);
    this.setState({
      marvelData: deleteRequest.data
    })
  }
  updateSlug = async (slug) => {
    console.log(slug);
    this.setState({
      slug: slug,
      showForm: true
    })
  }
  updateName = async (e) => {
    e.preventDefault();
    this.state = {
      name: e.target.value
    }
    console.log(this.state.slug);
  }
  updateData = async (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name
    }
    console.log('update', this.state.slug);
    const updateRequest = await axios.put(`${this.state.API}/marvel/fav/${this.state.slug}`, body);
    this.setState({
      marvelData: updateRequest.data
    })
  }
  render() {

    const rendering = <Row xs={1} md={4} className="g-3" >
      {this.state.marvelData.map((data, idx) => {
        return (<div key={idx}>
          <Card style={{ width: '18rem', height: '45rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Footer>{data.modified}</Card.Footer>
              <Button variant="danger" onClick={() => this.deleteData(data.slug)}>Delete</Button>
              <Button variant="primary" onClick={() => this.updateSlug(data.slug)}>Update This</Button>

            </Card.Body>
          </Card>
          <br />
        </div>
        )
      })
      }
    </Row>
    return (
      <div>
        {this.state.showForm &&
          <Form onSubmit={(e) => this.updateData(e)}>
            <Form.Control onChange={this.updateName} type='text' />
            <Button variant="primary" type='submit' value='Update'>Update</Button>
          </Form>
        }
        {rendering}
      </div>
    )
  }
}

export default Marvel
