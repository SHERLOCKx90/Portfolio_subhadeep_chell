import React, { useState, useEffect, useRef } from 'react';
import { EmblaCarousel } from './components/EmblaCarousel'
import { Link } from 'react-router-dom'

const App = () => {
  const words = ['Subhadeep Chell', 'student', 'developer', 'programmer', 'designer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Function to update the displayed word
  const updateWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  useEffect(() => {
    // Set up an interval to change the word every 3 seconds (adjust as needed)
    const intervalId = setInterval(updateWord, 3000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    // Create an anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = '../Subhadeep_chell_Resume.pdf'; // Replace with the actual path to your PDF file
    anchor.download = 'Subhadeep_Chell_Resume.pdf'; // Set the filename for the downloaded file
    anchor.click();
  };

  const handleSendEmailClick = () => {
    const emailAddress = 'sherlockx90@gmail.com';
    const subject = 'Hello from Your Website';
    const emailBody = 'Hi Subhadeep,';

    // Create a "mailto" URL with the recipient email, subject, and body
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoUrl;
  };

  const explore = useRef(null);
  const connect = useRef(null);
  const top = useRef(null);
  
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ top: elementRef.current.offsetTop, behavior: 'smooth', block: 'start',  });
    }
  };

  return (

    // whole screen-height container
    <div className="bg-black h-screen z-10 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll relative mx-0 my-0 px-0 py-0 box-border transition duration-300 ease-in-out">
      <div className="navbar flex flex-row justify-evenly font-poppins items-center px-10 py-2 w-80 mx-auto my-10 bg-slate-500 inset-0 bg-opacity-20  backdrop-blur-md rounded-xl text-white h-max fixed z-50 left-0 right-0">
        <h3 onClick={() => scrollToSection(top)} className="mx-4 hover:text-blue-300 transition duration-200 ease-in-out cursor-pointer">Home</h3>
        <h3 onClick={() => scrollToSection(explore)} className="mx-4  hover:text-blue-300 transition duration-200 ease-in-out cursor-pointer ">Explore</h3>
        <h3 onClick={() => scrollToSection(connect)} className="mx-4 hover:text-blue-300 transition duration-200 ease-in-out cursor-pointer">Connect</h3>
      </div>
      <div className='gradient-01 absolute top-20 left-[15rem] md:left-[25rem] md:w-[15rem] md:h-[15rem] lg:left-[40rem] w-60 h-60 bg-[#2F76FF80] opacity-80 blur-3xl md:rounded-[100rem] z-0'></div>
      <div className='gradient-01 absolute top-40 right-[15rem] md:right-[25rem] lg:right-[40rem] w-80 h-80 bg-[#3A05AC80] opacity-80 blur-3xl md:rounded-[100rem] z-0'></div>
      <div className='gradient-01 absolute top-60 left-[15rem] md:left-[20rem] lg:left-[35rem] md:w-[30rem] md:h-[30rem] md:rounded-[100rem] w-80 h-80 bg-[#B536A080] opacity-80 md:blur-[7rem] blur-3xl z-0'></div>
      <div ref={top}>
        <h1 className="text-white text-4xl lg:text-[45px] mx-4 mt-40 font-medium text-center font-poppins z-30 relative">
          Hey, who are you?</h1>
        <h1 className="text-white text-5xl lg:text-[60px] mx-4 my-4 font-semibold text-center font-poppins z-50">
          I am <br /> <span className='font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text z-10'>{words[currentWordIndex]}.</span></h1>
      </div>
      <div className="h-30 w-30 my-40 md:z-30">
        <img src='/down-arrow.svg' onClick={() => scrollToSection(explore)} className="w-30 h-30 hover:scale-50 transition-transform  delay-100 ease-linear cursor-pointer " />
      </div>
      <div ref={explore} className='mt-20 bg-[#141414] mx-10 py-10 rounded-3xl bg-opacity-80 z-40 backdrop-blur-md inset-0 lg:w-[50%] lg:px-10 lg:py-5'>
        <div  className='whoami text-white font-poppins'>
          <h2 className='text-2xl text-center'>Who am i ?</h2>
          <h3 className='text-md text-center px-10 mt-2 text-[#6F6F6F] font-poppins'>Let me introduce myself to you.</h3>
        </div>
        <div id="mycard" className='InfoCard text-white font-poppins' >
          <div className="left flex flex-row justify-center items-center mt-20 mb-10"><img src='/myface.svg' className='h-[6rem] w-[6rem]' /></div>
          <div className="right">
            <div className="para text-justify px-10 text-[#D2D2D2]">I am a results-oriented student and proficient web developer with more than two years of experience, deeply enthusiastic about coding and committed to crafting exceptional UI/UX designs. My expertise lies in logical analysis and systematic problem-solving, enabling me to architect robust and efficient solutions. My dedication to staying current with the latest industry trends and technologies is paralleled only by my love for reading technical literature. My primary objective is to harness my coding acumen and design prowess to engineer user-centric web applications that offer a superior and intuitive user experience.</div>
            <div className="button flex flex-row justify-center items-center"><button className='group bg-white text-black flex flex-row items-center px-4 my-10 py-2 z-30 relative  justify-center rounded-xl hover:bg-pink-500 transition-all hover:text-white hover:translate-y-2' onClick={handleResumeClick}><div className='group hover:text-white'><img src='/download.svg' className='h-[1.5rem] w-[3rem] mr-2 ml-0' /></div><p className='font-medium'>Resume</p></button></div></div>
        </div>
      </div>
      <div className='gradient-01 absolute top-[90rem] right-[5rem] md:right-[15rem] md:top-[75rem] lg:right-[45rem] md:w-[400px] md:h-[400px] md:rounded-[1000px] w-80 h-80 bg-[#3A05AC80] opacity-80 blur-3xl'></div>
      <div className='mt-40 flex flex-col justify-center items-center'>
        <div className='myskills text-white font-poppins'>
          <h2 className='text-2xl text-center'>My Skills</h2>
          <h3 className='text-md text-center px-10 mt-2 text-[#6F6F6F] font-poppins'>Get to know skill-sets that i have build throughout my journey.</h3>
        </div>
        <div className='flex justify-center items-center'>
          <div className='skillsboard bg-[#141414] h-fit w-screen mx-auto text-white grid gap-4 grid-cols-5 py-10 px-5 grid-col mt-20 relative justify-center items-center lg:grid md:grid-cols-7 lg:grid-col lg:gap-5 lg:w-[82%] lg:p-10 lg:rounded-[20px]'>
            <img src='/bootstrap.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-transform cursor-pointer' />
            <img src='/c.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/cplus.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/react.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer ' />
            <img src='/mysql.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/html.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/figma.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/router.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/nextjs.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/netlify.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/styled.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/css.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/java.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/mongodb.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/jquery.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/tailwindcss.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/vite.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/xd.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/vercel.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/python.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/js.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/github.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/firebase.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/framer.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/git.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/nodejs.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
            <img src='/express.svg' className='hover:shadow-blue-500 hover:scale-105 rounded-[40px] transition-all cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='mt-40 z-10'>
        <div className='myskills text-white font-poppins'>
          <h2 className='text-2xl text-center'>My Profiles</h2>
          <h3 className='text-md text-center px-10 mt-2 text-[#6F6F6F]'>Which one of my profiles do you wanna see?</h3>
          <div className="all mt-20 flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
            <div className="design  hover:bg-slate-800 mx-10 bg-opacity-50 z-40 backdrop-blur-md inset-0 border-gray-800 border-[0.1] font-poppins border-[0.7px]  my-4 flex flex-col justify-center items-center px-10 py-10 md:py-[50px] rounded-3xl hover:bg-opacity-30 transition-all ease-linear hover:translate-y-2 cursor-pointer"><h2 className='text-2xl'> Being a Designer</h2><img src='/design.svg' /><Link to='/design' style={{ textDecoration: 'none' }}><button className='bg-black px-5 py-5 mt-5 hover:bg-pink-700 transition-all rounded-[100rem]'><img src='/openarrow.svg' /></button></Link></div>
            <div className="develop hover:bg-slate-800 mx-10 bg-opacity-50 z-40 backdrop-blur-md inset-0 border-gray-800 border-[0.1] font-poppins border-[0.7px]  my-4 flex flex-col justify-center items-center px-8 py-10 rounded-3xl hover:bg-opacity-30 transition-all ease-linear hover:translate-y-2 cursor-pointer"><h2 className='text-2xl text-center'>Being a Developer</h2><img src='/develop.svg' /><Link to='/code' style={{ textDecoration: 'none' }}><button className='bg-black px-5 py-5 mt-5 hover:bg-blue-700 transition-all rounded-[100rem]'><img src='/openarrow.svg' /></button></Link></div>
          </div>
        </div>
      </div>
      <div className='gradient-01 absolute top-[220rem] md:top-[170rem] lg:top-[175rem] lg:right-[30rem] right-[1rem] w-80 h-80 bg-[#2F76FF80] opacity-40 blur-3xl z-0'></div>
      <div className='gradient-01 absolute top-[170rem] md:top-[150rem] lg:top-[165rem] lg:left-[30rem] right-[8rem] md:right-[25rem] w-80 h-80 bg-[#B536A080] opacity-40 blur-3xl z-0'></div>
      <div className="mt-40 z-10">
        <div className='myskills text-white font-poppins'>
          <h2 className='text-2xl text-center'>My Blogs</h2>
          <h3 className='text-md text-center px-10 mt-2 text-[#6F6F6F] font-poppins'>Are you ready to explore my blogs?</h3>
        </div>
        <div className='blogscard flex flex-col justify-center items-center'>
          <div className='mt-20 text-white flex flex-row justify-center items-center'>
            <EmblaCarousel />
          </div>
        </div>
        <div ref={connect} className='bg-[#141414] mt-40 w-screen overflow-x-hidden mx-0 mb-0 font-poppins text-white text-2xl px-4 py-4 flex flex-col justify-center items-center'>
          <img src='/Chell..svg' className='w-[100px] h-[100px] mt-1' />
          <p className='mt-0 mb-5'>Let's Connect</p>
          <p className='text-[#6F6F6F] text-xl font-poppins text-center mb-10'>Hey there, ready to team up and make something awesome happen?</p>
          <button className='bg-white text-black font-poppins text-xl font-semibold px-4 py-2 rounded-3xl w-max flex flex-row justify-between items-center hover:bg-pink-500 hover:transition hover:ease-linear hover:text-white hover:translate-y-2' onClick={handleSendEmailClick}><span className='mr-3'><img src='/email.svg' /></span>Send Email</button>
          <div className='footer'>
            <div className="footer-head text-[#6F6F6F] text-xl mt-10 mb-5 text-center">Follow Me on :</div>
            <div className="footer-icons flex flex-row justify-evenly gap-4 items-center mb-20">
              <img src='/foot-github.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-linkedin.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-dribbble.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-hashnode.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-twitter.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
            </div>
            <div className="label text-[15px] text-[#6F6F6F] font-poppins mb-3 flex flex-row text-center"><span className='flex flex-col justify-center items-center mr-1'><img src='/copyrightlabel.svg' /></span>Designed & Developed by Subhadeep Chell</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App