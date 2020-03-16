import React from 'react'

// bootstrap
import { Card, Button, Tab, Tabs } from 'react-bootstrap';


function BrainCard() {


    return (<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>)

}

export default BrainCard