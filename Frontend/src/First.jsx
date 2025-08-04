import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./First.css";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function First() {
  const location = useLocation();

  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  
  const handleImageClick2 = () => {
    setShowDropdown2(!showDropdown2);
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

          <div className={`sidebar-header ${location.pathname === "/DashboardStart" ? "active" : ""}`}>
            <div className="sidebar-logo-text">
              <FaBoxArchive />
              <NavLink to="/DashboardStart" className="fr-supplier-title link">Dashboard</NavLink>
            </div>
            <IoIosArrowForward />
          </div>

          <div className={`sidebar-header ${location.pathname === "/Inventory" ? "active" : ""}`} onClick={handleImageClick2}>
            <div className="sidebar-logo-text">
              <FaBoxArchive />
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

          <div className={`sidebar-header ${location.pathname === "/" ? "active" : ""}`} onClick={handleImageClick3}>
            <div className="sidebar-logo-text">
              <FaBoxArchive />
              <NavLink to="/" className="fr-supplier-title link">Supplier</NavLink>
            </div>
            <IoIosArrowForward className={showDropdown3 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>

          {showDropdown3 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">All Suppliers</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}`}
              >
               <NavLink to="/" className="link">Suppliers History</NavLink>
              </li>
            </ul>
          )}

          <div className={`sidebar-header ${location.pathname === "/" ? "active" : ""}`} onClick={handleImageClick4}>
            <div className="sidebar-logo-text">
              <FaBoxArchive />
              <NavLink to="/" className="fr-supplier-title link">Customers</NavLink>
            </div>
            <IoIosArrowForward className={showDropdown4 ? "arrow-icon rotate" : "arrow-icon"} />
          </div>

          {showDropdown4 && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}` }
              >
                <NavLink to="/" className="link">All Suppliers</NavLink> 
              </li>
              <li
                className={`sidebar-list-all ${location.pathname === "/" ? "active" : ""}`}
              >
               <NavLink to="/" className="link">Suppliers History</NavLink>
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