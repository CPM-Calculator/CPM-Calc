import React, { useState } from 'react';
import { DollarSign, Calculator } from 'lucide-react';

type CalculationType = 'cpm' | 'cost' | 'impressions';

export default function CPMCalculator() {
  const [impressions, setImpressions] = useState('');
  const [cost, setCost] = useState('');
  const [cpm, setCpm] = useState('');
  const [calculationType, setCalculationType] = useState<CalculationType>('cpm');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    switch (calculationType) {
      case 'cpm':
        if (impressions && cost) {
          const result = (parseFloat(cost) / parseFloat(impressions)) * 1000;
          setResult(`CPM: $${result.toFixed(2)}`);
        }
        break;
      case 'cost':
        if (impressions && cpm) {
          const result = (parseFloat(impressions) * parseFloat(cpm)) / 1000;
          setResult(`Total Cost: $${result.toFixed(2)}`);
        }
        break;
      case 'impressions':
        if (cost && cpm) {
          const result = (parseFloat(cost) * 1000) / parseFloat(cpm);
          setResult(`Total Impressions: ${result.toFixed(0)}`);
        }
        break;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">Advanced CPM Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setCalculationType('cpm')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              calculationType === 'cpm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Calculate CPM
          </button>
          <button
            onClick={() => setCalculationType('cost')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              calculationType === 'cost'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Calculate Cost
          </button>
          <button
            onClick={() => setCalculationType('impressions')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              calculationType === 'impressions'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Calculate Impressions
          </button>
        </div>

        {calculationType !== 'impressions' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Impressions
            </label>
            <input
              type="number"
              value={impressions}
              onChange={(e) => setImpressions(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter total impressions"
            />
          </div>
        )}

        {calculationType !== 'cost' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPM ($)
            </label>
            <input
              type="number"
              value={cpm}
              onChange={(e) => setCpm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter CPM"
            />
          </div>
        )}

        {calculationType !== 'cpm' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Cost ($)
            </label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter total cost"
            />
          </div>
        )}

        <button
          onClick={calculate}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-800">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}