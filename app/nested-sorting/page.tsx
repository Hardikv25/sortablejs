'use client';

import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function NestedSortable() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      children: [
        { id: 11, name: "Item 1.1" },
        { id: 12, name: "Item 1.2" },
        { id: 13, name: "Item 1.3" },
      ],
    },
    {
      id: 2,
      name: "Item 2",
      children: [
        { id: 21, name: "Item 2.1" },
        { id: 22, name: "Item 2.2" },
      ],
    },
    {
      id: 3,
      name: "Item 3",
      children: [
        { id: 32, name: "Item 3.2" },
      ],
    },
    {
      id: 4,
      name: "Item 4",
      children: [],
    },
  ]);

  const updateItemChildren = (parentId, newChildren) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === parentId ? { ...item, children: newChildren } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        🧩 Nested Sortable
      </h1>

      {/* Top-level sortable */}
      <ReactSortable
        list={items}
        setList={setItems}
        group="nested"
        animation={150}
        fallbackOnBody={true}
        swapThreshold={0.65}
        tag="ul"
        className="space-y-4 max-w-2xl mx-auto border p-4 rounded"
      >
        {items.map((item) => (
          <li key={item.id} className="bg-white p-4 rounded shadow">
            <div className="cursor-move font-medium">{item.name}</div>

            {item.children && (
              <ReactSortable
                list={item.children}
                setList={(newChildren) =>
                  updateItemChildren(item.id, newChildren)
                }
                group="nested"
                animation={150}
                fallbackOnBody={true}
                swapThreshold={0.65}
                tag="ul"
                className="ml-6 mt-3 space-y-2 border-l pl-4"
              >
                {item.children.map((child) => (
                  <li
                    key={child.id}
                    className="bg-gray-100 p-2 rounded shadow cursor-move"
                  >
                    {child.name}
                  </li>
                ))}
              </ReactSortable>
            )}
          </li>
        ))}
      </ReactSortable>

      {/* Display updated array of objects */}
      <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded shadow text-sm overflow-auto">
        <h2 className="text-lg font-semibold mb-2">📦 Current Structure:</h2>
        <pre className="whitespace-pre-wrap break-words text-gray-800">
          {JSON.stringify(
            items.map(({ id, name, children }) => ({
              id,
              name,
              children: children?.map(({ id, name }) => ({ id, name }))
            })),
            null,
            6
          )}

        </pre>
      </div>
    </div>
  );
}
