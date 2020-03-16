import React from 'react'

import { Col, Container, Row, Button, Card } from 'react-bootstrap';

import BrainCard from './BrainCard'

class Scans extends React.Component {


    constructor() {
        super()
        this.state = {
          
        }
      }

    getScans() {
        let brainScans = [];
        for (var i = 0; i < 20; i++) {
            brainScans.push(<BrainCard/>);
        }


        //now need to create the rows for display purposes
        //so every three
        for (var i = 0; i < brainScans.length; i += 3) {
            for (var j = i; j < brainScans.length || j < j + 3; j++) { //so prevent from going out of bounds on every three elems

            }
        }
    }

    render() {
        return (
            <>
                <div style={{ margin: '15px 15px 15px 15px' }}>
                    "the grid of scans and the cards to view pics and data in more detail will go here?"
            </div>

                <Container>
                    <Row style={{paddingBottom: '10px'}}>
                        <Col>
                            <BrainCard/>
                        </Col>
                        <Col>
                        <BrainCard/>
                        </Col>
                        <Col>
                        <BrainCard/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default Scans