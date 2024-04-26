"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TalepForm = () => {
    const [talepId, setTalepId] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setTalepId(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kullanıcının girdiği talepId ile talepInfo sayfasına yönlendirme yapılacak
        router.push(`/talepler/${talepId}`);
        

      
    };



  

    return (
        <form className='flex flex-row' onSubmit={handleSubmit}>
            <label>
                Talep ID:
                <input type="text" className='text-black' value={talepId} onChange={(e) => setTalepId(e.target.value)}
                />
            </label>
            <button type="submit">Talep Bilgilerini Getir</button>
        </form>
    );
};

export default TalepForm;
