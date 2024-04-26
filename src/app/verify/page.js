"use client";
// Verify.js

import React from 'react';
import Link from 'next/link';

function Verify({ talepId }) {
    return (
        <div className=" h-screen">
            <div className=" p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-400 w-16 h-16 mx-auto my-6">
                    <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                    ></path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-3xl text-3xl text-white  font-semibold text-center">
                        Talebiniz Oluşturuldu !
                    </h3>
                    <p className="text-gray-100 my-2">
                        Talebiniz başarı ile oluşturuldu. Teknisyenlerimiz size dönüş yapacaktır.
                    </p>
                    <p className='text-green-500 font-bold'> Bizi Tercih Ettiğiniz İçin Teşekkürler!</p>
                    <div className="mx-auto py-5 flex flex-col max-w-xs text-center">
                        <div className='bg-slate-800'>
                            <p className='text-rose-400 m-5 font-bold'>Lütfen Kaydedin yada Ekran Görüntüsü alın !</p>
                        </div>
                        <p className='text-white font-bold'>TALEP NO</p>
                        <div className="px-12 bg-indigo-600 hover:bg-indigo-300 text-white font-semibold py-3">
                            {talepId}
                        </div>
                        <Link href="/" className="px-12 bg-green-400 hover:bg-green-400 text-white font-semibold py-3">
                            Geri Dön
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verify;
