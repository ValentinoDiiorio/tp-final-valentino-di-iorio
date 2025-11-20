// Tarjeta que representa una opción de seguro
import React from 'react'

export default function CoverageCard({ option }) {
  return (
    <article className="card">
      <h3>{option.title}</h3>
      <p>{option.description}</p>
      <ul>
        <li>Prima mensual estimada: <strong>${option.monthly.toFixed(2)}</strong></li>
        <li>Suma asegurada: ${option.coverage.toLocaleString()}</li>
        <li>Franquicia: ${option.deductible.toLocaleString()}</li>
      </ul>
      <div className="card-actions">
        <button>Seleccionar</button>
      </div>
    </article>
  )
}
