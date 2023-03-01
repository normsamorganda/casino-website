import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CiUser } from "react-icons/ci";
import '../App.css'
import Flame from '../images/flame.png'
const Login = () => {
  return (
  
    <div className='bg-dark'>
        <Container className='d-none d-md-block bg-dark'>
        <Row>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center '>
                    <img src={Flame} className='flame-logo'></img>
                        <h4 className='font-weight-bold text-gold m-0'>CASINO</h4>
                </div>
                {/* {---------------------------------- INPUTS--------------------------} */}
                <div className='d-flex text-white align-items-center'>
                    <div className="wrapper"> 
                        <div className="icon bi bi-person text-gold">
                        </div>
                        <input className="input-user rounded-5 bg-black border-white" placeholder='User ID'></input>
                    </div> 
                    <div className="wrapper">
                        <div className="icon bi bi-lock text-gold">
                        </div>
                        <input className="input-user rounded-5 bg-black border-white" placeholder='*********'></input>
                    </div>  
                    <button className='bg-warning text-white px-4 py-1 rounded-5'>Login</button>
                    <button className='bg-danger text-white px-4 py-1 mx-2 rounded-5'>Join</button>
                </div>
            </div>
        </Row>
    </Container>
    </div>
  
    
  )
}

export default Login
