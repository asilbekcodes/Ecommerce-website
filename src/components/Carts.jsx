import React from 'react'

const Carts = () => {
  return (
    <div>
      <section className='w-full h-[750px]  flex flex-wrap gap-10 scroll-smooth px-[120px] justify-center items-center bg-[#FBEBB5]'>

        <div className='w-[45%]'>
        <h1 className='text-[60px]  text-black font-semibold ' >Rockt single <br /> seater</h1>
        <a className='border-b-2 border-[#000] font-normal texl-2xl pt-5' href="">SHop Now</a>
        </div>

        <div className='w-[50%]'>
                <img className='w-[100%] h-[700px]'  src='' alt="devan" />
            </div>
            
        </section>

        <section className='w-full p gap-10  flex flex-wrap scroll-smooth px-[120px] py-10 justify-center items-center bg-[#FAF4F4]'>
            <div>
        <img src="" alt="" />
        <h2 className='text-[40px]  text-black font-semibold'>Side table</h2>
        <a className='border-b-2 border-[#000] font-normal texl-2xl pt-5' href="">VieW More</a>

            </div>

            <div>
        <img src="" alt=" "/>
        <h2 className='text-[40px] text-[#000]  font-semibold'>Side table</h2>
        <a className='border-b-2 border-[#000] font-normal texl-2xl pt-5' href="">VieW More</a>
            </div>
        </section>

        <section className=' w-full p  flex flex-wrap gap-10 scroll-smooth px-[120px] py-10 justify-center items-center'>
            <h2 className='text-[50px]  text-black font-semibold '>Top Picks For You</h2>
            <p className='text-[20px]  text-black  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime? Optio, corporis aspernatur</p>

            <div className='w-[100%] scroll-smooth py-10 flex gap-10 flex-wrap'>

                <div className='w-[287px] h-[397px]' >
                    <img src="" alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                </div>

                <div className='w-[287px] h-[397px]' >
                    <img src="" alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                    </div>

                <div className='w-[287px] h-[397px]' >
                    <img src="" alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold  text-2xl'>Rs: 25,000.00</h3>
                    </div>

                <div className='w-[287px] h-[397px]' >
                    <img src="" alt="" />
                    <p>Trenton modular safo_3 </p>
                    <h3 className='font-semibold text-2xl'>Rs: 25,000.00</h3>
                    </div>
            </div>
        </section>

        <section className='w-full  flex flex-wrap items-center scroll-smooth py-10 px-[120px] bg-[#FFF9E5] gap-10'>
        <div>
            <img src="" alt="" />
        </div>

        <div className=' flex flex-col justify-center items-center'>
            <h2 className='font-semibold text-2xl ' >New Arrivals</h2>
            <h2 className=' mt-5 font-bold text-5xl'>Asgaard sofa</h2>
            <a className='border-2 border-[#000] font-normal texl-2xl scroll-smooth py-4 px-[70px] mt-10' href="">Order Now </a>
        </div>
        </section>

        <section className=' w-full p gap-10  flex flex-wrap  scroll-smooth px-[120px] py-10 justify-center items-center'>
        <h2 className='text-[45px] text-[#000]  font-semibold scroll-smooth px-[190px]'>Our Blogs</h2>
        <p className='text-[20px] text-[#000]  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam temporibus libero consequuntur </p>  
        <div className='w-[100%] scroll-smooth py-10 flex justify-center gap-10 flex-wrap'>
                <div className=' text-center'>
                    <img src=""       alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                <a  className='border-b-2 border-[#000] font-semibold text-[30px] texl-4xl pt-5  block scroll-smooth px-[10px]' href="">Read More</a>
                <p className='pt-6'>
                <p className='inline  '> # 5 min</p>
                <p className='inline ml-5'> @ 12 <sup>th</sup> oct 2022 </p>
            </p>
                </div>

            <div className=' text-center'>
                <img src=""     alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <a  className='border-b-2 border-[#000] font-semibold text-[30px] texl-4xl pt-5  block scroll-smooth px-[10px]' href="">Read More</a>
                <p className='pt-6'>
                <p className='inline  '> # 5 min</p>
                <p className='inline ml-5'> @ 12 <sup>th</sup> oct 2022 </p>
            </p>
                </div>

            <div className=' text-center'>
                <img src=""      alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <a  className='border-b-2 border-[#000] font-semibold text-[30px] texl-4xl pt-5  block scroll-smooth px-[10px]' href="">Read More</a>
                <p className='pt-6'>
                <p className='inline  '> # 5 min</p>
                <p className='inline ml-5'> @ 12 <sup>th</sup> oct 2022 </p>
            </p>
                </div>

            <a className='  border-b-2 border-[#000] font-normal texl-2xl pt-5' href=""></a>
        </div>

        </section>


        <section className='ss w-full   flex  scroll-smooth px-[120px] py-10 justify-center items-center '>

        </section>
    </div>
  )
}

export default Carts
