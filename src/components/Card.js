import React from 'react'

const Card = ({gameProvider, gameTitle, img, newWord}) => {

    // const images = [img2,img3,img4,img5,img5]

  return (
    <>
         <div className="game-card mx-auto">
                <img src={img} alt="Card Image"/>
                 {newWord ? (<div className="new"><h4 className='move'>New</h4></div>) : ''}
                  <div className="game-card-button">
                   <button className="button rounded-5 bg-warning text-white">Play Now</button>
                    <button className="button rounded-5 bg-danger text-white">Demo</button>
                    <h4 className='text-white'>{gameProvider}</h4>
                     </div>
                      </div>     
          
            <div className='d-flex justify-content-around justify-content-md-between'>
              <h5 className='text-warning font-weight-bold mx-sm-4 mx-lg-0'>{gameTitle}</h5>  
              <div>
                  <span className="bi bi-star-fill checked"></span>
                  <span className="bi bi-star-fill checked"></span>
                  <span className="bi bi-star-fill checked"></span>
                  <span className="bi bi-star"></span>
                  <span className="bi bi-star"></span>
              </div>             
            </div>
      
    </>
  )
}

export default Card
