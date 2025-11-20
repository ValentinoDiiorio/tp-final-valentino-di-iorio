//organiza layout y controla estado global mínimo
import React, { useState } from 'react'
import QuoteForm from './components/QuoteForm'
import QuoteResults from './components/QuoteResults'

export default function App() {
  // guardamos los datos ingresados por el usuario
  const [quoteData, setQuoteData] = useState(null)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cotizador de Seguros</h1>
      </header>

      <main>
        {/* Formulario que envía los datos al estado de App */}
        <QuoteForm onSubmit={setQuoteData} />

        {/* Resultados*/}
        <QuoteResults data={quoteData} />
      </main>

    </div>
  )
}
