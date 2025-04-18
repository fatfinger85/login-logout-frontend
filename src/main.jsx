import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Fatfinger - Registro de Jornada</h1>
      <p>App funcional básica conectada al backend en la nube.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
