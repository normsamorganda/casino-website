import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarTop = () => {
  return (
    <>
    <div className='bg-gold'>
    <Container className='d-none d-lg-block'>
      <Row>
          <ul className="d-flex align-items-center m-0">
            <li className="list-group-item py-2 px-2 font-weight-bold text-uppercase">
              <i className="bi bi-house-fill"></i>
            </li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Sports</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Live Casino</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Slots</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Games</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Lottery</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Super Bull</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Poker</li>
            <li className="list-group-item p-2 mx-4 f-bold text-uppercase">Promos</li>
        </ul>
      </Row>
    </Container>
    </div>


    {/* will show in smaller device */}

    <div className='bg-gold d-sm-block d-lg-none'>
    <Navbar key='lg' expand='lg'>
          <Container className='d-flex justify-content-end'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'lg'`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-'lg'`}
              aria-labelledby={`offcanvasNavbarLabel-expand-'lg'`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'lg'`}>
                  CASINO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">LOGIN</Nav.Link>
                  <Nav.Link href="#action2">HOME</Nav.Link>
                  <NavDropdown
                    title="OTHER LINKS"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    className='mb-3'
                  >
                    <NavDropdown.Item href="#action3" className='text-uppercase'>Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='text-uppercase'>Live Casino</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Slots</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Lottery</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Games</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Super Bull</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Poker</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-uppercase'>Promos</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </div>


        
   
      
  
    </>
  )
}

export default NavbarTop
