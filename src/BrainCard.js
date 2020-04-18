import React from 'react'

// bootstrap
import { Card, Button, Tab, Tabs } from 'react-bootstrap';
import gradient from 'random-gradient'



function BrainCard() {


    // return (<Card style={{ width: '18rem', background: 'linear-gradient(29deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%)' }}>
    //     <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //             Some quick example text to build on the card title and make up the bulk of
    //             the card's content.
    //     </Card.Text>
    //         {/* <Button variant="primary">Go somewhere</Button> */}
    //     </Card.Body>
    // </Card>)

    return (


        <Card style={{ borderWidth: '5px',}}>


            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{fontSize: '150%'}}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>

        </Card>

    )

}

export default BrainCard