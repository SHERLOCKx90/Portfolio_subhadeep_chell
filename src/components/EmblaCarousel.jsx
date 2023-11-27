import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container" style={{ width: '65vw' }}>
                <div className="embla__slide">
                    <div className='cardContainer flex flex-col justify-start items-start py-4 px-4 my-5 mx-0 h-100 w-100  bg-[#141414] bg-opacity-90 z-40 rounded-3xl backdrop-blur-md inset-0 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-[10px] lg:py-[40px]'>
                        <img src='../../blog-1.svg' />
                        <div className='flex flex-col justify-start items-start md:justify-center md:items-center lg:w-[50%] lg:justify-start lg:items-start' >
                            <h2 className='text-xl text-white my-4 font-medium font-poppins w-[100%] md:text-center lg:text-left'>Mastering Node.js and MongoDB: Creating a Stellar CRUD API👾</h2>
                            <button className='bg-white my-5 rounded-[50px] text-black font-poppins py-2 px-4 text-center font-semibold hover:bg-pink-500 hover:text-white hover:transition ease-linear'><a href='https://subhadeepchell.hashnode.dev/mastering-nodejs-and-mongodb-creating-a-stellar-crud-api'>Read More</a></button>
                            <div className='flex flex-row justify-between items-center my-5 '>
                                <img src="../../myface.svg" alt="myface" className='h-10 w-10' />
                                <p className='font-poppins text-slate-200 font-normal text-md ml-3'>Subhadeep <br />Chell</p>
                            </div>
                            <p className='w-[100%] flex flex-row justify-start items-center text-slate-400 md:justify-center lg:justify-start lg:flex lg:items-center'>Aug 28, 2023  .  <span className='mx-2'><img src='../../blogbook.svg' /></span>  15 min read</p>
                        </div>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='cardContainer flex flex-col justify-start items-start py-4 px-4 my-5 h-[93%] w-100 bg-[#141414] bg-opacity-90 z-40 rounded-3xl backdrop-blur-md inset-0 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-[10px] lg:py-[40px]'>
                        <img src='../../blog-2.svg' />
                        <div className='flex flex-col justify-start items-start md:justify-center md:items-center lg:w-[50%] lg:justify-start lg:items-start'>
                            <h2 className='text-xl text-white my-4 font-medium font-poppins w-[100%] md:text-center lg:text-left'>Hi! Myself, Subhadeep Chell...✌️😊</h2>
                            <button className='bg-white my-5 rounded-[50px] text-black font-poppins py-2 px-4 text-center font-semibold hover:bg-pink-500 hover:text-white hover:transition ease-linear'><a href='https://subhadeepchell.hashnode.dev/hi-myself-subhadeep-chell'>Read More</a></button>
                            <div className='flex flex-row justify-between items-center my-[12.5%] md:my-5   '>
                                <img src="../../myface.svg" alt="myface" className='h-10 w-10' />
                                <p className='font-poppins text-slate-200 font-normal text-md ml-3'>Subhadeep <br />Chell</p>
                            </div>
                            <p className='w-[100%] flex flex-row justify-start items-center text-slate-400 md:justify-center lg:justify-start lg:flex lg:items-center'>Nov 17, 2022  .  <span className='mx-2'><img src='../../blogbook.svg' /></span>  1 min read</p>
                        </div>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='cardContainer flex flex-col justify-start items-start py-4 px-4 my-5 h-[93%] w-100 bg-[#141414] bg-opacity-90 z-40 rounded-3xl backdrop-blur-md inset-0 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-[10px] lg:py-[40px]'>
                        <img src='../../blog-3.svg' />
                        <div className='flex flex-col justify-start items-start md:justify-center md:items-center lg:w-[50%] lg:justify-start lg:items-start'>
                            <h2 className='text-xl text-white my-4 font-medium font-poppins w-[100%] md:text-center lg:text-left'>Figma : My way🎨❤️</h2>
                            <button className='bg-white my-5 rounded-[50px] text-black font-poppins py-2 px-4 text-center font-semibold hover:bg-pink-500 hover:text-white hover:transition ease-linear'><a href='https://subhadeepchell.hashnode.dev/figma-my-way'>Read More</a></button>
                            <div className='flex flex-row justify-between items-center my-[12.5%] md:my-5 '>
                                <img src="../../myface.svg" alt="myface" className='h-10 w-10' />
                                <p className='font-poppins text-slate-200 font-normal text-md ml-3'>Subhadeep <br />Chell</p>
                            </div>
                            <p className='w-[100%] flex flex-row justify-start items-center text-slate-400 lg:justify-start lg:flex lg:items-center'>Jul 24, 2023  .  <span className='mx-2'><img src='../../blogbook.svg' /></span>  6 min read</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
