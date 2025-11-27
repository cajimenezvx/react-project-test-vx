import { useState } from 'react'
import './App.css'

// Función sin usar - Qodo debería detectar esto
function unusedHelperFunction() {
  console.log("Esta función nunca se usa")
  return "unused"
}

// Función con división por cero - Issue crítico
function calculateRisk(value) {
  const risk = value / 0  // División por cero
  console.log("Risk calculated:", risk)  // console.log en producción
  return risk
}

// Función sin manejo de errores
function fetchUserData(userId) {
  // No hay validación de userId
  const response = fetch(`/api/users/${userId}`)
  return response  // No hay await ni .then()
}

// Componente con problema de performance - re-renders innecesarios
function ExpensiveComponent({ data }) {
  // Esto se ejecuta en cada render sin memoization
  const processedData = data.map(item => {
    console.log("Processing:", item)  // console.log en loop
    return item * 2
  })
  
  return <div>{processedData.join(', ')}</div>
}

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [userData, setUserData] = useState(null)

  // Variable declarada con var en lugar de const/let
  var oldStyleVariable = "debería ser const o let"

  // Función con múltiples responsabilidades
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Sin validación de email
    console.log("Email submitted:", email)
    
    // Llamada sin manejo de errores
    fetchUserData(123)
    
    // Cálculo arriesgado
    const risk = calculateRisk(100)
    
    // Actualización de estado con valor hardcodeado
    setUserData({ name: "Test User", email: email })
  }

  // Función inline en onClick (anti-pattern)
  const incrementCount = () => {
    setCount(count + 1)  // Usa valor directo en lugar de función
    console.log("Count:", count)  // console.log
  }

  return (
    <div className="landing-container">
      <header className="header">
        <h1>Qodo Test Landing Page</h1>
        <p className="subtitle">Testing AI Code Review Capabilities</p>
      </header>

      <main className="main-content">
        {/* Sección de contador */}
        <section className="counter-section">
          <h2>Counter Demo</h2>
          <div className="card">
            <button onClick={incrementCount}>
              Click count: {count}
            </button>
            <p>Este botón tiene varios anti-patterns</p>
          </div>
        </section>

        {/* Formulario sin validación adecuada */}
        <section className="form-section">
          <h2>Email Subscription</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"  // Debería ser type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
          {userData && (
            <div className="user-info">
              <p>Subscribed: {userData.email}</p>
            </div>
          )}
        </section>

        {/* Componente con problema de performance */}
        <section className="data-section">
          <h2>Data Processing</h2>
          <ExpensiveComponent data={[1, 2, 3, 4, 5]} />
        </section>

        {/* Información de testing */}
        <section className="info-section">
          <h3>🔍 Problemas Intencionales para Qodo</h3>
          <ul className="issues-list">
            <li>❌ console.log en producción</li>
            <li>❌ División por cero</li>
            <li>❌ Función sin usar</li>
            <li>❌ Falta manejo de errores</li>
            <li>❌ Variable con var</li>
            <li>❌ Sin validación de input</li>
            <li>❌ Problemas de performance</li>
          </ul>
          <p className="note">
            Qodo debería detectar estos issues automáticamente en el PR
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>Testing Qodo Merge - AI Code Review</p>
      </footer>
    </div>
  )
}

export default App
