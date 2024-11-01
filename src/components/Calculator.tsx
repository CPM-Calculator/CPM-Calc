import React from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import CPMCalculator from './calculators/CPMCalculator';
import CPCCalculator from './calculators/CPCCalculator';
import CTRCalculator from './calculators/CTRCalculator';
import CPACalculator from './calculators/CPACalculator';

export default function Calculator() {
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <CPMCalculator />
      <CPCCalculator />
      <CTRCalculator />
      <CPACalculator />
    </div>
  );
}