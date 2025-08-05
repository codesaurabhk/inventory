import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./First.css";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { MdWarehouse } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from './component/images/logo/logo.png'

function First() {
  const location = useLocation();

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown21, setShowDropdown21] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);
  
  const handleImageClick1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  
  const handleImageClick2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const handleImageClick21 = () => {
    setShowDropdown21(!showDropdown21);
  };

  const handleImageClick3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  
  const handleImageClick4 = () => {
    setShowDropdown4(!showDropdown4);
  };
  
  const handleImageClick5 = () => {
    setShowDropdown5(!showDropdown5);
  };
  
  const handleImageClick6 = () => {
    setShowDropdown6(!showDropdown6);
  };
  
  const handleImageClick7 = () => {
    setShowDropdown7(!showDropdown7);
  };

  return (
    <>
    
      {/* header */}
      <header style={{width:'100%',backgroundColor:'#f1f1f1',padding:'3px 1px'}}>
        <span><img src={Logo} style={{width:'230px',height:'50px'}} /></span>
      </header>

      <div className="container-first">

        {/* left pannel */}
        <div className="sidebar">

          {/* dashboard */}
          <div className={`sidebar-header ${location.pathname === "/DashboardStart" ? "active" : ""}`} onClick={handleImageClick1}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/DashboardStart" ? "active" : ""}`} style={{fontSize:'25px'}} />
              <div className="fr-supplier-title link">Dashboard</div>
            </div>
            <IoIosArrowForward className={showDropdown1 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown1 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/DashboardStart" ? "active" : ""}` }
              >
                <NavLink to="/DashboardStart" className="link">Dashboard</NavLink> 
              </li>
            </ul>
          )}

          {/* inventory */}
          <div className={`sidebar-header ${location.pathname === "/Inventory" ? "active" : ""}`} onClick={handleImageClick2}>
            <div className="sidebar-logo-text">
              <FaBoxArchive className={`iconi ${location.pathname === "/Inventory" || location.pathname === "/Dashboard" || location.pathname === "/CategoryDashbord" || location.pathname === "/PurchaseDashbord" || location.pathname === "/StockDashbord" || location.pathname === "/ExpiryItemsDashbord" || location.pathname === "/Damagesdashbord"  ? "active" : ""}`} style={{fontSize:'19px'}} />
              <NavLink to="/Inventory" className="fr-supplier-title link">Inventory</NavLink>
            </div>
            <IoIosArrowForward className={showDropdown2 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown2 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/Dashboard" ? "active" : ""}` }
              >
                <NavLink to="/Dashboard" className="link">All Products</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/CategoryDashbord" ? "active" : ""}`}
              >
               <NavLink to="/CategoryDashbord" className="link">Category</NavLink>
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/PurchaseDashbord" ? "active" : ""}`}
              >
               <NavLink to="/PurchaseDashbord" className="link">Purchase Order</NavLink>
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/StockDashbord" ? "active" : ""}`}
              >
               <NavLink to="/StockDashbord" className="link">Stock In / Out</NavLink>
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/ExpiryItemsDashbord" ? "active" : ""}`}
              >
               <NavLink to="/ExpiryItemsDashbord" className="link">Expiry Items</NavLink>
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/Damagesdashbord" ? "active" : ""}`}
              >
               <NavLink to="/Damagesdashbord" className="link">Damage & Returns</NavLink>
              </li>
            </ul>
          )}
          
          {/* warehouse */}
          <div className={`sidebar-header`} onClick={handleImageClick21}>
            <div className="sidebar-logo-text">
              <MdWarehouse className={`icon ${location.pathname === "/AllWarehouse" || location.pathname === "/StockInOutHistory" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Warehouse</div>
            </div>
            <IoIosArrowForward className={showDropdown21 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown21 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/AllWarehouse" ? "active" : ""}` }
              >
                <NavLink to="/AllWarehouse" className="link">All Warehouse</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/StockInOutHistory" ? "active" : ""}`}
              >
               <NavLink to="/StockInOutHistory" className="link">Stock In / Out History</NavLink>
              </li>
            </ul>
          )}

          {/* supplier */}
          <div className={`sidebar-header`} onClick={handleImageClick3}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/AllSupplier" || location.pathname === "/SupplierHistory" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Supplier</div>
            </div>
            <IoIosArrowForward className={showDropdown3 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown3 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/AllSupplier" ? "active" : ""}` }
              >
                <NavLink to="/AllSupplier" className="link">All Suppliers</NavLink>
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/SupplierHistory" ? "active" : ""}`}
              >
               <NavLink to="/SupplierHistory" className="link">Suppliers History</NavLink>
              </li>
            </ul>
          )}

          {/* customer */}
          <div className={`sidebar-header`} onClick={handleImageClick4}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/AllCustomer" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Customers</div>
            </div>
            <IoIosArrowForward className={showDropdown4 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown4 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/AllCustomer" ? "active" : ""}` }
              >
                <NavLink to="/AllCustomer" className="link">All Customers</NavLink> 
              </li>
            </ul>
          )}
          
          {/* sales */}
          <div className={`sidebar-header`} onClick={handleImageClick5}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/" || location.pathname === "/" || location.pathname === "/" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Sales</div>
            </div>
            <IoIosArrowForward className={showDropdown5 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown5 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">All Sales</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Quotation</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Invoices & Bills</NavLink> 
              </li>
            </ul>
          )}
          
          {/* report */}
          <div className={`sidebar-header`} onClick={handleImageClick6}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Report</div>
            </div>
            <IoIosArrowForward className={showDropdown6 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown6 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Sales Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Purchase Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Inventory Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Supplier Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Return & Damages</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Expiry Report</NavLink> 
              </li>
            </ul>
          )}
          
          {/* accounting */}
          <div className={`sidebar-header`} onClick={handleImageClick7}>
            <div className="sidebar-logo-text">
              <AiFillProduct className={`icon ${location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" || location.pathname === "/" ? "active" : ""}`} style={{fontSize:'20px'}} />
              <div className="fr-supplier-title link">Accounting</div>
            </div>
            <IoIosArrowForward className={showDropdown7 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>
          {showDropdown7 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Balance Sheet</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Profite & Loss</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Overdue Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Expense Report</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">B2B & B2C</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Payment History</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Credit & Debit Notes</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">Document Issues</NavLink> 
              </li>
            </ul>
          )}

        </div>

        {/* right pannel */}
        <div className="main-content">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default First;