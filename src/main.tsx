import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import { GifApp } from './GifApp'
import { FavoritesProvider } from './context/FavoritesProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <GifApp />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)