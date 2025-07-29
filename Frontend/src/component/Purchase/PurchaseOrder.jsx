
import "../Purchase/PurchaseOrder.css";
import Order from "../../images/Order.png"
const PurchaseOrder = () => {
    return (
        <div className="main">
            <div className="upnav">
                You haven't cretaed any <a href="#" className="link">purchase orders</a> yet. Start by placing your first one.
            </div>
            <div className="box">
                <div className="boxx">
                    <img src={Order}  alt="Background" className="group1" />
                </div>
                <div className="content">
                    <h4>Monitor Purchase Orders</h4>
                    <p>Easily track every order you've placed and received from  suppliers.</p>
                    <div className="buttons">
                        <button className="import-btn">Import</button>
                        <button className="import-btn">Export</button>
                        <button className="add-btn">Create Purchase Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrder;
