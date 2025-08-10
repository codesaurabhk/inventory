import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import First from './First.jsx';

//dashboard
import DashboardStart from './component/Dashboard/Dashboard.jsx';

//inventory
import Inventory from './component/inventory/Inventory.jsx'
import Dashboard from './component/inventory/Dashboard'
import ChooseToAddProduct from './component/inventory/ChooseToAddProduct.jsx'
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
import PrintBarCode from './component/inventory/PrintBarCode.jsx';
import PrintQRCode from './component/inventory/PrintQRCode.jsx';

//suppliers
import AddSupplier from "./component/Supplier/AddSupplier.jsx";
import AllSupplier from "./component/Supplier/AllSuppliers.jsx";
import SupplierHistory from "./component/Supplier/SupplierHistory.jsx";

//customers
import AddCustomer from "./component/Customer/AddCustomer.jsx";
import AllCustomer from "./component/Customer/AllCustomers.jsx";

//warehouse
import AllWarehouse from './component/Warehouse/AllWarehouse.jsx';
import StockInOutHistory from './component/Warehouse/StockInOutHistory.jsx'
import WarehouseDetails from './component/Warehouse/WarehouseDetails.jsx';

//sales
import SalesRecord from './component/Sales/SalesRecord'
import Quotation from './component/Sales/Quotation'
import Invoices from './component/Sales/Invoices'
import CreateSales from './component/Sales/CreateSales'
import CreateInvoices from './component/Sales/CreateInvoices'
import CreateInvoiceSuccess from './component/Sales/CreateInvoiceSuccess'
import CreateQuatations from './component/Sales/CreateQuatations'
import CreateQuatationsSuccess from './component/Sales/CreateQuatationsSuccess'
import AddWarehouse from './component/Warehouse/AddWarehouse.jsx';

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
        path:'/ChooseToAddProduct',
        element:<ChooseToAddProduct/>
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
        path: '/PrintBarCode',
        element: <PrintBarCode/>
      },
      {
        path: '/PrintQRCode',
        element:<PrintQRCode/>
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
        element: <AllWarehouse />
      },
      {
        path: "/AddWarehouse",
        element: <AddWarehouse />
      },
      {
        path: "/WarehouseDetails",
        element: <WarehouseDetails />
      },
      {
        path: "/StockInOutHistory",
        element: <StockInOutHistory/>
      },
      {
        path: "/SalesRecord",
        element: <SalesRecord/>
      },
      {
        path: "/Quotation",
        element: <Quotation/>
      },
      {
        path: "/Invoices",
        element: <Invoices/>
      },
      {
        path: "/CreateSales",
        element: <CreateSales/>
      },
      {
        path: "/CreateInvoices",
        element: <CreateInvoices/>
      },
      {
        path: "/CreateInvoiceSuccess",
        element: <CreateInvoiceSuccess/>
      },
      {
        path: "/CreateQuatations",
        element: <CreateQuatations/>
      },
      {
        path: "/CreateQuatationsSuccess",
        element: <CreateQuatationsSuccess/>
      }
    ]
  }
])

function App() {
  return (
  <>
  <RouterProvider router={router} />
  <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
  )
}

export default App