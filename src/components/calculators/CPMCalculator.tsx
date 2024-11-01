import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

export default function CPMCalculator() {
  const [impressions, setImpressions] = useState('');
  const [cost, setCost] = useState('');
  const [result, setResult] = useState<{
    cpm: number;
    costPerDay?: number;
    impressionsPerDay?: number;
  } | null>(null);

  const calculateCPM = () => {
    const totalImpressions = parseFloat(impressions);
    const totalCost = parseFloat(cost);
    
    if (totalImpressions && totalCost) {
      const cpm = (totalCost / totalImpressions) * 1000;
      const costPerDay = totalCost / 30; // Assuming monthly budget
      const impressionsPerDay = totalImpressions / 30; // Assuming monthly impressions
      
      setResult({
        cpm: parseFloat(cpm.toFixed(2)),
        costPerDay: parseFloat(costPerDay.toFixed(2)),
        impressionsPerDay: Math.round(impressionsPerDay)
      });
    }
  };

  const handleReset = () => {
    setImpressions('');
    setCost('');
    setResult(null);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">CPM Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Campaign Budget ($)
          </label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your total budget"
          />
          <p className="mt-1 text-sm text-gray-500">Enter your total advertising budget</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Expected Impressions
          </label>
          <input
            type="number"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter expected impressions"
          />
          <p className="mt-1 text-sm text-gray-500">Enter the total number of ad impressions you expect</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateCPM}
            className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Results</h3>
              <div className="space-y-2">
                <p className="text-blue-800">
                  <span className="font-medium">CPM Rate:</span> ${result.cpm}
                </p>
                <p className="text-blue-800">
                  <span className="font-medium">Daily Budget:</span> ${result.costPerDay}
                </p>
                <p className="text-blue-800">
                  <span className="font-medium">Daily Impressions:</span> {result.impressionsPerDay?.toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">What does this mean?</h3>
              <p className="text-sm text-gray-600">
                Your CPM (Cost Per Mille) is ${result.cpm}, which means you'll pay ${result.cpm} for every 1,000 impressions. 
                Based on a 30-day campaign, you'll spend approximately ${result.costPerDay} per day 
                and receive around {result.impressionsPerDay?.toLocaleString()} impressions daily.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
