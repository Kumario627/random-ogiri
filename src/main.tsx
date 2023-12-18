import ReactDOM from 'react-dom/client'
import { Index } from './feature/Index.tsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Odai } from './feature/odai/Odai.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="odai/:odai" element={<Odai />} />
    </Routes>
  </Router>
)
