import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from './component/Inventory.jsx'
import AddProduct from './component/AddProduct'
import Dashboard from './component/Dashboard'
import AboutProduct from './component/AboutProduct'
import Category from './component/Category.jsx';
import CategoryDashbord from './component/CategoryDashbord.jsx'
import Stocks from './component/Stocks.jsx'
import StockDashbord from "./component/StockDashbord.jsx";
import PurchaseOrder from './component/Purchase/PurchaseOrder.jsx'
import AddCategory from './component/AddCategory'
import PurchaseDashbord from './component/Purchase/PurchaseDashbord.jsx'
import ExpiryItems from './component/ExpiryItems.jsx'
import ExpiryItemsDashbord from './component/ExpiryItemsDashbord.jsx'
import Damages from './component/Damages.jsx'
import Damagesdashbord from './component/Damagesdashbord.jsx'
import Manageproduct from './component/Manageproduct.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inventory /> */}
      {/* <AddProduct /> */}
      {/* <Dashboard /> */}
      {/* <AboutProduct/> */}
      {/* <Category/> */}
      {/* <CategoryDashbord/> */}
      {/* <Stocks/> */}
      {/* <StockDashbord/> */}
      {/* <PurchaseOrder/> */}
      {/* <AddCategory/> */}
      {/* <PurchaseDashbord/> */}
      {/* <ExpiryItems/> */}
      {/* <ExpiryItemsDashbord/> */}
      {/* <Damages/> */}
      {/* <Damagesdashbord/> */}
      <Manageproduct/>
    </>
  )
}

export default App
