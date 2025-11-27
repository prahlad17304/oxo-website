import React from "react";
import oxoImg from "../assets/oxo-1.png";
import oxoWave from "../assets/oxo-2.png";
import oxoPhone from "../assets/oxo-3.png";
import oxoBG from "../assets/oxo-4.png";
import oxoMusicGirl from "../assets/oxo-5.png";
import oxoMusicGirl2 from "../assets/oxo-6.png";
import oxoWorldMap from "../assets/oxo-7.png";
import oxoBlog1 from "../assets/oxo-8.jpg";
import oxoBlog2 from "../assets/oxo-9.jpg";
import oxoBlog3 from "../assets/oxo-10.jpg";

import {
  FaApple,
  FaRandom,
  FaListUl,
  FaHeadphonesAlt,
  FaWifi,
  FaMusic,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

export default function Home() {

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-88px)] px-6 lg:px-[151px] py-0 w-full">
        {/* left section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-8 mt-16 lg:mt-0 scroll-reveal">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-8">
            The most <br /> powerful audio <br /> streamer for <br /> devices
          </h1>
          <button className="bg-[#EB4663] text-white font-semibold rounded-full px-8 py-3 text-lg transition hover:bg-[#d23750]">
            Download Now
          </button>
        </div>
        {/* right section */}
        <div className="w-[1000px] flex justify-center items-center scroll-reveal delay-1">
          <img
            src={oxoImg}
            alt="Audio streamer mockup"
            className="w-[1000px] h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Download Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-[151px] py-8 w-full scroll-reveal">
        {/* Left: Apple Download with extra left padding */}
        <div className="flex flex-col items-center gap-2 pl-10 lg:pl-24">
          <FaApple className="text-white text-7xl" />
          <div className="text-white text-md text-center mt-1">
            Free download <br /> for iPhone
          </div>
        </div>
        {/* Center: Decorative Wave Image */}
        <div className="flex justify-center items-center">
          <img
            src={oxoWave}
            alt="audio visual center"
            className="w-[65px] lg:w-[90px] h-auto mx-8"
          />
        </div>
        {/* Right: Android Download with extra right padding */}
        <div className="flex flex-col items-center gap-2 pr-10 lg:pr-24">
          <DiAndroid className="text-white text-7xl" />
          <div className="text-white text-md text-center mt-1">
            Free download <br /> for Android
          </div>
        </div>
      </div>

      {/* Feature Section: Feature Highlights */}
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-full max-w-6xl bg-[#222030] rounded-xl mx-4 lg:mx-0 px-4 lg:px-0 py-20 flex flex-col scroll-reveal">
          <h2 className="text-center text-white text-3xl lg:text-4xl font-bold mb-20">
            Use & stream your favorite music apps!
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center mx-6 scroll-reveal delay-1">
              <div className="relative mb-10">
                <span className="block w-32 h-32 bg-[#191025] rounded-full shadow-lg" />
                <FaRandom className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 text-6xl" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Beautiful widgets
              </h3>
              <p className="text-slate-200 text-center text-lg max-w-[240px]">
                Each time a digital asset is purchased or sold, Sequoir is
                donates a percentage
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center mx-6 scroll-reveal delay-2">
              <div className="relative mb-10">
                <span className="block w-32 h-32 bg-[#191025] rounded-full shadow-lg" />
                <FaListUl className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-6xl" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Works in background
              </h3>
              <p className="text-slate-200 text-center text-lg max-w-[240px]">
                Each time a digital asset is purchased or sold, Sequoir is
                donates a percentage
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center mx-6 scroll-reveal delay-3">
              <div className="relative mb-10">
                <span className="block w-32 h-32 bg-[#191025] rounded-full shadow-lg" />
                <FaHeadphonesAlt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400 text-6xl" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Stream any receiver
              </h3>
              <p className="text-slate-200 text-center text-lg max-w-[240px]">
                Each time a digital asset is purchased or sold, Sequoir is
                donates a percentage
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Centered Phone with Features and Wave Background */}
      <div
        className="w-full flex justify-center items-center py-24 relative overflow-visible scroll-reveal"
        style={{ minHeight: "700px" }}
      >
        {/* Left Features */}
        <div className="flex flex-col justify-center gap-32 items-end z-10 w-full max-w-xs">
          <div className="text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Apple AirPlay</h3>
            <p className="text-slate-200 text-lg">
              Each time a digital asset is purchased or sold, Sequoir is
              donates a percentage
            </p>
          </div>
          <div className="text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">SONOS Wireless HiFi</h3>
            <p className="text-slate-200 text-lg">
              Each time a digital asset is purchased or sold, Sequoir is
              donates a percentage
            </p>
          </div>
        </div>
        {/* Center: Phone and Background */}
        <div
          className="flex flex-col items-center justify-center relative z-20 mx-8"
          style={{ minWidth: "500px", minHeight: "600px" }}
        >
          {/* oxoBG - no scroll animation class here */}
          <img
            src={oxoBG}
            alt="Wave Background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "760px",
              height: "760px",
              zIndex: 10,
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
          <img
            src={oxoPhone}
            alt="Phone"
            className="relative z-20 w-[250px] md:w-[260px] h-auto rounded-2xl shadow-2xl scroll-reveal"
            style={{
              marginTop: "60px",
              border: "2px solid white",
            }}
          />
        </div>
        {/* Right Features */}
        <div className="flex flex-col justify-center gap-32 items-start z-10 w-full max-w-xs">
          <div className="text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Samsung Multiroom</h3>
            <p className="text-slate-200 text-lg">
              Each time a digital asset is purchased or sold, Sequoir is
              donates a percentage
            </p>
          </div>
          <div className="text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Strategy & Design</h3>
            <p className="text-slate-200 text-lg">
              Each time a digital asset is purchased or sold, Sequoir is
              donates a percentage
            </p>
          </div>
        </div>
      </div>

      {/* Section: Enjoy your music everywhere! */}
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-full max-w-6xl bg-[#191025] rounded-2xl mx-4 px-8 lg:px-20 py-20 flex flex-col lg:flex-row items-center scroll-reveal">
          {/* Image Left */}
          <div className="flex justify-center items-center w-full lg:w-1/2 mb-12 lg:mb-0">
            <img
              src={oxoMusicGirl}
              alt="Listen everywhere"
              className="max-w-[480px] w-full h-auto"
            />
          </div>
          {/* Text Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-16">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">
              Enjoy your music <br /> everywhere!
            </h2>
            <p className="text-slate-200 text-lg mb-8">
              Each time a digital asset is purchased or sold, Sequoir donates a
              percentage of the fees back into the development
            </p>
            <ul className="space-y-5">
              <li className="flex items-center text-lg text-slate-100">
                <FaWifi className="text-pink-500 mr-4 text-xl" />
                Works exactly like original{" "}
                <span className="font-bold ml-2">Apple AirPlay</span>
              </li>
              <li className="flex items-center text-lg text-slate-100">
                <FaMusic className="text-pink-500 mr-4 text-xl" />
                if you are listening to your music{" "}
                <span className="font-bold ml-2">AirAudio recognizes</span>
              </li>
              <li className="flex items-center text-lg text-slate-100">
                <FaStar className="text-pink-500 mr-4 text-xl" />
                for your favorite receivers{" "}
                <span className="font-bold ml-2">Create shortcuts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: The most powerful audio streamer for */}
      <div className="w-full flex justify-center items-center py-24">
        <div className="w-full max-w-6xl mx-4 px-6 lg:px-20 flex flex-col lg:flex-row items-center scroll-reveal">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The most powerful <br /> audio streamer for
            </h2>
            <p className="text-slate-200 text-lg mb-8 max-w-[400px]">
              Each time a digital asset is purchased or sold, Sequoir donates a
              percentage of the fees back into the development
            </p>
            <ul className="space-y-6">
              <li className="flex items-center text-lg text-slate-100">
                <FaWifi className="text-pink-500 mr-4 text-xl" />
                Works exactly like original{" "}
                <span className="font-bold ml-2">Apple AirPlay</span>
              </li>
              <li className="flex items-center text-lg text-slate-100">
                <FaTimes className="text-pink-500 mr-4 text-xl" />
                if you are listening to your music{" "}
                <span className="font-bold ml-2">AirAudio recognizes</span>
              </li>
              <li className="flex items-center text-lg text-slate-100">
                <FaStar className="text-pink-500 mr-4 text-xl" />
                for your favorite receivers{" "}
                <span className="font-bold ml-2">Create shortcuts</span>
              </li>
            </ul>
          </div>
          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
            <img
              src={oxoMusicGirl2}
              alt="Streamer Girl"
              className="max-w-[300px] w-full h-auto scroll-reveal"
            />
          </div>
        </div>
      </div>

      {/* Section: 25k+ users worldwide */}
      <div className="w-full flex flex-col items-center justify-center py-24 scroll-reveal">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
          25k+ users wordwide <br /> satisfied for using this great app
        </h2>

        <div className="relative w-full flex justify-center items-center">
          {/* oxoWorldMap: NO scroll-reveal here */}
          <img
            src={oxoWorldMap}
            alt="Users worldwide map"
            className="w-[1200px] h-[600px] max-w-full mx-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 scroll-reveal delay-1">
            <div className="text-pink-500 text-5xl font-bold mb-4">”</div>
            <p className="text-white text-base md:text-lg text-center max-w-xl mb-3">
              We’ve centralized all of our scientific data. It has significantly
              facilitated deeper insights from data and helped us move.
            </p>
            <p className="text-white font-semibold text-sm md:text-base">
              David Muller{" "}
              <span className="text-slate-300 font-normal">, CEO , Rogers</span>
            </p>
          </div>
        </div>
      </div>

      {/* Latest Blog & Stories */}
      <div className="w-full flex flex-col items-center justify-center py-24 scroll-reveal">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-14 text-center">
          Latest Blog &amp; Stories
        </h2>

        <div className="w-full max-w-6xl mx-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-transparent flex flex-col items-center card-hover-scale scroll-reveal delay-1">
            <div className="relative w-full">
              <img
                src={oxoBlog1}
                alt="Blog 1"
                className="w-full h-[230px] object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#EB4663] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                05 May,2020
              </div>
            </div>
            <div className="mt-8 text-center max-w-xs">
              <h3 className="text-white text-xl font-semibold mb-3">
                See How People Are Using <br /> Your Website With Hotjar
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Each time a digital asset is purchased or sold, Sequoir donates
                a percentage
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent flex flex-col items-center card-hover-scale scroll-reveal delay-2">
            <div className="relative w-full">
              <img
                src={oxoBlog2}
                alt="Blog 2"
                className="w-full h-[230px] object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#EB4663] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                05 May,2020
              </div>
            </div>
            <div className="mt-8 text-center max-w-xs">
              <h3 className="text-white text-xl font-semibold mb-3">
                See How People Are Using <br /> Your Website With Hotjar
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Each time a digital asset is purchased or sold, Sequoir donates
                a percentage
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent flex flex-col items-center card-hover-scale scroll-reveal delay-3">
            <div className="relative w-full">
              <img
                src={oxoBlog3}
                alt="Blog 3"
                className="w-full h-[230px] object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#EB4663] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                05 May,2020
              </div>
            </div>
            <div className="mt-8 text-center max-w-xs">
              <h3 className="text-white text-xl font-semibold mb-3">
                See How People Are Using <br /> Your Website With Hotjar
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Each time a digital asset is purchased or sold, Sequoir donates
                a percentage
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}






