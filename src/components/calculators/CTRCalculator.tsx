import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';

export default function CTRCalculator() {
  const [clicks, setClicks] = useState('');
  const [impressions, setImpressions] = useState('');
  const [ctr, setCtr] = useState<number | null>(null);

  const calculateCTR = () => {
    const totalClicks = parseFloat(clicks);
    const totalImpressions = parseFloat(impressions);
    
    if (totalClicks && totalImpressions) {
      const result = (totalClicks / totalImpressions) * 100;
      setCtr(parseFloat(result.toFixed(2)));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <BarChart2 className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-800">CTR Calculator</h2>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter total clicks"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Impressions
          </label>
          <input
            type="number"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter total impressions"
          />
        </div>

        <button
          onClick={calculateCTR}
          className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors"
        >
          Calculate CTR
        </button>

        {ctr !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-800">
              CTR: {ctr}%
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Click-through rate
            </p>
          </div>
        )}
      </div>
    </div>
  );
}