import React, { useState } from "react";
import Link from "next/link";

import {MdKeyboardArrowDown} from '../assets/icons/vander'

export default function Faq(){
    const [activeIndex, setActiveIndex] = useState(1)
    const accordionData = [
        {
            id:1,
            title:'Telefonumu tamir ettirmek için nasıl bir yol izlemeliyim?',
            desc:' Telefonunuzun tamir edilmesi için ilk adım olarak web sitemizdeki iletişim formunu doldurabilir veya bizi arayabilirsiniz. Size en yakın kurye hizmetimizi ayarlamak için gerekli bilgileri alacağız ve cihazınızın alınması için bir zaman planlayacağız.'
        },
        {
            id:2,
            title:'Tamir edilmiş telefonumu geri almak için ne zaman beklemeliyim?',
            desc:'Cihazınızın tamir süresi, sorunun karmaşıklığına ve parça teminine bağlı olarak değişebilir. Ancak, genellikle cihazınızı alıp teslim etmek için uygun bir zaman dilimi belirleyeceğiz ve bu süreye sadık kalacağız. Size en yakın konumumuza göre bu süreyi netleştirebiliriz.'
        },
        {
            id:3,
            title:'Kurye hizmetiniz için ek bir ücret alınıyor mu?',
            desc:'Hayır, kurye hizmetimiz için ek bir ücret talep etmiyoruz. Tamir hizmetimizin bir parçası olarak, cihazınızın alınması ve geri getirilmesi için gerekli olan kurye masraflarını karşılıyoruz. Bu sayede sizin için ek bir yük oluşturmadan, kolay ve hızlı bir şekilde hizmet sunuyoruz.'
        },
        {
            id:4,
            title:'Tamir süreci boyunca cihazım güvende mi olacak?',
            desc:'Evet, cihazınız bizim sorumluluğumuz altında tamir edilirken güvende olacak. Kurye hizmetimizde, cihazınızı güvenli bir şekilde almak ve teslim etmek için profesyonel ve güvenilir ekiplerimiz bulunmaktadır. Ayrıca, tamir edilirken cihazınızın güvenliği ve gizliliği konusunda gerekli tüm önlemleri alıyoruz.'
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Sorunuz mu var?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Bizimle İletişime Geçin</p>

                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-green-400 border-gray-100 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-400 text-slate-900 dark:text-white hover:text-white rounded-md">İletişim</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8">
                        {accordionData.map((item,index)=>{
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={()=>setActiveIndex(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-green-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span>{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`}/>
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </>
    )
}