// Formulario para que el usuario ingrese datos para cotizar
import React, { useState } from 'react'

const INITIAL = {
  name: '',
  age: '',
  propertyType: 'departamento',
  propertyValue: '',
  claims: 0
}

export default function QuoteForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})

  // Validaciones
  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Nombre requerido'
    const age = Number(form.age)
    if (!age || age < 18 || age > 120) e.age = 'Edad entre 18 y 120'
    const pv = Number(form.propertyValue)
    if (!pv || pv <= 0) e.propertyValue = 'Valor de la propiedad inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    // Convertir valores numéricos
    onSubmit({
      ...form,
      age: Number(form.age),
      propertyValue: Number(form.propertyValue),
      claims: Number(form.claims)
    })
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label>Nombre</label>
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <small className="error">{errors.name}</small>}
      </div>

      <div className="field">
        <label>Edad</label>
        <input name="age" type="number" value={form.age} onChange={handleChange} />
        {errors.age && <small className="error">{errors.age}</small>}
      </div>

      <div className="field">
        <label>Tipo de propiedad</label>
        <select name="propertyType" value={form.propertyType} onChange={handleChange}>
          <option value="departamento">Departamento</option>
          <option value="casa">Casa</option>
          <option value="local">Local Comercial</option>
        </select>
      </div>

      <div className="field">
        <label>Valor de la propiedad (ARS)</label>
        <input name="propertyValue" type="number" value={form.propertyValue} onChange={handleChange} />
        {errors.propertyValue && <small className="error">{errors.propertyValue}</small>}
      </div>

      <div className="field">
        <label>Reclamos previos (cantidad)</label>
        <input name="claims" type="number" value={form.claims} onChange={handleChange} />
      </div>

      <div className="actions">
        <button type="submit">Calcular cotización</button>
        <button type="button" onClick={() => { setForm(INITIAL); setErrors({}); onSubmit(null) }}>Limpiar</button>
      </div>
    </form>
  )
}
