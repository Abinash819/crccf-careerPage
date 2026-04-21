import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

/**
 * Main application component that handles routing.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes like /jobs, /login can be added here */}
      </Routes>
    </Router>
  )
}

export default App
