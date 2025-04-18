import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Fatfinger - Registro de Jornada</h1>
      <p>Interfaz lista para conectar al backend de Netlify y Railway.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
