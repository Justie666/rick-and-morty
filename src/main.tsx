import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { MainLayout } from './layouts'
import {
  AllCharacterPage,
  AllEpisodePage,
  AllLocationPage,
  EpisodePage,
  LocationPage,
  NotFoundPage
} from './pages'
import { CharacterPage } from './pages/character/CharacterPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
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
        path: '/characters/:id',
        element: <CharacterPage />
      },
      {
        path: '/locations',
        element: <AllLocationPage />
      },
      {
        path: '/locations/:id',
        element: <LocationPage />
      },
      {
        path: '/episodes',
        element: <AllEpisodePage />
      },
      {
        path: '/episodes/:id',
        element: <EpisodePage />
      },
      {
        path: '/*',
        element: <NotFoundPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // </StrictMode>
)
