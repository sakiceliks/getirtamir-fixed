import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail,FiFileText} from '../assets/icons/vander'

export default function Footer(){
    return(
        <>
         <div className="relative">
            <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <footer className="relative bg-gray-900 overflow-hidden">
            <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-green-400  from-fuchsia-600 z-0"></span>
            <div className="container-fluid relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        {/* <div className="">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">Start Your Free Trail.</h4>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>

                            <div className="mt-6">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-green-400 border-gray-800 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-400 text-white rounded-md">Join Now!</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="container relative text-center">
                <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
                    <div className="py-[30px] px-0">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <Link href="#" className="text-[22px] focus:outline-none">
                                    <Image src="/images/getirtamir-logo.png" width={127} height={24} className="mx-auto md:me-auto md:ms-0" alt=""/>
                                </Link>
                            </div>

                          <div className="mt-5 w-12">
                         <Link target="_blank" href="https://api.whatsapp.com/send?phone=905424429758" >
                         <button className="bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
WHATSAPP</button>
                         </Link> </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="text-gray-400">© {new Date().getFullYear()} Created by <i className="mdi mdi-heart text-orange-700"></i> by <Link href="https://sakicelik.com.tr/" target="_blank" className="text-reset">SakiCelik</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}