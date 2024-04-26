import React from "react";
import Image from "next/image";

export default function BrandLogo(){
    const brandLogo = ["/images/client/amazon.svg","/images/client/google.svg","/images/client/lenovo.svg","/images/client/paypal.svg","/images/client/shopify.svg","/images/client/spotify.svg"]
    return(
        <div className="container relative">
            <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
                {brandLogo.map((item,index) => {
                   return(
                        <div className="mx-auto py-4" key={index}>
                            <Image width={280} height={100} src={item} className="h-12" alt=""/>
                        </div>
                   )
                })}
            </div>
        </div>
    )
}