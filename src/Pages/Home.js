
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Route, Routes } from "react-router-dom";
import Navbar from '../Component/Navbar';

const Page = () => {
    return (

        <section className='bg-black'>
            <Navbar></Navbar>
            {/* heroscreen */}
            <div className="relative h-screen sm:mt-14">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover object-center"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content Overlay */}
                <div className="absolute sm:top-[55%] top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-[rgba(161,161,161,0.95)]  rounded-[35px]  lg:w-[43%] md:w-[60%] sm:w-[70%] w-[80%] p-8">
                    <div className="flex flex-col items-center justify-center ">
                        {' '}
                        <img
                            src="/portfolio.png"
                            width={300}
                            height={300}
                            alt="img1"
                            className="py-2"
                        />
                        <h1 className="text-6xl leading-[1.15] py-2 font-bold mb-4 font-Birthstone">
                            Matthew Ventures
                        </h1>
                        <p className="text-4xl font-[600]  text-white py-3">
                            family man,<br /> gameplay engineer,<br /> vegan home-cook
                        </p>
                        <button className='bg-transparent border border-white px-5 py-2 font-bold text-2xl '>RESUME</button>
                        {/* icos  */}
                        <div className="flex py-5 space-x-3 ">
                            <FaFacebook className='hover:text-black transition-colors duration-200  cursor-pointer text-xl' />
                            <FaTwitter className='hover:text-black transition-colors duration-200  cursor-pointer text-xl' />
                            <FaLinkedin className='hover:text-black transition-colors duration-200  cursor-pointer text-xl' />
                            <IoMailOutline className='hover:text-black transition-colors duration-200  cursor-pointer text-xl' />
                        </div>
                    </div>
                </div>

                {/* Responsive Full-screen Overlay for Small Devices */}
            </div>
            {/* other section  */}
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-10 md:pt-14 mt-20 bg-[#2d2d2d] md:space-x-5">
                {/* leftside   */}
                <div className="flex flex-col justify-center items-center md:w-[50%] w-full">
                    <h1 className="md:text-6xl sm:text-6xl text-3xl text-slate-50 font-Agbalumo "> Main Quests</h1>
                    {/* card1 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card1.jpg' width={388} height={194} alt='card1' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold underline">id Software</span> ( Gameplay Engineer )</p>
                            <p className="">---- Developed several AI from concept to ship-ready</p>
                            <p className="">---- Led documentation efforts across multiple disciplines </p>
                            <p className="">---- Continually improved internal tooling and dev workflows</p>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card2.jpg' width={388} height={194} alt='card2' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://www.callofduty.com/playnow/warzone">Call of Duty: Warzone</a> </span>( Assoc. Gameplay Engineer )</p>
                            <p className="">----Implemented the fast-paced Exfiltration game mode <a className='underline' href="https://gamerant.com/call-of-duty-warzone-exfiltration-details/">🔗</a></p>
                            <p className="">----​Designed & implemented seasonal event content<a className='underline' href="https://gamerant.com/call-of-duty-warzone-missiles-flying-march-2021/">🔗</a></p>
                            <p className="">----Designed & implemented bespoke mid-season content<a className='underline' href="https://gamerant.com/call-of-duty-warzone-exfiltration-details/">🔗</a></p>
                            <p className="">​​----Designed & implemented marquee seasonal content <a className='underline' href="https://gamerant.com/call-of-duty-warzone-exfiltration-details/">🔗</a></p>

                        </div>
                    </div>
                    {/* card3  */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card3.png' width={388} height={194} alt='card3' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://www.epicgames.com/fortnite/">Fortnite</a> </span>( Intern Gameplay Engineer )</p>
                            <p className="">---- Engineered user-facing tools for map creation and design</p>
                            <p className="">​​---- Optimized networked objects to reduce latency</p>
                            <p className="">​​---- Solved transformation matrix bugs with wicked 3D maths</p>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card4.jpg' width={388} height={194} alt='card4' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://www.epicgames.com/fortnite/">God of War: Ragnarok</a> </span>( Intern Gameplay Engineer )</p>
                            <p className="">---- Created a runtime tool to visualize animation branching</p>
                            <p className="">​​---- Designed visual scripting nodes for AI behavior trees</p>
                            <p className="">​​---- Amended a dialogue tool to speed-up iteration time</p>
                        </div>
                    </div>


                </div>
                {/* right side  */}
                <div className="flex flex-col justify-start items-center md:w-[50%] w-full">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-slate-50 font-Agbalumo md:text-6xl sm:text-6xl text-3xl text-slate-50 font-Agbalumo"> Side Quests</h1>
                    {/* card5 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card5.png' width={388} height={194} alt='card5' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://store.steampowered.com/app/1338320/Do_Animals_Dream/">Do Animals Dream?</a> </span>( self-published indie game )</p>
                            <p className="">---- Inspired thousands of players to 'go vegan' for 7+ days<a className='underline' href="https://gamerant.com/call-of-duty-warzone-exfiltration-details/">🔗</a></p>
                            <p className="">---- Twitch Gaming's 2021 "The Weekly" highlight<a className='underline' href="https://gamerant.com/call-of-duty-warzone-missiles-flying-march-2021/">🔗</a></p>
                            <p className="">---- Launch-day IGN exclusive interview<a className='underline' href="https://gamerant.com/call-of-duty-warzone-exfiltration-details/">🔗</a></p>
                            <p className="">---- Awesome Foundation 2021 Grant Recipient</p>
                        </div>
                    </div>
                    {/* card6 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card6.jpeg' width={388} height={194} alt='card6' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://nostranger.weebly.com/">NoStranger</a> </span>( self-published indie game )</p>
                            <p className="">---- Reached millions of players, through 15+ langauges</p>
                            <p className="">---- Finalist of Google Play's 2017 Indie Games Festival</p>

                        </div>
                    </div>
                    {/* card7 */}
                    <div className="pt-10 text-white flex flex-col justify-center w-full items-center">
                        <img src='/card7.jpg' width={388} height={194} alt='card7' />
                        <div className="flex flex-col text-start text-[16px] py-5 space-y-1">
                            <p className=""><span className="font-semibold text-blue-400 underline"><a className='underline' href="https://stanfordgamedev.weebly.com/">CS 146: Introduction to Game Development </a> </span>( Instructor )</p>
                            <p className="">​---- Taught 100+ Stanford students how to create videogames</p>
                            <p className="">---- Placed my students into competitive roles within industry</p>

                        </div>
                    </div>

                </div>

            </div>

            {/* footer  */}
            <div className="bg-[#2d2d2d] flex flex-col w-full justify-center items-center text-white space-y-3 pb-3">
                <h3 className="italic font-bold text-xl block">But wait... there's more!</h3>

                <p className="mb-3">You can find more of my adventures</p>
                <p className="mb-3">in my <span className="underline text-blue-600 decoration-blue-600">resume!</span></p>
            </div>
            <div className='p-28 bg-white'></div>
        </section>
    );
};

export default Page;
