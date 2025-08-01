import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First.jsx';

import Inventory from './component/Inventory.jsx'

import Dashboard from './component/Dashboard'
import AddProduct from './component/AddProduct'

import Category from './component/Category.jsx';
import CategoryDashbord from './component/CategoryDashbord.jsx'

import PurchaseOrder from './component/Purchase/PurchaseOrder.jsx'
import PurchaseDashbord from './component/Purchase/PurchaseDashbord.jsx'

import Stocks from './component/Stocks.jsx'
import StockDashbord from "./component/StockDashbord.jsx";

import ExpiryItems from './component/ExpiryItems.jsx'
import ExpiryItemsDashbord from './component/ExpiryItemsDashbord.jsx'

import Damages from './component/Damages.jsx'
import Damagesdashbord from './component/Damagesdashbord.jsx'

import AboutProduct from './component/AboutProduct'
import AddCategory from './component/AddCategory'
import CreatePurchaseOrder from './component/CreatePurchaseOrder.jsx'

import Manageproduct from './component/Manageproduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <First/>,
    children: [
      {
        index:true,
        element:<Inventory />
      },
      {
        path:'/Inventory',
        element:<Inventory />
      },
      {
        path:'/AddProduct',
        element:<AddProduct />
      },
      {
        path:'/Dashboard',
        element:<Dashboard />
      },
      {
        path:'/Category',
        element:<Category/>
      },
      {
        path:'/CategoryDashbord',
        element:<CategoryDashbord/>
      },
      {
        path:'/Stocks',
        element:<Stocks/>
      },
      {
        path:'/StockDashbord',
        element:<StockDashbord/>
      },
      {
        path:'/PurchaseOrder',
        element:<PurchaseOrder/>
      },
      {
        path:'/PurchaseDashbord',
        element:<PurchaseDashbord/>
      },
      {
        path:'/ExpiryItems',
        element:<ExpiryItems/>
      },
      {
        path:'/ExpiryItemsDashbord',
        element:<ExpiryItemsDashbord/>
      },
      {
        path:'/Damages',
        element:<Damages/>
      },
      {
        path:'/Damagesdashbord',
        element:<Damagesdashbord/>
      },
      {
        path:'/Manageproduct',
        element:<Manageproduct/>
      },
      {
        path:'/CreatePurchaseOrder',
        element:<CreatePurchaseOrder/>
      },
      {
        path:'/AboutProduct',
        element:<AboutProduct/>
      },
      {
        path:'/AddCategory',
        element:<AddCategory/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App