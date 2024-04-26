import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiCheckCircle, MdKeyboardArrowRight } from '../assets/icons/vander'

export default function AboutOne() {
    return (
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative overflow-hidden rounded-lg border border-green-400/5 bg-gradient-to-tl to-green-400/30  from-fuchsia-600/30 dark:to-green-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
                        <Image src="/images/getirtamirkurye.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt="" />
                    </div>

                    <div className="">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Neden Getir Tamir?

                            {/* <br/> Click With AI Power*/} </h3>
                        <p className="text-slate-400 max-w-xl">Getir Tamir, uzman teknik ekibi ve hızlı, güler yüzlü kurye hizmetiyle cihazlarınızı sorunsuz bir şekilde yeniden size ulaştırır.

                        </p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2" />HER ZAMAN EN İYİ HİZMET

                            </li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2" />6 Ay Parça Garantisi

                            </li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2" /> Memnun Kalmazsanız Ücret İadesi Garantisi

                            </li>

                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2" />
                                Ücretsiz Kurye Hizmeti

                            </li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-green-400 h-5 w-5 me-2" />Yedek Telefon
                            </li>
                        </ul>

                        <div className="mt-4">
                            <Link href="" className="hover:text-green-400 font-medium duration-500 inline-flex items-center">Siparişinizi verin, kuryemiz cihazınızı alıp tamir merkezimize getirsin.

<MdKeyboardArrowRight className="ms-1 text-[20px]" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}