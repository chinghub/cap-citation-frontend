import React, {Component} from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import * as DataService from '../../service/CapCitationDataServiceClient';

export default class Case extends Component {

  constructor(props) {
    super(props);

    console.log("case id: ", props.match.params.id);

    this.state = {};
  }

  async componentDidMount() {
    // TODO - get case body etc
    const resp = await DataService.callDataService(
      "/",
      "/case",
      { capId: this.props.match.params.id}
    );

    this.setState({
      data: resp
    })
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col>
            <h3>CAP</h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {JSON.stringify(this.state.data)}
          </Col>
          <Col></Col>
        </Row>

      </Container>
    )
  }
}
