import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="top-section">
                {/* Metrics */}
                <div className="dashboard-metrics">
                    <div className="metric-card">
                        <div className="metric-icon">💰</div>
                        <div>
                            <p className="metric-title">Total Stock Value</p>
                            <h2>
                                ₹12,75,987 <span className="metric-growth">↑ 23%</span>
                            </h2>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon blue">⚠️</div>
                        <div>
                            <p className="metric-title">Low Stock</p>
                            <h2>12</h2>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon blue">🛑</div>
                        <div>
                            <p className="metric-title">Out Of Stock</p>
                            <h2>18</h2>
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="toolbar">
                    <div className="toolbar-title">
                        <h3>All Products</h3>
                        <button className="toolbar-filter-btn">All</button>
                    </div>
                    <div className="toolbar-actions">
                        <button className="btn">Import</button>
                        <button className="btn">Export</button>
                        <button className="btn btn-primary">Add Product</button>
                        <button className="icon-btn">🔍</button>
                        <button className="icon-btn">🧰</button>
                        <button className="icon-btn">🔁</button>
                    </div>
                </div>
            </div>

            {/* Product Table */}
            <div className="products-section">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Inventory</th>
                            <th>Category</th>
                            <th>Stored In</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['Chair', 'Active', '3 Pieces • 2 Variants', 'Office Chair', 'Warehouse 01'],
                            ['T-Shirt', 'Inactive', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Wheel Chair', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Strawberry', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['T-Shirt - Label MN', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Gaming Chair', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Luxury Bag', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Purple T-Shirt', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Sofa', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                            ['Gaming Mouse', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
                        ].map(([name, status, inventory, category, stored], index) => (
                            <tr key={index}>
                                <td><input type="checkbox" /></td>
                                <td>{name}</td>
                                <td><span className={`status ${status.toLowerCase()}`}>{status}</span></td>
                                <td>{inventory}</td>
                                <td>{category}</td>
                                <td>{stored}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <span>10 per page</span>
                    <span>1–10 of 369</span>
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
