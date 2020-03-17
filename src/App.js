import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useLocation
} from "react-router-dom";


import { Card, Button, Tab, Tabs, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import './App.css';
import Game from './Game'
import BrainCard from './BrainCard'
import Scans from './Scans'

function page2() {
  return ("page 2")
}

function Welcome() {
  return ("Welcome Page")
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      // test: "Yes",
      // currentTab: "Home"
    }
  }

  render() {
    return (

      <Router>

        {/* <Route path="/" component={Game}>
          <Route path="page1" component={Game} />
          <Route path="page2" component={page2} />
        </Route> */}

        {/* 
          So pass the state down and edit the currenttab from down there? so that the current page is displayed right? 
          Ill set up the proper page routing later?
        */}
        {/* <Tabs>
          <Tab style={{ backgroundColor: 'white' }} eventKey="game" title="Play Game">
            <div>

              <Game />
            </div>
          </Tab>
          <Tab eventKey="data" title="View EEG Data">

          </Tab>
        </Tabs> */}
        
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="game">Game</Nav.Link>
              <Nav.Link href="scans">View Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Card className="internalPadding" style={{margin: '15px', height: '85vh', borderWidth: '15px', overflow: 'scroll'}}>

        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/game">
           
              <Game />
            
          </Route>
          <Route path="/scans">
              {/* <BrainCard/> */}
              <Scans/>
          </Route>
        </Switch>
        </Card>


      </Router>


    )
  }

}

export default App
// export default function App() {

//   const [key, setKey] = useState('home');


//   return (
//     <Router>

//       <h2>Key:<br></br>{key}</h2>
//       <Tabs activeKey={key} onSelect={k => {setKey(k);}}>
//         <Tab eventKey="home" title="Home">
//           <Link to="/about">profile</Link>
//         </Tab>
//         <Tab eventKey="profile" title="Profile">

//         </Tab>

//       </Tabs>


//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//     </Router>
//   );
// }

// function Home() {
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     fetch('/time').then(res => res.json()).then(data => {
//       setCurrentTime(data.time);
//     });
//   }, []);

//   return (
//     <h2>The current time is {currentTime}.</h2> 
//   );
// }

// function About() {
//   return <h2>About</h2>;
// }


