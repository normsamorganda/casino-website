import { Container, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Records from '../objects/PRAGMATICPLAY-gamelist.json';
import {Card} from 'react-bootstrap';
import CardGame from '../components/Card'
import img1 from '../images/games-img/game-image1.jpg'
import img2 from '../images/games-img/game-image2.jpg'
import img3 from '../images/games-img/game-image3.jpg'
import img4 from '../images/games-img/game-image4.jpg'
import img5 from '../images/games-img/game-image5.jpg'
import img6 from '../images/games-img/game-image6.jpg'
import navObjects from '../objects/navObjects'
import JackpotBanner from './JackpotBanner';
const GameCard = () => {
    // const [data, setData] = useState([]);

//    let filtered = Records['PRAGMATIC PLAY'].filter((record) => {
//        return record.is_new == "Y";
//     })
//     console.log(filtered);

    const images = [img1,img2,img3,img4,img5,img6]

  return (
    <div className='main-background py-4'>
        <JackpotBanner/>
    <Container className='p-0 mt-3'>
        <Row>
            <Col lg={3}>
            <div className='bg-dark text-white'>
                {navObjects.map(object => {
                    return (
                        <div className='d-flex align-items-center justify-content-sm-around justify-content-md-between letter-uppercase border-dotted mt-4 px-3 py-2' key={object.id}>
                        <span className='text-white pe-3 mx-md-0'>{object.nav}</span>
                        <span className={object.icon}></span>
                    </div>
                    )
                })}
            </div>
            <div className='bg-dark text-white my-2 py-5 bg-fade'>
                <div className='text-center'>
                    <h1 className='gradient-dollar font-promotion'>100%</h1>
                    <h5>WELCOME BONUS 100%</h5>
                    <p>Get 100% Welcome Bonus <br></br>
                    up to USD 200 in all Slots Games</p>
                </div>
                <div className='promotion'>
                        <h5>PROMOTIONS</h5>
                </div>
            </div>
            </Col>
            <Col>
                <Row>
                    {Records['PRAGMATIC PLAY'].map((record,index) => {
                        return (
                                    <Col xxl={4} md={5} className='mx-3 mx-xl-0 mx-auto'>
                                        <CardGame gameProvider={record.game_provider} gameTitle={record.game_name_en} img={images[index % images.length]} newWord={record.is_new == "Y"}/>
                                    </Col>
                               )
                        })}  
                          {Records['PRAGMATIC PLAY'].map((record,index) => {
                        return (
                                    <Col xxl={4} md={5} className='mx-3 mx-xl-0 mx-auto'>
                                        <CardGame  gameProvider={record.game_provider} gameTitle={record.game_name_en} img={images[index % images.length]} newWord={record.is_new == "Y"}/>
                                    </Col>
                               )
                        })} 
                </Row>
            </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default GameCard
