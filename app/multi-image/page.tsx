'use client';

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import bird1 from '@/public/Images/bird1.jpg';
import bird2 from '@/public/Images/bird2.jpg';
import bird3 from '@/public/Images/bird3.jpg';
import dog1 from '@/public/Images/dog1.jpg';
import dog2 from '@/public/Images/dog2.jpg';
import cat1 from '@/public/Images/cat1.jpg';
import cat2 from '@/public/Images/cat2.jpg';
import Image from 'next/image';

export default function Page() {
    const [Items, setItems] = useState([
        { id: 1, img: bird1 },
        { id: 2, img: bird2 },
        { id: 3, img: bird3 },
        { id: 4, img: dog1 },
        { id: 5, img: dog2 },
        { id: 6, img: cat1 },
        { id: 7, img: cat2 },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🧩 Multi Image</h1>

            <div className="max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">🪄 Drag and Drop</h2>

                    <ReactSortable
                        list={Items}
                        setList={setItems}
                        animation={150}
                        tag="ul"
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                    >
                        {Items.map((item) => (
                            <li key={item.id}>
                                <Image className='rounded-lg' src={item.img} alt="image" />
                            </li>
                        ))}
                    </ReactSortable>
                </div>
            </div>
        </div>
    );
}