"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/navigation'
import Verify from '../verify/page';

function Page() {
    const [adSoyad, setAdSoyad] = useState('');
    const [markaModel, setMarkaModel] = useState('');
    const [telefon, setTelefon] = useState('');
    const [adres, setAdres] = useState('');
    const [sorunSecimi, setSorunSecimi] = useState('');
    const [cihazSecimi, setCihazSecimi] = useState('');
    const [not, setNot] = useState('');
    const [sifre, setSifre] = useState('');
    const [loading, setLoading] = useState(false);
    const [talepId, setTalepId] = useState(null);

    const now = new Date();
    const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false
    });

    const formattedDate = dateFormatter.format(now).replace(/\./g, '/').replace(',', ' |');
    const router = useRouter();

    const sorunlar = [
        { id: 1, label: 'Ekran Sorunları' },
        { id: 2, label: 'Batarya Sorunları' },
        { id: 3, label: 'Ses Sorunları' },
        { id: 4, label: 'Kamera Sorunları' },
        { id: 5, label: 'Tuş Sorunları' },
        { id: 6, label: 'Güç / Şebeke Sorunları' },
        { id: 7, label: 'Ağ / Bağlantı Sorunları' },
        { id: 8, label: 'Kozmetik Sorunlar' },
        { id: 9, label: 'Titreşim Sorunları' },
        { id: 10, label: 'Sıvı Teması' },
        { id: 11, label: 'Cam Değişimi' },
        { id: 12, label: 'Diğer' }
    ];

    const cihazlar = [
        { id: 1, label: 'Telefon' },
        { id: 2, label: 'Tablet' },
        { id: 3, label: 'Bilgisayar Kasa' },
        { id: 4, label: 'Laptop' },
        { id: 12, label: 'Diğer' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const router = useRouter();

        const generatedTalepId = Math.floor(100000 + Math.random() * 900000);
        const apiUrl = 'https://getirbot.vercel.app/api/submit-form';

        const requestBody = {
            talepId: generatedTalepId,
            adSoyad: adSoyad,
            cihazSecimi: cihazSecimi,
            markaModel: markaModel,
            telefon: telefon,
            adres: adres,
            not: not,
            sorunSecimi: sorunSecimi,
            formattedDate: formattedDate,
            sifre: sifre,
        };

        console.log('Request Body:', requestBody);

       
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            console.log('Form data sent successfully with talepId:', generatedTalepId);
            setTalepId(generatedTalepId);
        } catch (error) {
            console.error('Error during form submission:', error);
            // Kullanıcıya hata mesajını göstermek için uygun bir yöntem ekleyebilirsiniz
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (talepId) {
        return <Verify talepId={talepId} />;
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="grid min-h-screen  grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-semibold">Tamir Talebi Oluştur</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="adSoyad" className="font-semibold">İsim Soyisim:</label>
                                            <input
                                                name="adSoyad"
                                                id="adSoyad"
                                                type="text"
                                                value={adSoyad}
                                                onChange={(e) => setAdSoyad(e.target.value)}
                                                className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                placeholder="Adınız :"
                                            />
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="cihazSecimi" className="font-semibold">Cihaz Seçimi:</label>
                                            <select
                                                id="cihazSecimi"
                                                name="cihazSecimi"
                                                className="select select-primary w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                value={cihazSecimi}
                                                onChange={(e) => setCihazSecimi(e.target.value)}
                                            >
                                                <option value="69">Lütfen bir cihaz türü seçiniz</option>
                                                {cihazlar.map(cihaz => (
                                                    <option key={cihaz.id} value={cihaz.label}>
                                                        {cihaz.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="markaModel" className="font-semibold">Marka Model:</label>
                                            <input
                                                name="markaModel"
                                                id="markaModel"
                                                type="text"
                                                value={markaModel}
                                                onChange={(e) => setMarkaModel(e.target.value)}
                                                className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                placeholder="Marka Model :"
                                            />
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="sorunSecimi" className="font-semibold">Sorun Seçimi:</label>
                                            <select
                                                id="sorunSecimi"
                                                name="sorunSecimi"
                                                className="select select-primary w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                value={sorunSecimi}
                                                onChange={(e) => setSorunSecimi(e.target.value)}
                                            >
                                                <option value="31">Lütfen sorununuza en yakın olanı seçiniz</option>
                                                {sorunlar.map(sorun => (
                                                    <option key={sorun.id} value={sorun.label}>
                                                        {sorun.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="telefon" className="font-semibold">Telefon No:</label>
                                            <input
                                                name="telefon"
                                                id="telefon"
                                                type="text"
                                                value={telefon}
                                                onChange={(e) => setTelefon(e.target.value)}
                                                className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                placeholder="Telefon :"
                                            />
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="sifre" className="font-semibold">Ekran Şifresi:</label>
                                            <input
                                                name="sifre"
                                                id="sifre"
                                                value={sifre}
                                                onChange={(e) => setSifre(e.target.value)}
                                                className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2"
                                                placeholder="Ekran Şifresi :"
                                            />
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="adres" className="font-semibold">Adres:</label>
                                            <textarea
                                                name="adres"
                                                id="adres"
                                                value={adres}
                                                onChange={(e) => setAdres(e.target.value)}
                                                className="form-input w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2 h-40"
                                                placeholder="Adres :"
                                            ></textarea>
                                        </div>
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="not" className="font-semibold">Not:</label>
                                            <textarea
                                                name="not"
                                                id="not"
                                                value={not}
                                                onChange={(e) => setNot(e.target.value)}
                                                className="form-input w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-400 dark:border-gray-800 dark:focus:border-green-400 focus:ring-0 mt-2 h-40"
                                                placeholder="Not :"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        id="submit"
                                        name="send"
                                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-400 hover:bg-green-500 border-green-400 hover:border-green-500 text-white rounded-md"
                                    >
                                        Talep Oluştur
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
