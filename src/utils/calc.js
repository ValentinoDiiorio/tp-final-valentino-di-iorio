// Calcular la prima base anual y mensual según datos del usuario
export function calculateBaseRate({ age, propertyType, propertyValue, claims }) {
  // Tasa base anual aplicada al valor de la propiedad
  let base = 0.0025 
  if (propertyType === 'casa') base = 0.003
  if (propertyType === 'local') base = 0.004

  // Factor de edad
  let ageFactor = 1
  if (age < 25) ageFactor = 1.3
  else if (age < 35) ageFactor = 1.1
  else if (age > 65) ageFactor = 1.25

  // Factor por reclamos previos
  const claimsFactor = 1 + Math.min(claims * 0.1, 0.5)

  const annual = propertyValue * base * ageFactor * claimsFactor
  const monthly = annual / 12

  return { annual, monthly }
}

//tres opciones
export function calculateOptions(data) {
  const base = calculateBaseRate(data)
  const coverage = data.propertyValue

  return [
    {
      id: 'basic',
      title: 'Básica',
      description: 'Cobertura esencial: prima baja, franquicia alta.',
      coverage: Math.round(coverage * 0.8),
      deductible: Math.round(coverage * 0.05),
      monthly: base.monthly * 0.8
    },
    {
      id: 'standard',
      title: 'Estándar',
      description: 'Equilibrio entre protección y precio.',
      coverage: Math.round(coverage),
      deductible: Math.round(coverage * 0.03),
      monthly: base.monthly * 1.0
    },
    {
      id: 'premium',
      title: 'Premium',
      description: 'Mayor protección y menor franquicia.',
      coverage: Math.round(coverage * 1.2),
      deductible: Math.round(coverage * 0.01),
      monthly: base.monthly * 1.4
    }
  ]
}
