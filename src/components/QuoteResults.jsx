//opciones generadas a partir de los datos
import React from 'react'
import { calculateOptions } from '../utils/calc'
import CoverageCard from './CoverageCard'

export default function QuoteResults({ data }) {
  if (!data) return <div className="results-empty">Completa el formulario para ver las cotizaciones.</div>

  const options = calculateOptions(data)

  return (
    <section className="results">
      <h2>Opciones de cobertura</h2>
      <div className="options-grid">
        {options.map(opt => (
          <CoverageCard key={opt.id} option={opt} />
        ))}
      </div>
    </section>
  )
}
