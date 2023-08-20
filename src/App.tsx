import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { AllCharacterPage } from './pages'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Navigate to={'/characters'} />} />
        <Route path='/characters' element={<AllCharacterPage />} />
      </Route>
    </Routes>
  )
}

export default App
