import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

function Welcome(){

    return(
        <Link to='/list' className="none">
            <div className="tap">
                <Container>
                    <Row>
                        <Col className="welcomeText">
                            <h1>Welcome to <b>THE LAB</b></h1>
                            <p><i>Tap Here To Enter</i></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Link>
        
    );
 
    
}

export default Welcome;            


