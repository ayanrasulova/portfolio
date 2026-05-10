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
    <div className="fixed inset-0 z--10">
      <FaultyTerminal
          scale={2}
          gridMul={[3, 1]}
          digitSize={2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.9}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.5}
          chromaticAberration={0}
          dither={0}
          curvature={0.4}
          tint="#ffffff"
          mouseReact
          mouseStrength={2}
          pageLoadAnimation
          brightness={0.07}
        />
    </div>
  </StrictMode>,
)
