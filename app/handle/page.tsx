'use client';

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { IoMdMove } from "react-icons/io";

export default function Page() {
    const [Items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🧩 Handle</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">🪄 Drag and Drop</h2>

                    <ReactSortable
                        list={Items}
                        setList={setItems}
                        animation={150}
                        tag="ul"
                        handle='.handle'
                        className="space-y-3"
                    >
                        {Items.map((item) => (
                            <li key={item.id}>
                                <div className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-5 rounded-lg transition-all duration-150 shadow-sm flex items-center justify-between">
                                    <span className="handle cursor-grab text-xl"><IoMdMove/></span>
                                    <span>{item.name}</span>
                                </div>
                            </li>
                        ))}

                    </ReactSortable>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">📦 JSON Output</h2>
                    <div className="space-y-2 font-mono text-sm text-gray-600 bg-gray-50 p-4 rounded-lg max-h-[400px] overflow-auto">
                        {Items.map((item) => (
                            <p key={item.id} >{`{"id" : ${item.id} , "name" : ${item.name}}`}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}