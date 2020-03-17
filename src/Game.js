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

            // <div style={{backgroundColor: '#6DD3CE', height: '100%'}}>
            <div>
                {/* <div style={{ margin: '15px 15px 15px 15px' }}>
                    "Game stuff will go here?"
                Notes:<br />
                    maybe keep a set of current things added so every time u click on one the brain components it adds or removes it from set? idek
                </div> */}

                {/* http://colormind.io/api-access/
                has an api for color pallete generation
                */}
                <div style={{backgroundColor: '#6DD3CE', height: this.props.internalPage.height}}>

                </div>

                <div style={{backgroundColor: '#C8E9A0', height: this.props.internalPage.height}}>

                </div>

                <div style={{backgroundColor: '#F7A278', height: this.props.internalPage.height}}>

                </div>
            </div>


        )
    }

}

export default Game