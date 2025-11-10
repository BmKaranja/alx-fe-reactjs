import { StrictMode } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './src/App'
import About from './src/components/About'
import Contact from './src/components/Contact'
import { createBrowserRouter , RouterProvider } from 'react-router'

const router=createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/About",element:<About/>},
  {path:"/Contact",element:<Contact/>},
  {path:"/Service",element:<Service/>}   
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
