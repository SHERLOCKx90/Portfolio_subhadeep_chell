import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCode = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const Data = [
        {
            image: "../../dribbble-5.png",
            header: "VR Club Official - Club Website.🤖",
            description: "Official Club Website for a Technical Club based on Virtual Reality, VIT Chennai.🧑‍💻",
            link: "https://github.com/SHERLOCKx90/VR-Club-Official.git",
        },
        {
            image: "../../dribbble-7.png",
            header: "❌ SherloXO - Tic-Tac-Toe Game Web Application. ⭕",
            description: "A tic tac toe game web application , made using HTML, CSS , JS.✨",
            link: "https://github.com/SHERLOCKx90/SherloXO.git",
        },
        {
            image: "../../dribbble-8.png",
            header: "✖️➕ ReactCalc : Arithmetic Calculation Web Application. ➖➗",
            description: "This is a simple and appealing arithmetic web calculator application...primarily for solving primary arithmetic calculations - created using React JS and styled using Tailwind CSS. 🔢",
            link: "https://github.com/SHERLOCKx90/ReactCalc-v1.git",
        },
        {
            image: "../../dicerollsmall.png",
            header: "🎲 Dice Game : Retro Classic Dice roll Game Web Application 👾",
            description: "A simple DICE- GAME created using pure and classic web dev tools - HTML , CSS and Vanilla JS.",
            link: "https://github.com/SHERLOCKx90/retro-classic-dice-roll_deployed_v1.1.git",
        },
    ]

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container" style={{ width: '65vw' }}>
                {Data.map((element, index) => (
                    <div className="embla__slide" key={index}>
                        <div className='cardContainer flex flex-col justify-start items-start py-5 px-4 my-5 mx-0 h-100 w-100 bg-[#141414] bg-opacity-90 z-40 rounded-3xl backdrop-blur-md md:text-center inset-0 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-[10px] lg:py-[40px]'>
                            <img src={element.image} className='rounded-[20px]' alt={`Image ${index}`} />
                            <div className='flex flex-col justify-start items-start my-5 lg:mx-5 lg:w-[40%]'>
                                <h2 className='text-xl text-white my-4 font-medium font-poppins w-[100%] md:text-center lg:text-left'>{element.header}</h2>
                                <p className='w-[100%] flex flex-row justify-start items-center text-slate-400 md:justify-center md:text-center lg:text-justify'>{element.description}</p>
                                <div className="w-[100%] button flex flex-row justify-start items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start lg:items-center"><a href={element.link}><button className='group bg-white text-black flex flex-row items-center px-4 mt-5 py-2 z-30 relative  justify-center rounded-xl hover:bg-blue-700 transition-all hover:text-white hover:translate-y-2'><div className='group hover:text-white'><img src='/githubicon.svg' className='h-[1.5rem] w-[3rem] mr-2 ml-0' /></div><p className='font-medium'>View Code</p></button></a></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
