'use client';

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export default function Page() {
    const [Items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        { id: 11, name: 'Item 11' },
        { id: 12, name: 'Item 12' },
        { id: 13, name: 'Item 13' },
        { id: 14, name: 'Item 14' },
        { id: 15, name: 'Item 15' },
        { id: 16, name: 'Item 16' },
        { id: 17, name: 'Item 17' },
        { id: 18, name: 'Item 18' },
        { id: 19, name: 'Item 19' },
        { id: 20, name: 'Item 20' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🧩 Grid</h1>

            <div className="max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">🪄 Drag and Drop</h2>

                    <ReactSortable
                        list={Items}
                        setList={setItems}
                        animation={150}
                        tag="ul"
                        className="grid grid-cols-1 md:grid-cols-6 gap-8"
                    >
                        {Items.map((item) => (
                            <li key={item.id}>
                                <div className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-10 text-center px-5 rounded-lg transition-all duration-150 shadow-sm cursor-move">
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ReactSortable>
                </div>
            </div>
        </div>
    );
}