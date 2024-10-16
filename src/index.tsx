import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

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
