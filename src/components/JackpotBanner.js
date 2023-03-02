import React from 'react'
import Jackpot from '../images/jackpot-image.png'
import {Container, Row, Col} from 'react-bootstrap';

const JackpotBanner = () => {
  return (
    <div className='d-none d-xxl-block'>
        <Container className='bg-secondary'>
         <Row className='py-3'>
            <Col lg={4} className='p-0'>
              <div className='d-flex justify-content-center'>
                <img className='jackpot-banner mt-2' src={Jackpot}></img>
              </div>
              </Col>
            <Col  lg={8}>
              <div className='d-flex justify-content-center align-items-center dotted-border py-2 '>
                <div className='bg-white w-100'>
                    <h1 className='gradient-dollar text-center'>USD 150, 563, 134.02</h1>
                </div>

              </div>
          
       
            
        
                    
            </Col>
         </Row>
        
        </Container>
      
    </div>
  )
}

export default JackpotBanner
