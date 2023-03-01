import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer'
const Contact = () => {
  return (
    <div className='h-25 bg-dark py-5'>
            <Container>
                <Row>
                    <Col lg={3} md={6} className='py-lg-0 py-sm-5'>
                        <Container>
                            <h4 className='text-warning'>SERVICE ADVANTAGES</h4>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex flex-column'>
                                    <span className='text-warning f-20'>DEPOSIT</span>
                                    <span className='text-secondary'>Average Time</span>
                                </div>
                                    <p className='mx-auto'><span className='text-danger f-50'>3</span><span className='text-secondary'>Mins</span> </p>
                            </div>
                            <div className="loader">
                            </div>
                            {/* Second Loader */}
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex flex-column'>
                                    <span className='text-warning f-20'>Withdrawal</span>
                                    <span className='text-secondary'>Average Time</span>
                                </div>
                                <p className='mx-auto'><span className='text-danger f-50'>20</span><span className='text-secondary'>Mins</span> </p>

                            </div>
                            <div className="loader1">
                            </div>

                        </Container>
                    </Col>
                    <Col lg={3} md={6}>
                    <Container className='py-lg-0 py-sm-5'>
                            <h4 className='text-warning'>PRODUCT ADVANTAGES</h4>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex flex-column'>
                                    <span className='text-white f-20'>SPORTS</span>
                                    <span className='text-secondary'>Nostrud consectetur non proident do aliqua velit eu tempor ex tempor culpa ex nisi ullamco.</span>
                                </div>
                            </div>
                                {/* second paragraph */}
                                <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex flex-column'>
                                    <span className='text-white f-20'>LIVE CASINO</span>
                                    <span className='text-secondary'>Nostrud consectetur non proident do aliqua velit eu tempor ex tempor culpa ex nisi ullamco.</span>
                                </div>
                            </div>
                              {/* third paragraph */}
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex flex-column'>
                                    <span className='text-white f-20'>POKER</span>
                                    <span className='text-secondary'>Nostrud consectetur non proident do aliqua velit eu tempor ex tempor culpa ex nisi ullamco.</span>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col lg={3} md={6} className='py-lg-0 py-sm-5'>
                    <Container>
                            <h4 className='text-warning'>INFO CENTER</h4>
                            <div className='d-flex align-items-center mt-3 justify-content-between'>
                                    <span className='text-white f-20'>FAQ</span>
                                    <i className="bi bi-arrow-right text-white"></i>
                            </div>
                                {/* second paragraph */}
                                <div className='d-flex align-items-center mt-3 justify-content-between'>
                                <span className='text-white f-20'>HOW TO DEPOSIT</span>
                                    <i className="bi bi-arrow-right text-white"></i>
                            </div>
                              {/* third paragraph */}
                              <div className='d-flex align-items-center mt-3 justify-content-between'>
                                    <span className='text-white f-20'>HOW TO WITHDRAW</span>
                                    <i className="bi bi-arrow-right text-white"></i>
                            </div>
                        </Container>
                    </Col>
                    <Col lg={3} md={6} className='py-lg-0 py-sm-5'>
                    <Container>
                            <h4 className='text-warning'>CONTACT US</h4>
                            <div className='d-flex align-items-center mt-3 justify-content-start'>
                                    <i className="bi bi-chat-left-dots-fill f-50 text-warning checked"></i>
                                    <div className='d-flex flex-column ms-5'>
                                        <span className='text-white f-20'>LIVE CHAT</span>
                                        <a href='#' className='text-secondary'>Click Here</a>
                                    </div>
                                   
                            </div>
                                {/* second paragraph */}
                                <div className='d-flex align-items-center mt-3 justify-content-start'>
                                    <i className="bi bi-envelope-fill f-50 text-warning checked"></i>
                                    <div className='d-flex flex-column ms-5'>
                                        <span className='text-white f-20'>EMAIL</span>
                                        <p className='text-secondary'>mail@onlinecasino.com</p>
                                    </div>
                                   
                                </div>
                              {/* third paragraph */}
                              <div className='d-flex align-items-center mt-3 justify-content-start'>
                                    <i className="bi bi-telephone-fill f-50 text-warning checked"></i>
                                    <div className='d-flex flex-column ms-5'>
                                        <span className='text-white f-20 '>HOTLINE</span>
                                        <p className='text-secondary'>+12342356</p>
                                    </div>
                                   
                                </div>
                        </Container>
                    </Col>
                </Row>
                <div className='border-black my-3'></div>
                <Row>
                    <Col>
                        <div className='text-secondary d-flex py-3 justify-content-between'>
                            <ul className='d-flex p-0'>
                                <li className="list-group-item pe-3 border-white">About Us</li>
                                <li className="list-group-item pe-3">Responsible Gaming</li>
                                <li className="list-group-item pe-3">Info Center</li>
                                <li className="list-group-item pe-3">Contact Us</li>
                                <li className="list-group-item pe-3">Affiliates</li>
                            </ul>
                            <div className='text-secondary'>
                                        <p>© Casino All rights reserved | 18+</p>
                            </div>
                        </div>
                     
                    </Col>
                </Row>
                <div className='border-black1'></div>
            </Container>
            <Footer/>
    </div>
  )
}

export default Contact
