'use client';

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export default function Page() {
    const [Items1, setItems1] = useState([
        { id: 1.1, name: 'Item-1.1', from: 'list1' },
        { id: 1.2, name: 'Item-1.2', from: 'list1' },
        { id: 1.3, name: 'Item-1.3', from: 'list1' },
        { id: 1.4, name: 'Item-1.4', from: 'list1' },
        { id: 1.5, name: 'Item-1.5', from: 'list1' },
    ]);
    const [Items2, setItems2] = useState([
        { id: 2.1, name: 'Item-2.1', from: 'list2' },
        { id: 2.2, name: 'Item-2.2', from: 'list2' },
        { id: 2.3, name: 'Item-2.3', from: 'list2' },
        { id: 2.4, name: 'Item-2.4', from: 'list2' },
        { id: 2.5, name: 'Item-2.5', from: 'list2' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🧩 Cloning List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
                {/* List 1 */}
                <div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">List 1</h2>
                        <ReactSortable
                            list={Items1}
                            setList={setItems1}
                            animation={150}
                            group={{
                                name: 'shared',
                                pull: 'clone', // To clone: set pull to 'clone'
                            }}
                            tag="ul"
                            className="space-y-3"
                        >
                            {Items1.map((item, Index) => (
                                <li key={Index}>
                                    <div
                                        className={`
    py-3 px-5 rounded-lg transition-all duration-150 shadow-sm cursor-move
    ${item.from === 'list1' ? 'bg-yellow-100 hover:bg-yellow-200' : 'bg-green-100 hover:bg-green-200'}
  `}
                                    >
                                        {item.name}
                                    </div>

                                </li>
                            ))}
                        </ReactSortable>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border mt-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">📦 JSON Output</h2>
                        <div className="space-y-2 font-mono text-sm text-gray-600 bg-gray-50 p-4 rounded-lg max-h-[400px] overflow-auto">
                            {Items1.map((item, Index) => (
                                <p key={Index} >{`{"id" : ${item.id} , "name" : ${item.name}}`}</p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* List 2 */}
                <div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">List 2</h2>
                        <ReactSortable
                            list={Items2}
                            setList={setItems2}
                            animation={150}
                            group={{
                                name: 'shared',
                                pull: 'clone', // To clone: set pull to 'clone'
                                // put: false
                            }}
                            tag="ul"
                            className="space-y-3"
                        >
                            {Items2.map((item, Index) => (
                                <li key={Index}>
                                    <div
                                        className={`
    py-3 px-5 rounded-lg transition-all duration-150 shadow-sm cursor-move
    ${item.from === 'list1' ? 'bg-yellow-100 hover:bg-yellow-200' : 'bg-green-100 hover:bg-green-200'}
  `}
                                    >
                                        {item.name}
                                    </div>

                                </li>
                            ))}
                        </ReactSortable>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border mt-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">📦 JSON Output</h2>
                        <div className="space-y-2 font-mono text-sm text-gray-600 bg-gray-50 p-4 rounded-lg max-h-[400px] overflow-auto">
                            {Items2.map((item, Index) => (
                                <p key={Index} >{`{"id" : ${item.id} , "name" : ${item.name}}`}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}