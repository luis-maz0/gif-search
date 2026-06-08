import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifApp } from './GifApp'
import { FavoritesProvider } from './context/FavoritesProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <GifApp />
    </FavoritesProvider>
  </StrictMode>,
)
