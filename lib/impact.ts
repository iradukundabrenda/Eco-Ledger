export const getImpactData = (energy: number, travel: number, compute: number) => {
  // Logic: Industry Standard Emission Factors
  const energyKgs = energy * 0.385; 
  const travelKgs = travel * 0.24;  
  const computeKgs = compute * 0.015; 
  const totalKgs = energyKgs + travelKgs + computeKgs;

  // Economic Modeling: Scalable Carbon Pricing
  // We use a "Standard" vs "High-Ambition" price spread
  const standardRate = 18.00; // GBP per Tonne
  const volatilityRate = 45.00; // Projected future cost

  const currentLiability = (totalKgs / 1000) * standardRate;
  const projectedRisk = (totalKgs / 1000) * volatilityRate;

  return {
    total: totalKgs.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    carbonTax: currentLiability.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }),
    projectedRisk: projectedRisk.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }),
    metrics: [
      { id: '01', label: 'Scope 2: Energy', value: energyKgs, color: 'text-cyan-500' },
      { id: '02', label: 'Scope 3: Logistics', value: travelKgs, color: 'text-rose-500' },
      { id: '03', label: 'Scope 3: Digital', value: computeKgs, color: 'text-amber-500' },
    ]
  };
};