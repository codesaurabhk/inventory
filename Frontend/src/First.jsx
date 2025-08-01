import { Outlet, useNavigate } from "react-router-dom";
import "./First.css";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function First() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <>
      <div className="container-first">

        {/* left pannel */}
        <div className="sidebar">
          <div className="sidebar-header" onClick={handleImageClick}>
            <div className="sidebar-logo-text">
              <FaBoxArchive />
              <span className="fr-supplier-title">Inventory</span>
            </div>
            <IoIosArrowForward className={showDropdown ? "arrow-icon rotate" : "arrow-icon"} />
          </div>

          {showDropdown && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${activeItem === "AllSuppliers" ? "active" : ""}` }
              >
                <Link to="/Dashboard" className="link">All Products</Link> 
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/CategoryDashbord" className="link">Category</Link>
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/PurchaseOrder" className="link">Purchase Order</Link>
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/StockDashbord" className="link">Stock In / Out</Link>
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/ExpiryItemsDashbord" className="link">Expiry Items</Link>
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/Damagesdashbord" className="link">Damage & Returns</Link>
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