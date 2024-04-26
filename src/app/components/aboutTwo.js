import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiCheckCircle, MdKeyboardArrowRight} from '../assets/icons/vander'

export default function AboutTwo(){
    return(
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative order-1 md:order-2">
                        <div className="relative overflow-hidden rounded-lg border border-green-400/5 bg-gradient-to-tl to-green-400/30  from-fuchsia-600/30 dark:to-green-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
                            <Image src="/images/getirtamirmotor.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt=""/>
                        </div>
                    </div>

                    <div className="order-2 md:order-1">
                        <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Siparişinizi verin,<br/> kuryemiz cihazınızı alıp tamir merkezimize getirsin.</h4>
                        <p className="text-slate-400">Akıllı telefonunuz veya tabletiniz için hızlı, pratik ve kolay bir servis arıyorsanız, en doğru adrestesiniz. Uzman ekibimizle tüm ihtiyaçlarınız için buradayız.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2"/> Hızlı Teslimat

</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2"/> Binlerce Kullanıcı</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2"/> EN DOĞRU ADRES

</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="" className="hover:text-green-400 font-medium duration-500 inline-flex items-center">3 ADIMDA CİHAZ TAMİRİ

<MdKeyboardArrowRight className="ms-1 text-[20px]"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}