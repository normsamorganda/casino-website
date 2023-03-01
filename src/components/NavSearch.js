import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
const NavSearch = () => {
  return (
    <>
    {/* large device */}
    <div className='bg-graydark'>
        <Container className='d-none d-lg-block'>
            <div className='d-flex justify-content-between'>
                
        <div className="wrapper-search my-1">
            <div className="icon-search bi bi-search text-white">
            </div>
            <input className="input-search rounded-5 bg-darkGold text-white py-1" placeholder='FIND A GAME'></input>
        </div> 
        <ul className="d-flex align-items-center m-0">
            <li className="list-group-item p-2 mx-4 text-uppercase text-white">New Games</li>
            <li className="list-group-item p-2 mx-4 text-uppercase text-white">Most Popular Games</li>
            <li className="list-group-item p-2 mx-4 text-uppercase text-white">Game Providers</li>
        </ul>
        </div>
        </Container>

        {/* for small device */}
    <Container className='d-xs-block d-lg-none'>
        <div className='d-flex flex-column align-items-center'> 
            <Col lg={3} className='py-2'>
            <div className="wrapper-search my-1">
            <div className="icon-search bi bi-search text-white">
            </div>
            <input className="input-search rounded-5 bg-darkGold text-white py-1" placeholder='FIND A GAME'></input>
        </div> 
            </Col>
            <Col lg={3} className='py-2'>
            <li className="list-group-item text-uppercase text-white">New Games</li>
            </Col>
            <Col lg={3} className='py-2'>
            <li className="list-group-item text-uppercase text-white">Most Popular Games</li>
            </Col>
            <Col lg={3} className='py-2'>
            <li className="list-group-item text-uppercase text-white">Game Providers</li>
            </Col>
        </div>
    </Container>
    </div>
    
    </>
  )
}

export default NavSearch
