import React from 'react'

// bootstrap
import { Card, Button, Tab, Tabs } from 'react-bootstrap';


class Game extends React.Component {


    render() {
        return (

            // <Card >
            //     <Card.Header>Quote</Card.Header>
            //     <Card.Body>
            //         <blockquote className="blockquote mb-0">
            //             <p>
            //                 {' '}GAME{' '}
            //             </p>
            //             <footer className="blockquote-footer">
            //                 Someone famous in <cite title="Source Title">Source Title</cite>
            //             </footer>
            //         </blockquote>
            //     </Card.Body>
            // </Card>

            <div style={{margin: '15px 15px 15px 15px'}}>
                "Game stuff will go here?"
                Notes:<br/>
                maybe keep a set of current things added so every time u click on one the brain components it adds or removes it from set? idek
                {/* <div style={{backgroundColor: 'grey', height: '1000px' }}>a</div> */}

                
            </div>
            
        )
    }

}

export default Game