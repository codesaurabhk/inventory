import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdSettings, IoIosNotifications, IoIosCube, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import './Loader.css';

function Loader() {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleContent1 = () => {
    setIsOpen1(!isOpen1);
  };
  return (
    <>
    <div className="container">

      {/*header*/}
      <div className="header">

        {/*company name*/}
        <div>
          <h1 className="company-name">MUN-C™</h1>
        </div>

        {/*options*/}
        <div className="options">
          <h1><IoMdSettings className="icon-settings" /></h1>
          <h1><IoIosNotifications className="icon-notifications" /></h1>
        </div>

      </div>

      <hr className="divider"></hr>

      {/*pannel*/}
      <div className="panel">

        {/*sidepannel*/}
        <div className="side-panel">

          {/*dashboard*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Dashboard </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>

          {/*inventory*/}
          <div>
            <div className="menu-item">
              <Link to="/Inventory" className="menu-link"><IoIosCube /> Inventory </Link> 
              <span onClick={toggleContent1} className="toggle-button">
                {isOpen1 ? (
                  <IoIosArrowDown className="arrow-icon" />
                ) : (
                  <IoIosArrowForward className="arrow-icon" />
                )}
              </span>
            </div>

            {isOpen1 && (
              <div>
                <div className="submenu-item active">
                  <Link to="/AddProduct" className="submenu-link">Add Products </Link>
                </div>
                <div className="submenu-item">
                  <Link to="/AddProduct" className="submenu-link">Dashboard </Link>
                </div>
                <div className="submenu-item last">
                  <Link to="/AddProduct" className="submenu-link">Dashboard </Link>
                </div>
              </div>
            )}
          </div>

          {/*stocks*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Stocks </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>

          {/*sales*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Sales </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>

          {/*documents*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Documents </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>

          {/*return and audit*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Return & Audit </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>

          {/*report*/}
          <div className="menu-item">
            <Link to="/" className="menu-link"><IoIosCube /> Report </Link> 
            <span><IoIosArrowForward className="arrow-icon" /></span>
          </div>
        </div>

        {/*main screen*/}
        <div className="main-screen">

          {/*outlet changer*/}
          <div>
            <Outlet/>
          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default Loader