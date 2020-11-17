import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const leftcolumn = (props) => {
    return (
        <Container>
            <Row>
                <Col>{ this.props.children }</Col>
            </Row>
        </Container>
    )
}

export default leftcolumn;