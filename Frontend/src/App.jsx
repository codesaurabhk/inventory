import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from './component/Inventory'
import AddProduct from './component/AddProduct'
import Dashboard from './component/Dashboard'
import AboutProduct from './component/AboutProduct'
import Category from './component/Category.jsx';
import CategoryDashbord from './component/CategoryDashbord.jsx'
import Stocks from './component/Stocks.jsx'
import StockDashbord from "./component/StockDashbord.jsx";
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
       <StockDashbord/>
    </>
  )
}

export default App
