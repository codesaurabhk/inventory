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

function First() {
  const location = useLocation();

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown21, setShowDropdown21] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  
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

  return (
    <>
      <div className="container-first">

        {/* left pannel */}
        <div className="sidebar">

          {/* dashboard */}
          <div className={`sidebar-header ${location.pathname === "/DashboardStart" ? "active" : ""}`} onClick={handleImageClick1}>
            <div className="sidebar-logo-text">
              <AiFillProduct style={{fontSize:'25px'}} />
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
              <FaBoxArchive style={{fontSize:'20px'}} />
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
              <MdWarehouse style={{fontSize:'20px'}} />
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
              <AiFillProduct style={{fontSize:'20px'}} />
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
              <AiFillProduct style={{fontSize:'20px'}} />
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