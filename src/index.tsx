import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={[]} />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={[]} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
],
  // { basename: '/app/' }
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />


    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={[]} />}> </Route>
        <Route path='/list/:id' element={<ItemDescription todos={[]} />}> </Route>
        <Route path='/todo' element={<ToDoListPage />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
