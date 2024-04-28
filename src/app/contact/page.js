"use client"
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {FiHexagon, FiPhone,FiMail, FiMapPin} from "../assets/icons/vander"

export default function Contact(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    return(
        <>
        <Navbar/>
     
        <section className="relative lg:py-24 py-16">
       
            
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[30px]">
                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <FiHexagon className="h-24 w-24 fill-green-400/5 group-hover:fill-white/10 mx-auto"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                                <FiPhone/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-lg font-semibold">Telefon</h5>
                            {/* <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p> */}
                            
                            <div className="mt-5">
                                <Link href="tel:+905424429758" className="hover:text-green-400">+90 542 442 97 58</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <FiHexagon className="h-24 w-24 fill-green-400/5 group-hover:fill-white/10 mx-auto"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                               <FiMail/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-lg font-semibold">Email</h5>
                            {/* <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p> */}
                            
                            <div className="mt-5">
                                <Link href="mailto:contact@example.com" className="hover:text-green-400">info@getirtamir.com.tr</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <FiHexagon className="h-24 w-24 fill-green-400/5 group-hover:fill-white/10 mx-auto"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                                <FiMapPin/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-lg font-semibold">Konum</h5>
                            <p className="text-slate-400 mt-3">Kadıköy, <br/> İstanbul</p>
                            
                            {/* <div className="mt-5">
                                <Link href="#"
                                data-type="iframe" className="video-play-icon read-more lightbox hover:text-green-400">View on Google map</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}