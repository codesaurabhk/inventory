import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Inventory from './component/Inventory.jsx'
 import AddProduct from './component/AddProduct'
 import Dashboard from './component/Dashboard'
import AboutProduct from './component/AboutProduct'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Category from './component/Category.jsx';
import CategoryDashbord from './component/CategoryDashbord.jsx'
 import Stocks from './component/Stocks.jsx'
 import StockDashbord from "./component/StockDashbord.jsx";
import PurchaseOrder from './component/Purchase/PurchaseOrder.jsx'
=======
import AddCategory from './component/AddCategory'
>>>>>>> Stashed changes
=======
import AddCategory from './component/AddCategory'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inventory /> */}
      {/* <AddProduct /> */}
      {/* <Dashboard /> */}
      {/* <AboutProduct/> */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
       {/* <Category/> */}
       {/* <CategoryDashbord/> */}
       {/* <Stocks/> */}
       {/* <StockDashbord/> */}
       <PurchaseOrder/>

=======
      <AddCategory/>
>>>>>>> Stashed changes
=======
      <AddCategory/>
>>>>>>> Stashed changes
    </>
  )
}

export default App
