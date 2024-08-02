import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

import Img4 from '../assets/images/Mask group (2).png'
import Img5 from '../assets/images/Mask group (3).png'
import Img6 from '../assets/images/Mask group (4).png'
import Img7 from '../assets/images/Mask group (5).png'
import images1 from '../assets/images/Group 94.svg'
import images2 from '../assets/images/Group 98.svg'
import images3 from '../assets/images/Group 97.svg'
import images4 from '../assets/images/Group 96.svg'
import images5 from '../assets/images/Group 95.svg'
import images6 from '../assets/images/Rectangle 42.svg'
import images13 from '../assets/images/Rectangle 42.svg'
import images7 from '../assets/images/Rectangle 42.svg'
import images8 from '../assets/images/Group 106.svg'
import images9 from '../assets/images/Group 107.svg'




const Product = () => {
    // const [state, setState] = useState(false)
    const [count, setCount] = useState(0)

    function decrement() {
        setCount(count -1)        
    }

    function inrement() {
        setCount(count +1)        
    }
  return (
    <div className='container px-32'>
      <div className='flex items-center gap-3 my-5'>
        <p>Home</p>
        <IoIosArrowForward />
        <p>Shop</p>
        <IoIosArrowForward />
        <p>Asgaard sofa</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
            <div className='grid  h-[560px]'>
                <img src={images1} alt="" />
                <img src={images2} alt="" />
                <img src={images3} alt="" />
                <img src={images4} alt="" />
            </div>
            <div>
                <img className='' src={images5} alt="" />
            </div>
        </div>
        <div className='w-[600px]'>
            <p className='text-4xl'>Asgaard sofa</p>
            <p className='text-[#9F9F9F] text-[24px]'>Rs. 250,000.00</p>
            <div className='flex gap-5 items-center my-3'>
                <div className='flex gap-1'>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                    <FaRegStarHalfStroke  className='text-yellow-400'/>
                </div>
                <div>
                    <p className=' text-[#9F9F9F]'>5 Customer Review</p>
                </div>
            </div> 
            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <p className='mt-5 mb-1 text-[#9F9F9F]'>Size</p>
            <div className='flex gap-3 my-3'>
                <button className='px-3 py-1 bg-[#FBEBB5]'>L</button>
                <button className='px-3 py-1  bg-[#FAF4F4]'>XL</button>
                <button className='px-3 py-1 bg-[#FAF4F4]'>XS</button>
            </div>
            <p className='text-[#9F9F9F]'>Color</p>
            <div className='flex gap-3 my-3'>
                <button>
                    <img src={images6} alt="" />
                </button>
                <button>
                    <img src={images13} alt="" />
                </button>
                <button>
                    <img src={images7} alt="" />
                </button>
            </div>
            <div className='flex gap-8 my-5'>
                <div className='flex items-center py-1 px-5 border border-solid border-[#9F9F9F] rounded-lg'>
                    <button onClick={decrement} className='px-2'>−</button>
                    <span>{count}</span>
                    <button onClick={inrement} className='px-2'>+</button>
                </div>
                <button className='py-2 px-5 border border-solid border-[#9F9F9F] rounded-lg'>Add To Cart</button>
            </div>
            <hr  className='my-10'/>
            <div className='flex gap-10 items-center text-[#9F9F9F]'>
                <div className=''>
                    <p>SKU</p>
                    <p>Category</p>
                    <p>Tags</p>
                    <p>Share</p>
                </div>
                <div>
                    <p>SS001</p>
                    <p>Sofas</p>
                    <p>Sofa, Chair, Home, Shop</p>
                    <div className='flex gap-3 text-xl text-[#000]'>
                        <FaFacebook />
                        <CiTwitter />
                        <FaLinkedin />
                    </div>
                </div>  
            </div>
        </div>
      </div>
      <hr  className='my-16'/>
      <div>
        <div className='text-[24px] flex justify-center gap-32'>
            <p>Description</p>
            <p className='text-[#9F9F9F]'>Additional Information</p>
            <p className='text-[#9F9F9F]'>Reviews [5]</p>
        </div>
        <div className='text-[#9F9F9F]  flex justify-center'>
            <div className='w-[1000px]'>
                <p className='my-5'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
        </div>
        <div className='flex  gap-10 my-10'>
            <img src={images8} alt="" />
            <img src={images9} alt="" />
        </div>
      </div>
      <hr />
      <section className=' w-full flex flex-wrap gap-10 scroll-smooth py-10 justify-center items-center'>
            <h2 className='text-[50px]  text-black font-semibold '>Top Picks For You</h2>
            <p className='text-[20px]  text-black  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime? Optio, corporis aspernatur</p>

            <div className=' scroll-smooth py-10 flex justify-between flex-wrap'>

                <div className=' h-[397px]' >
                    <img src={Img4} alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                </div>

                <div className='h-[397px]' >
                    <img src={Img5} alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                    </div>

                <div className='h-[397px]' >
                    <img src={Img6} alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                    </div>

                <div className=' h-[397px]' >
                    <img src={Img7} alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold text-2xl'>Rs: 25,000.00</h3>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Product
