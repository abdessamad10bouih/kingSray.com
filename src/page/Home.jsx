import React, { useState, useRef } from 'react'
import Navbar from '../components/navBar';
import heroVideo from '../assets/hero-vid.mp4'
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPauseCircle, faPlayCircle, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/searchBar';
import img1 from '../assets/room.jpg'
import img2 from '../assets/room1.jpg'
import img3 from '../assets/room2.jpg'



const Home = () => {
  const [play, setPlay] = useState(faPlayCircle);
  const [vidplaying, setVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlingPause = () => {
    if (play === faPlayCircle && vidplaying) {
      videoRef.current.pause();
      setPlay(faPauseCircle)

    } else {
      videoRef.current.play();
      setPlay(faPlayCircle)
    }
    setVideoPlaying(!vidplaying)
  }

  return (
    <>
      <header className='w-full h-screen flex flex-col items-center justify-center'>
        <Navbar />
        <section className='w-full flex h-full items-center justify-center relative'>
          <div className='w-full relative flex-col p-4 flex justify-center items-center h-full md:w-[80%] md:flex md:justify-center md:items-center md:h-[69vh]'>
            <video src={`./${heroVideo}`} autoPlay ref={videoRef} loop muted className='w-full h-full object-cover md:rounded-2xl absolute'></video>
            <div className='w-full md:p-10 h-full flex flex-col justify-center items-center md:items-start z-20'>
              <h1 className='z-20 text-4xl text-center font-poppins mb-2 font-bold text-white'>Welcome to Your Dream Stay</h1>
              <p className='z-20 text-center text-white text-sm md:w-[40%] md:text-left'>Discover luxury and comfort at its finest. Whether you are looking for a weekend getaway, a family vacation, or a business trip, our hotel offers unparalleled service, elegant rooms, and top-notch amenities to make your stay unforgettable.</p>
              <div className='z-20 w-full h-32 flex items-center justify-center gap-5 md:w-[30%]'>
                <Button className={`bg-secondary`}>Book Now</Button>
                <Button className={`bg-[rgba(255,255,255,0.2)] border-2 border-black`}>Explore Rooms</Button>
              </div>
              <div className='hidden md:absolute md:block text-8xl right-64 text-primary cursor-pointer z-10'>
                <FontAwesomeIcon onClick={handlingPause} icon={play}>{vidplaying ? 'Pause' : 'Play'}</FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className='absolute md:w-[80%] md:h-[69vh] md:rounded-2xl w-full h-full bg-gradient-to-r from-primary to-[rgba(255,255,255,0.2)]'></div>
        </section>
      </header>
      <Search />
      <section className='w-full md:h-[50vh] h-screen flex flex-col justify-center md:items-center p-3'>
        <h1 className='text-primary font-poppins font-medium md:w-[80%]'>About Our Service <FontAwesomeIcon className='text-primary' icon={faArrowRight} /> </h1>
        <div className='w-full md:w-4/5 h-full items-center pt-4 flex flex-col md:flex-row'>
          <div className='w-4/5 md:w-3/5 h-60 gap-4 bg-primary rounded-2xl items-start flex flex-col p-5'>
            <FontAwesomeIcon className='text-6xl text-secondary' icon={faQuoteRight} />
            <p className='text-xl font-poppins text-secondary'>"The Best Hotel In Morocco.. No debate"</p>
            <h1 className='text-3xl text-white font-semibold font-poppins' >Thomas Edison</h1>
          </div>
          <div className='w-full h-[80%] flex md:flex-row gap-2 justify-center items-center flex-col mt-3'>
            <img src={`./${img1}`} className='w-[60%] md:w-[35%] rounded-2xl' alt="" />
            <img src={`./${img2}`} className='w-[60%] md:w-[35%] rounded-2xl' alt="" />
            <img src={`./${img3}`} className='w-[60%] md:w-[35%] rounded-2xl' alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
