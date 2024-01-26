import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import Todo from './pages/Todo'
import Taches from './pages/Taches'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/taches" element={<Taches />} />
        </Routes>
    </BrowserRouter>
  )
}