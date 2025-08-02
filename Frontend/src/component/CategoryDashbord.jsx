
import { FaSackDollar } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { FaStopCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import chair from "../images/chair.jpg";
import tshirt from "../images/tshirts.jpg";
import wheelchair from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import cheery from "../images/cheery.jpg";
import mouse from "../images/mouse.jpg";
import sofa from "../images/sofa.jpg";
import tshirts2 from "../images/tshirts2.jpg";
import tshirts3 from "../images/tshirts3.jpg";
import bag from "../images/bag.jpg";
import { FaAngleRight } from "react-icons/fa";
import "./CategoryDashbord.css"
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Category from "./Category";


const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8; 


    const data = [
        { name: 'Chair', status: 'Active', Nos: '30', Nop: '552', image: chair },
        { name: 'T-Shirt', status: 'Inactive', Nos: '12', Nop: '552', image: tshirt },
        { name: 'Wheel Chair', status: 'Active', Nos: '12', Nop: '552', image: wheelchair },
        { name: 'Strawberry', status: 'Active', Nos: '12', Nop: '552', image: cheery },
        { name: 'T-Shirt - Label MN', status: 'Active', Nos: '12', Nop: '552', image: tshirts2 },
        { name: 'Gaming Chair', status: 'Active', Nos: '12', Nop: '552', image: chair3 },
        { name: 'Luxury Bag', status: 'Active', Nos: '12', Nop: '552', image: bag },
        { name: 'Luxury Bag', status: 'Active', Nos: '12', Nop: '552', image: bag },
        { name: 'Purple T-Shirt', status: 'Active', Nos: '12', Nop: '552', image: tshirts3 },
        { name: 'Sofa', status: 'Active', Nos: '12', Nop: '552', image: sofa },
        { name: 'Gaming Mouse', status: 'Active', Nos: '12', Nop: '552', image: mouse }
    ];

    const totalItems = data.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedData = data.slice(startIndex, endIndex);


    return (
        <>
        <Category/>
        <div className="dashboard-container">
            <div className='overview'>
                <div >
                    <div className='toolbars' >
                        <div className="right" style={{ display: "flex", alignItems: "center"}}>
                            <span style={{color:"#676767", fontWeight:"600"}}>Inventory</span> 
                            <span style={{color:"#676767"}} ><FaAngleRight/></span>
                            <span>Category</span>
                        </div>
                        <div className="toolbar-actions">
                            <button className="btn btn-light">Import</button>
                            <button className="btn btn-light">Export</button>
                            <Link to="/AddCategory" className="btn btn-primary">Add Category</Link>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button  className="toolbar-filter-btn">All</button>
                            <button style={{marginLeft:"10px"}} className="toolbar-btns">Active</button>
                            <button className="toolbar-btns">Inactive</button>
                            <button className="toolbar-btns">+</button>
                        </div>


                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            <button className="icon-btn "><IoSearch /></button>
                            <button className="icon-btn"><CgSortAz /></button>
                            <button className="icon-btn"><TbArrowsSort /></button>
                        </div>
                    </div>
                </div>




                {/* Product Table */}
                <div>
                    <table className="product-table">
                        <thead>
                            <tr style={{ color: "#676767" }}>
                                <th><input type="checkbox" /></th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>No. of SKUs</th>
                                <th>No Of Products</th>
                                {/* <th>Stored In</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((product, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-img"
                                        />
                                        {product.name}
                                    </td>
                                    <td> <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span></td>
                                    <td>{product.Nos}</td>
                                    <td>{product.Nop}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
    <div className="pagination-boxx">{itemsPerPage} per page</div>
    <div className="pagination-boxx pagination-info">
        <span>{startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}</span>
        <span style={{ color: "grey" }}> | </span>
        <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="pagination-arrow"
        >
            <FaAngleLeft />
        </button>
        <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="pagination-arrow"
        >
            <FaChevronRight />
        </button>
    </div>
</div>


                </div>
            </div>
        </div >
        </>
    );
};

export default Dashboard;

