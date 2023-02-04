import { useState } from 'react'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hi This is my App</h1>
    </div>
  )
}

export default App
