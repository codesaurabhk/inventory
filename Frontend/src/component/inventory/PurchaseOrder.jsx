
import "./PurchaseOrder.css";
import Order from "../images/Order.png"
import { Link } from "react-router-dom";
const PurchaseOrder = () => {
    return (
        <div className="po-main">
            <div className="po-upnav">
                You haven't cretaed any<Link to="/CreatePurchaseOrder" className="link"><u>purchase orders</u></Link> yet. Start by placing your first one.
            </div>
            <div className="po-box">
                <div className="po-boxx">
                    <img src={Order}  alt="Background" className="group1" />
                </div>
                <div className="po-content">
                    <h4>Monitor Purchase Orders</h4>
                    <p>Easily track every order you've placed and received from  suppliers.</p>
                    <div className="buttons">
                        <button className="import-btn">Import</button>
                        <button className="import-btn">Export</button>
                        <Link to="/CreatePurchaseOrder" className="add-btn">Create Purchase Order</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrder;
