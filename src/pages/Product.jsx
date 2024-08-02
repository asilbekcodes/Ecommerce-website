import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";


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
                <img src="../src/assets/images/Group 94.svg" alt="" />
                <img src="../src/assets/images/Group 98.svg" alt="" />
                <img src="../src/assets/images/Group 97.svg" alt="" />
                <img src="../src/assets/images/Group 96.svg" alt="" />
            </div>
            <div>
                <img className='' src="../src/assets/images/Group 95.svg" alt="" />
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
                    <img src="../src/assets/images/Rectangle 42.svg" alt="" />
                </button>
                <button>
                    <img src="../src/assets/images/Rectangle 42.svg" alt="" />
                </button>
                <button>
                    <img src="../src/assets/images/Rectangle 42.svg" alt="" />
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
            <img src="../src/assets/images/Group 106.svg" alt="" />
            <img src="../src/assets/images/Group 107.svg" alt="" />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Product
