"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TypeAnimation } from 'react-type-animation';
import Navbar from './components/navbar';
import BrandLogo from './components/brandLogo';
import AboutOne from './components/aboutOne';
import AboutTwo from './components/aboutTwo';
import Faq from './components/Faq';
import Footer from './components/footer';
import toast, { Toaster } from 'react-hot-toast';

const components = {
  Navbar: dynamic(() => import('./components/navbar')),
  BrandLogo: dynamic(() => import('./components/brandLogo')),
  AboutOne: dynamic(() => import('./components/aboutOne')),
  AboutTwo: dynamic(() => import('./components/aboutTwo')),
  Faq: dynamic(() => import('./components/Faq')),
  Footer: dynamic(() => import('./components/footer')),
};

export default function Index() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

 


  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden pt-48 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-green-400/30  after:from-fuchsia-600/30 dark:after:to-green-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative z-2">
          <div className="grid grid-cols-1 text-center">
            <div className="">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">Cihazınız <br />
                <TypeAnimation
                  sequence={[
                    'Kırıldıysa',
                    1000,
                    'Suya Düştüyse',
                    1000,
                    'Şarj Olmuyorsa',
                    1000
                  ]}
                  wrapper="span"
                  speed={10}
                  className="typewrite bg-gradient-to-br from-green-400 to-green-600 text-transparent bg-clip-text ms-4"
                  repeat={Infinity}
                />

<br />
Getir Tamir'e
              </h4>
            
              <p className="text-white font-semibold text-lg max-w-xl mx-auto">Telefonunuz mu bozuldu? <br /> <span className="text-green-400">Getir Tamir</span>, sorunu çözmek için hizmetinizde.</p>
              <div className="mt-6">
                <Link href="/talep-olustur" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-400 hover:bg-green-500 border-green-400 hover:border-green-500 text-white rounded-md">Talep Oluştur</Link>
              </div>
            </div>
            <div className="relative mt-8 z-3">
              <Image src="/images/classic01.png" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="" className="mover" />
            </div>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute lg:after:-bottom-40 after:-bottom-28 after:end-0 after:start-0 after:mx-auto xl:after:w-[56rem] lg:after:w-[48rem] md:after:w-[32rem] after:w-[22rem] xl:after:h-[56rem] lg:after:h-[48rem] md:after:h-[32rem] after:h-[22rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-200/10 after:rounded-full after:-z-1 before:content-[''] before:absolute lg:before:-bottom-72 before:-bottom-56 before:end-0 before:start-0 before:mx-auto xl:before:w-[72rem] lg:before:w-[64rem] md:before:w-[48rem] before:w-[24rem] xl:before:h-[72rem] lg:before:h-[64rem] md:before:h-[48rem] before:h-[24rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-200/10 before:rounded-full before:-z-1"></div>
      </section>
      <section className="pt-6">
        <BrandLogo />
      </section>
      <section className="relative md:py-24 py-16">
        <AboutOne />
        <AboutTwo />
        <Faq />
      <Toaster />      </section>
      <Footer />
    </>
  );
 }