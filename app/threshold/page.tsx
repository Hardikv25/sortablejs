'use client';

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Sortable, { Swap } from 'sortablejs';

Sortable.mount(new Swap());

export default function Page() {
  const [Items, setItems] = useState([
    { id: 1, name: '1' },
    { id: 2, name: '2' },
  ]);
  const [swapThreshold, setSwapThreshold] = useState(0);
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');

  const getSwapBackground = () => {
    const deadZone = (1 - swapThreshold) / 2;
    const start = deadZone * 100;
    const end = (1 - deadZone) * 100;

    if (direction === 'horizontal') {
      return `linear-gradient(to right, #93c5fd 0%, #3b82f6 ${start}%, #1e3a8a ${start}%, #1e3a8a ${end}%, #3b82f6 ${end}%, #93c5fd 100%)`;
    } else {
      return `linear-gradient(to bottom, #93c5fd 0%, #3b82f6 ${start}%, #1e3a8a ${start}%, #1e3a8a ${end}%, #3b82f6 ${end}%, #93c5fd 100%)`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🎯 Thresholds</h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📦 Drag and Drop Demo</h2>

          <ReactSortable
            list={Items}
            setList={setItems}
            animation={150}
            swap={true}
            swapThreshold={swapThreshold}
            direction={direction}
            className={`flex ${direction === 'horizontal' ? 'flex-row gap-4' : 'flex-col space-y-4'}`}
          >
            {Items.map((item) => (
              <div
                key={item.id}
                className="w-32 h-32 text-white text-3xl flex items-center justify-center rounded-md shadow-md select-none cursor-move"
                style={{
                  background: getSwapBackground(),
                }}
              >
                {item.name}
              </div>
            ))}
          </ReactSortable>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">⚙️ Controls</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Swap Threshold: <strong>{swapThreshold}</strong>
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={swapThreshold}
              onChange={(e) => setSwapThreshold(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Direction</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value as 'horizontal' | 'vertical')}
              className="mt-1 px-1 py-2 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
