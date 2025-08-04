import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './First.jsx';

import DashboardStart from './component/Dashboard/Dashboard.jsx';

import Inventory from './component/inventory/Inventory.jsx'
import Dashboard from './component/inventory/Dashboard'
import AddProduct from './component/inventory/AddProduct'
import Category from './component/inventory/Category.jsx';
import CategoryDashbord from './component/inventory/CategoryDashbord.jsx'
import PurchaseOrder from './component/inventory/PurchaseOrder.jsx'
import PurchaseDashbord from './component/inventory/PurchaseDashbord.jsx'
import Stocks from './component/inventory/Stocks.jsx'
import StockDashbord from "./component/inventory/StockDashbord.jsx";
import ExpiryItems from './component/inventory/ExpiryItems.jsx'
import ExpiryItemsDashbord from './component/inventory/ExpiryItemsDashbord.jsx'
import Damages from './component/inventory/Damages.jsx'
import Damagesdashbord from './component/inventory/Damagesdashbord.jsx'
import AboutProduct from './component/inventory/AboutProduct'
import AddCategory from './component/inventory/AddCategory'
import CreatePurchaseOrder from './component/inventory/CreatePurchaseOrder.jsx'
import Manageproduct from './component/inventory/Manageproduct.jsx'

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
        path:'/DashboardStart',
        element:<DashboardStart />
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