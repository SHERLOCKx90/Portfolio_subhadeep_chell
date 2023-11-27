import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaDesign = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const Data = [
        {
            image: "../../dribbble-1.png",
            header: "Superteam Security website UI Redesign",
            description: "Here, I have redesigned the Superteam Security website UI. Pages include - Home, Hacks, CTFs.",
            link: "https://dribbble.com/shots/21307455-Superteam-Security-website-UI-Redesign",
        },
        {
            image: "../../dribbble-2.png",
            header: "Sherlock's Bio",
            description: "This is a Banner Image for Portfolio websites that can be used in the Hero section. Try such Banner Image type with preferrable graphic design.",
            link: "https://dribbble.com/shots/21307521-Sherlock-s-Bio",
        },
        {
            image: "../../dribbble-3.png",
            header: "Discover Chell's Magic : Developer Portfolio 2D - UI Design",
            description: "In this UI design i have used an isometric 2D concept of Design. In simple words, this UI design reflects the magic of 2D minimalism✨",
            link: "https://dribbble.com/shots/21329002-Discover-Chell-s-Magic-Developer-Portfolio-2D-UI-Design",
        },
        {
            image: "../../dribbble-4.png",
            header: "Appwrite Docs Page - UI Redesign✏️",
            description: "In this UI design, The Documentation page of Appwrite is being re-designed according to latest UI trends to make the Docs page seem more attractive , catchy and more easy-to-use for users.📃🖋️😁✨",
            link: "https://dribbble.com/shots/21329227-Appwrite-Docs-Page-UI-Redesign",
        },
        {
            image: "../../dribbble-5.png",
            header: "Virtual Reality Club website UI design🤖",
            description: "In this website UI design, I have created a 3D, glass morphism , card based UI for a Virtual Reality Technical Club.✏️🎨",
            link: "https://dribbble.com/shots/21329415-Virtual-Reality-Club-website-UI-design",
        },
        {
            image: "../../dribbble-6.png",
            header: "Celebrare: Wedding Cards website UI Redesign",
            description: "This UI Redesign aims to improve the overall UI/UX of Celebrare, a wedding cards website.✨",
            link: "https://dribbble.com/shots/21329515-Celebrare-Wedding-Cards-website-UI-Redesign",
        },
        {
            image: "../../dribbble-7.png",
            header: "❌ Tic-Tac-Toe game UI ⭕",
            description: "Here I have created this UI design for a Tic-Tac-Toe game website.😉✨✏️",
            link: "https://dribbble.com/shots/21329542--Tic-Tac-Toe-game-UI",
        },
        {
            image: "../../dribbble-8.png",
            header: "ReactCalc : Simplify Math, Swift and Snappy!",
            description: "This is a simple and appealing arithmetic web calculator application...primarily for solving primary arithmetic calculations. 🔢",
            link: "https://dribbble.com/shots/21445230-ReactCalc-Simplify-Math-Swift-and-Snappy",
        },
        {
            image: "../../dribbble-9.png",
            header: "'The Ultimate Paintball battle' - poster concept design✨🎨",
            description: "Hi Guys! here's a whole new design concept🎨 for a event poster for a Technical Club's event.✨",
            link: "https://dribbble.com/shots/21706327--The-Ultimate-Paintball-battle-poster-concept-design",
        },
        {
            image: "../../dribbble-10.png",
            header: "Instagram Story design conecpt✨🎨",
            description: "Hey Guys! Here's a design concept for Instagram story ( layout ) poster for a technical club.🎨🖌️",
            link: "https://dribbble.com/shots/21706390-Instagram-Story-design-conecpt",
        },
        {
            image: "../../dribbble-11.png",
            header: "'ShareCare: You share, We care' - Concept App UI design.",
            description: "Hey guys! Introducing a whole new mobile app concept design🎨 for ShareCare. - A Social Community app for social good💖. I have made this App UI design for a UI/UX workshop challenge event.😚",
            link: "https://dribbble.com/shots/21920625--ShareCare-You-share-We-care-Concept-App-UI-design",
        },
        {
            image: "../../dribbble-12.png",
            header: "'ChatBite: Bite . Chat . Review .' - Concept App UI design",
            description: "Hi guys! I am back with a new concept App UI design for 'ChatBite'- a food ordering and socializing app. The design concept is based on the minimalistic look🌿, 2D & 3D dynamic interaction approach. In this design I have taken inspirations from both Snapchat - 'Socializing app' and Swiggy - 'Food ordering app'.💡✨",
            link: "https://dribbble.com/shots/21971978--ChatBite-Bite-Chat-Review-Concept-App-UI-design",
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
                                <div className="w-[100%] button flex flex-row justify-start items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-start lg:items-center"><a href={element.link}><button className='group bg-white text-black flex flex-row items-center px-4 mt-5 py-2 z-30 relative  justify-center rounded-xl hover:bg-pink-600 transition-all hover:text-white hover:translate-y-2'><div className='group hover:text-white'><img src='/dribbbleicon.svg' className='h-[1.5rem] w-[3rem] mr-2 ml-0' /></div><p className='font-medium'>View Design</p></button></a></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
