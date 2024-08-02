import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='mt-10'>
            <p className="text-2xl font-bold text-center">Top Picks For You</p>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa dolores amet tempore? </p>
            <div className="p-10 flex justify-center items-center gap-5">
                <div>
                    <img src="../src/assets/images/Card4.svg" alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src="../src/assets/images/Card.svg" alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src="../src/assets/images/Card2.svg"alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src="../src/assets/images/Card3.svg" alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
