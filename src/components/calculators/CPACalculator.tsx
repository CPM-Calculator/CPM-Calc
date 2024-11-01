import React, { useState } from 'react';
import { Target } from 'lucide-react';

export default function CPACalculator() {
  const [conversions, setConversions] = useState('');
  const [cost, setCost] = useState('');
  const [cpa, setCpa] = useState<number | null>(null);

  const calculateCPA = () => {
    const totalConversions = parseFloat(conversions);
    const totalCost = parseFloat(cost);
    
    if (totalConversions && totalCost) {
      const result = totalCost / totalConversions;
      setCpa(parseFloat(result.toFixed(2)));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-6 h-6 text-orange-600" />
        <h2 className="text-xl font-bold text-gray-800">CPA Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Conversions
          </label>
          <input
            type="number"
            value={conversions}
            onChange={(e) => setConversions(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter total conversions"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter total cost"
          />
        </div>

        <button
          onClick={calculateCPA}
          className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-colors"
        >
          Calculate CPA
        </button>

        {cpa !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-800">
              CPA: ${cpa}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Cost per acquisition
            </p>
          </div>
        )}
      </div>
    </div>
  );
}