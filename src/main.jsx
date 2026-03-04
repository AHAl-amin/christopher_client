import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes.jsx';
import { store } from './redux/sotre.js';
import { Provider } from 'react-redux';
import { GroupOrderProvider } from './Context/GroupOrderContext.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { BucketProvider } from './Context/BucketContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <GroupOrderProvider>
        <CartProvider>
          <BucketProvider>
            <RouterProvider router={router} />  
          </BucketProvider>
        </CartProvider>
      </GroupOrderProvider>
    </Provider>
    </StrictMode>,
)
