"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TalepInfo = () => {
  const router = useRouter();
  const { talepId } = router.query;
  const [talepInfo, setTalepInfo] = useState(null);

  useEffect(() => {
    const fetchTalepInfo = async () => {
      try {
        const response = await fetch(`https://getirbot.vercel.app/talepler/${talepId}`);
        if (!response.ok) {
          throw new Error('Talep bilgileri alınamadı.');
        }
        const data = await response.json();
        setTalepInfo(data);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    if (talepId) {
      fetchTalepInfo();
    }
  }, [talepId]);

  if (!talepInfo) {
    return <div>Talep bilgileri yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Talep Detayları - ID: {talepId}</h1>
      <p>Ad Soyad: {talepInfo.adSoyad}</p>
      <p>Cihaz Türü: {talepInfo.cihazSecimi}</p>
      <p>Marka Model: {talepInfo.markaModel}</p>
      <p>Telefon: {talepInfo.telefon}</p>
      <p>Adres: {talepInfo.adres}</p>
      <p>Sorun: {talepInfo.sorunSecimi}</p>
      <p>Tarih: {talepInfo.formattedDate}</p>
    </div>
  );
};

export default TalepInfo;
