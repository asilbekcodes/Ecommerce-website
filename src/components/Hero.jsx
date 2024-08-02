import React from 'react'

const Hero = () => {
  return (
    <div>
      <div>
        <div className="p-10  bg-yellow-200 flex justify-between gap-20 items-center px-20">
          <div>
            <p className="text-5xl font-bold">Rocket single seater</p>
            <div>            
              <p className='w-20 border-b-2 border-black'>Shop now</p>
            </div>
          </div>
          <div>
            <img className='w-3/4' src='../src/assets/images/image1.svg' alt="image" />
          </div>
        </div>
        <div className="flex justify-between items-center  p-20 bg-[#FAF4F4]">
          <div className="text-center">
            <img src='../src/assets/images/Group 9.svg' alt="" />
            <p className="text-2xl font-bold">Side table </p>
            <p className="">View More</p>
          </div>
          <div className="text-center">
            <img src='../src/assets/images/Group 8.svg'alt="" />
            <p className="text-2xl font-bold">Side table </p>
            <p className="">View More</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
