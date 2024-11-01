import React from 'react';
import CPMCalculator from '../components/calculators/CPMCalculator';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import { TrendingUp, Target, BarChart2, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Advertising Metrics Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Make data-driven decisions with our comprehensive suite of advertising calculators
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">CPM</h3>
            <p className="text-sm text-gray-600">Cost Per Thousand Impressions</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">CPC</h3>
            <p className="text-sm text-gray-600">Cost Per Click</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <BarChart2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">CTR</h3>
            <p className="text-sm text-gray-600">Click-Through Rate</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">CPA</h3>
            <p className="text-sm text-gray-600">Cost Per Acquisition</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-12 -mx-4 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Use Our Calculators?
          </h2>
          <p className="text-lg text-gray-600">
            Make informed decisions about your advertising campaigns with our precise and easy-to-use tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Results</h3>
            <p className="text-gray-600">
              Our calculators use industry-standard formulas to ensure precise metrics for your campaigns
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Saving</h3>
            <p className="text-gray-600">
              Quick calculations help you make faster decisions and optimize your advertising strategy
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly</h3>
            <p className="text-gray-600">
              Simple interface designed for both beginners and experienced marketers
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <CPMCalculator />
      </section>

      <section>
        <Testimonials />
      </section>

      <section className="flex justify-center">
        <FAQ />
      </section>
    </div>
  );
}