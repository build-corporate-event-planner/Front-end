import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

export default function Home() {
  return (
    <div className='home'>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">MOGUL FESTZ</h1>
          <p className="lead">This is the event planner home page.</p>
          <p>Select <a href='./events'>Events</a> to get started.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}
