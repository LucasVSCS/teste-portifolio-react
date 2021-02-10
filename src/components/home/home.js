import React from 'react'

import { Row, Col, Card } from 'react-materialize'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      {/* User Profile */}
    </Col>

    <Col m={8} s={12}>
      <h5 className='subtitle'>About Me</h5>
      <Card>
        <div>
          <p>
            <b>Lorem</b>
          </p>

          <p>
            Consequat consectetur excepteur proident cillum. Pariatur do enim
            enim ut excepteur minim nisi duis cupidatat esse officia minim
            eiusmod duis. Id deserunt nisi anim do nostrud ullamco in tempor. Et
            anim ea anim proident laboris ad ut reprehenderit elit cillum
            incididunt eiusmod.
          </p>

          <br />

          <p>
            <b>Lorem</b>
          </p>

          <p>
            Anim esse ad sint nulla ipsum ullamco duis aute nisi laborum.Officia
            adipisicing Lorem cillum eiusmod ipsum nisi culpa elit culpa ullamco
            nisi aliqua labore quis. Reprehenderit sint eiusmod laborum pariatur
            id aliquip. Officia tempor irure proident qui nulla anim aliquip
            mollit exercitation. Pariatur quis eu tempor aliquip eu non eu quis
            elit cupidatat velit.
          </p>
        </div>
      </Card>
      <h5 className='subtitle'>Experiences</h5>
      {/* Experience */}
    </Col>
  </Row>
)

export default Home
