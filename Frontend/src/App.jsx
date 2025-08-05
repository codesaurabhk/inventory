import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './First.jsx';

//dashboard
import DashboardStart from './component/Dashboard/Dashboard.jsx';

//inventory
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

//suppliers
import AddSupplier from "./component/SupplierComponent/AddSupplier";
import AllSupplier from "./component/SupplierComponent/AllSuppliers";
import SupplierHistory from "./component/SupplierComponent/SupplierHistory";

//customers
import AddCustomer from "./component/CustomerComponent/AddCustomer";
import AllCustomer from "./component/CustomerComponent/AllCustomers";

//warehouse
import AllWarehouse from './component/Warehouse/AllWarehouse.jsx';
import StockInOutHistory from './component/Warehouse/StockInOutHistory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <First/>,
    children: [
      {
        index:true,
        element:<DashboardStart />
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
      },
      {
        path: "/AllSupplier",
        element: <AllSupplier />
      },
      {
        path: "/AddSupplier",
        element:<AddSupplier />,
      },
      {
        path: "/SupplierHistory",
        element:<SupplierHistory />,
      },
      {
        path: "/AllCustomer",
        element: <AllCustomer />,
      },
      {
        path: "/AddCustomer",
        element: <AddCustomer />,
      },
      {
        path: "/AllWarehouse",
        element: <AllWarehouse/>
      },
      {
        path: "/StockInOutHistory",
        element: <StockInOutHistory/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App