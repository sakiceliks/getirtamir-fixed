// /pages/talepler/[talepId].js
"use client";
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const TalepInfo = () => {
  const params = useParams();
  const router = useRouter();
  const [talepInfo, setTalepInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Başlangıçta yükleme durumunu true olarak ayarlayın
  const [validId, setValidId] = useState(true); // İsteğin yapıldığı id'nin geçerli olup olmadığını belirten durum

  useEffect(() => {
    const fetchTalepInfo = async () => {
      try {
        if (!params?.id) {
          return;
        }
        
        const response = await fetch(`https://getirbot.vercel.app/talepler/${params.talepId}`);

        if (!response.ok) {
          setValidId(false); // Geçersiz talep numarası olduğunda durumu false olarak ayarlayın
          setLoading(false); // Yükleme durumunu güncelleyin
          return;
        }

        const data = await response.json();
        setTalepInfo(data);
        setLoading(false); // Yükleme tamamlandığında yükleme durumunu false olarak ayarlayın
        setValidId(true); // İsteğin yapıldığı id geçerli olduğunda durumu true olarak ayarlayın
      } catch (error) {
        console.error('Hata:', error);
        setLoading(false); // Hata oluştuğunda da yükleme durumunu false olarak ayarlayın
        setValidId(false); // Geçersiz talep numarası olduğunda durumu false olarak ayarlayın
      }
    };

    fetchTalepInfo();
  }, [params.id]);

  return (
    <div>
      {loading && <div>Yükleniyor...</div>}
      {!loading && !validId && <div>Talep numarası geçersiz.</div>} {/* Geçersiz talep numarası durumunda bilgilendirici mesajı gösterin */}
      {!loading && validId && ( // Geçerli talep numarası durumunda bilgileri gösterin
        <>
         
          {talepInfo && (
            <>
    

            <table className="border-collapse w-full translate-y-20 mt-10 p-4">
  <thead>
    <tr>
      <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
        Company name
      </th>
      <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
        CİHAZ TÜRÜ
      </th>
      <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
        DURUMU
      </th>
      <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
        DÜZENLE
      </th>
    </tr>
  </thead>
  <tbody>
  <tr className="bg-primary  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
ADI SOYADI        </span>
        {talepInfo.adSoyad}       </td>
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
         CİHAZ TÜRÜ
       </span>
{talepInfo.cihazSecimi}  
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
         CİHAZ SORUNU
       </span>
{talepInfo.sorunSecimi}  
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
ADRES       </span>
{talepInfo.adres}  
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
NOT       </span>
{talepInfo.not}  
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
          DURUMU
        </span>
        <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
          deleted
        </span>
      </td>
    
      <td className="w-full lg:w-auto p-3 text-gray-100 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-green-500 px-2 py-1 text-xs font-bold uppercase">
          DÜZENLE
        </span>
        {/* <a href="#" className="text-blue-400 hover:text-blue-600 underline">
          Edit
        </a>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-600 underline pl-6"
        >
          Remove
        </a> */}
      </td>
    </tr>
  </tbody>
</table>

             
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TalepInfo;
