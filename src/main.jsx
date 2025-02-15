import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import DemoReducer from './components/reducerPractice/DemoReducer.jsx';
import ToDo from './pages/ToDo.jsx';
import { StoreProvider } from './components/store/storeContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/reducer',
    element: <DemoReducer/>
  }, 
  {
    path: 'todo',
    element: <ToDo/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
    <RouterProvider router = {router}/>
    </StoreProvider>
  </StrictMode>
);
