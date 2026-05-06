import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Projects from './pages/Projects';
import CreativeWork from './pages/CreativeWork';
import Shop from './pages/Shop';
import About from './pages/About';
import FaultyTerminal from "./components/ui/faultyterminal";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creative-work" element={<CreativeWork />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <div className="fixed inset-0 z-0">
      <FaultyTerminal
          scale={1.7}
          gridMul={[2, 1]}
          digitSize={2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.9}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.29}
          tint="#ffffff"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.1}
        />
    </div>
  </StrictMode>,
)
