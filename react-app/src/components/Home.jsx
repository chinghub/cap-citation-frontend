import React, { Component } from 'react';
import {
  Button,
  Form,
  Container, Row, Col
} from 'react-bootstrap';

//import * as ServiceClient from '../service/CapCitationDataServiceClient';
import {callDataService} from  '../service/CapCitationDataServiceClient';

const Picker = () => {
  return (
    <div>

      <Form>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control as="select">
            <option>WA</option>
            <option>OR</option>
          </Form.Control>

        </Form.Group>

        <Form.Group>
          <Form.Label>Court</Form.Label>
          <Form.Control as="select">
            <option>Supreme</option>
            <option>Appeals</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control as="select">
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </Form.Control>
          <Form.Control as="select">
            {
              Array(26).fill().map((x,i)=><option key={i}>{1994+i}</option>)
            }
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Get Data</Button>
      </Form>

    </div>

  );
}

export default class Home extends Component {

  async componentDidMount() {
    //const resp = ServiceClient.callDataService("", "", {});
    const resp = await callDataService("", "", {});
    console.log(resp);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Picker/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
