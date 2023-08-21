import { MainLayout } from '@/layouts'
import { AllCharacterPage } from '@/pages'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

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
