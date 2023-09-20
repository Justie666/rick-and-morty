import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { MainLayout } from './layouts'
import { AllCharacterPage, AllEpisodePage, AllLocationPage } from './pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/characters'} />
      },
      {
        path: '/characters',
        element: <AllCharacterPage />
      },
      {
        path: '/locations',
        element: <AllLocationPage />
      },
      {
        path: '/episodes',
        element: <AllEpisodePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
