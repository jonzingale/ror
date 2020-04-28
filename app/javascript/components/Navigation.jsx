import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from "./Home";

// import TestTemplate from '@/pages/TestTemplate.jsx';
// import HaskellCoders from '@/pages/HaskellCoders.jsx';
// import SvgTemplate from '@/pages/SvgTemplate.jsx';
// import Explorable from '@/pages/Explorable.jsx';

// import Umeboshi from '@/pages/haskell_on_jupyter/Umeboshi.jsx';
// import HavelHakimi from '@/pages/haskell_on_jupyter/HavelHakimi.jsx';

class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleClick = (url) => {
    window.location = url
  }

  render() {
    const stub = 'https://github.com/jonzingale/Haskell/blob/master/'
    const jupyterUrl1 = stub + 'HaskellStudy/Lists/Documentation/'
    const jupyterUrl2 = stub + 'HaskellStudy/LinearAlgebra/ComplexVector/Documentation/'
    const jupyterUrl3 = stub + 'Attenuations/dev/Documentation/'

    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Navbar.Collapse>
              <Nav>
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>

                <NavDropdown title='HaskellSantaFe'
                  onClick={() => this.handleClick('/haskell-coding-group')}
                  onMouseEnter={ this.handleOpen }
                  onMouseLeave={ this.handleClose }
                  show={ this.state.isOpen }
                  role="navigation"
                >
                  <NavDropdown.Item href={jupyterUrl1 + 'Listables.ipynb'}>
                    Listable
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterUrl1 + 'Sortable.ipynb'}>
                    Sortable
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterUrl2 + 'Vector.ipynb'}>
                    Vector
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterUrl1 + 'AbelianActions.ipynb'}>
                    Abelian Zippers
                  </NavDropdown.Item>
                  <NavDropdown.Item href={jupyterUrl3 + 'HTF.ipynb'}>
                    HTF
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/haskell_on_jupyter/umeboshi'>
                    Umeboshi
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/haskell_on_jupyter/havel-hakimi'>
                    Havel-Hakimi
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="nav-link" href="/explorable">D3Journal</Nav.Link>
                <Nav.Link className="nav-link" href="/svg-template">SvgTemplate</Nav.Link>
                <Nav.Link href='https://github.com/jonzingale'>GitHub</Nav.Link>
                <Nav.Link href='/lights-game'>Lights Game</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" title='jonzingale@gmail.com'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <footer>jonzingale@gmail.com</footer>
      </div>
    );
  }
}

export default Navigation;