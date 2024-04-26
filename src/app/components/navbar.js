"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [scroll, setScroll] = useState(false);

    useEffect(()=>{
        activateMenu()
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
          });
    },[])

     /*********************/
 /*    Menu Active    */
 /*********************/
 function getClosest(elem, selector) {
 
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};

function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
            if (menuItems[idx].href === window.location.href) {
                matchingMenuItem = menuItems[idx];
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
         
         
            var immediateParent = getClosest(matchingMenuItem, 'li');
      
            if (immediateParent) {
                immediateParent.classList.add('active');
            }
            
            var parent = getClosest(immediateParent, '.child-menu-item');
            if(parent){
                parent.classList.add('active');
            }

            var parent = getClosest(parent || immediateParent , '.parent-menu-item');
        
            if (parent) {
                parent.classList.add('active');

                var parentMenuitem = parent.querySelector('.menu-item');
                if (parentMenuitem) {
                    parentMenuitem.classList.add('active');
                }

                var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}
/*********************/
/*  Clickable manu   */
/*********************/
if (typeof window !== "undefined"){
    if (document.getElementById("navigation")) {
        const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
        anchorArray.forEach(element => {
            element.addEventListener('click', (elem) => {
                const target = elem.target.getAttribute("href")
                if (target !== "") {
                    if (elem.target.nextElementSibling) {
                        var submenu = elem.target.nextElementSibling.nextElementSibling;
                        submenu.classList.toggle('open');
                    }
                }
            })
        });
    }
}

    return(
        <>
        <nav id="topnav" className={`${scroll ? "nav-sticky" : "" } defaultscroll is-sticky`}>
            <div className="container">
                <Link className="logo" href="/">
                    <img src="/images/getirtamir-logo.png"  className="h-8 inline-block dark:hidden" alt=""/>
                    <img src="/images/getirtamir-logo.png"  className="h-8 hidden dark:inline-block" alt=""/>
                </Link>
               
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`${toggleMenu ? 'open' : ''} navbar-toggle`}  onClick={()=>setToggleMenu(!toggleMenu)}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className="buy-button list-none mb-0">
                    <li className="inline mb-0">
                        <Link href="#">
                            <span className="py-[6px] px-4 md:inline hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-green-400/5 hover:bg-green-400 border border-green-400/10 hover:border-green-400 text-green-400 hover:text-white font-semibold">Talep Sorgula</span>
                            <span className="py-[6px] px-4 inline md:hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-green-400 hover:bg-green-500 border border-green-400 hover:border-green-500 text-white font-semibold">Talep Sorgula</span>
                        </Link>
                    </li>
            
                    {/* <li className="md:inline hidden ps-1 mb-0 ">
                        <Link href="/signup" target="_blank" className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-green-400 hover:bg-green-500 border border-green-400 hover:border-green-500 text-white font-semibold">Signup</Link>
                    </li> */}
                </ul>
                <div id="navigation" className={`${toggleMenu ? 'block' : ''}`}>
                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                            <Link href="/">Anasayfa</Link>
                           
                        </li>

                
                        {/* <li><Link href="/aboutus" className="sub-menu-item">Hakkımızda</Link></li> */}
                        {/* <li><Link href="/pricing" className="sub-menu-item">Pricing </Link></li> */}
                
                        {/* <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/services" className="sub-menu-item">Services</Link></li>
                        
                                <li className="has-submenu parent-menu-item"><Link href="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/blog" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link href="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                        
                                <li><Link href="/helpcenter" className="sub-menu-item">Helpcenter</Link></li>

                                <li className="has-submenu parent-menu-item"><Link href="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/login" className="sub-menu-item"> Talep Sorgula</Link></li>
                                        <li><Link href="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li><Link href="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link href="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                        
                                <li><Link href="/error" className="sub-menu-item"> 404!</Link></li>
                            </ul>
                        </li> */}
                
                        <li><Link href="/contact" className="sub-menu-item">İletişim</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}