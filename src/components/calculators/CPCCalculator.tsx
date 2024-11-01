import React, { useState } from 'react';
import { MousePointerClick } from 'lucide-react';

export default function CPCCalculator() {
  const [clicks, setClicks] = useState('');
  const [cost, setCost] = useState('');
  const [cpc, setCpc] = useState<number | null>(null);

  const calculateCPC = () => {
    const totalClicks = parseFloat(clicks);
    const totalCost = parseFloat(cost);
    
    if (totalClicks && totalCost) {
      const result = totalCost / totalClicks;
      setCpc(parseFloat(result.toFixed(2)));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <MousePointerClick className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-bold text-gray-800">CPC Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Clicks
          </label>
          <input
            type="number"
            value={clicks}
            onChange={(e) => setClicks(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter total clicks"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Cost ($)
          </label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter total cost"
          />
        </div>

        <button
          onClick={calculateCPC}
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
        >
          Calculate CPC
        </button>

        {cpc !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-800">
              CPC: ${cpc}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Cost per click
            </p>
          </div>
        )}
      </div>
    </div>
  );
}