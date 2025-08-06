
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
import { IoIosSearch } from "react-icons/io";


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

const[searchdrop, setSearchDrop] = useState(false);
const handleSearchDropChange = () => {
    setSearchDrop(true);
}

const [categoryValue, setCategoryValue] = useState('');
const handleCategoryChange = (e) => {
  setCategoryValue(e.target.value);
};

const [socketValue, setSocketValue] = useState('');
const handleSocketChange = (e) => {
  setSocketValue(e.target.value);
};

const [warehouseValue, setWarehouseValue] = useState('');
const handleWarehouseChange = (e) => {
  setWarehouseValue(e.target.value);
};

const [exprationValue, setExprationValue] = useState('');
const handleExprationChange = (e) => {
  setExprationValue(e.target.value);
};

const handleClear = () => {
  setSearchDrop(false);
  setCategoryValue('');
  setSocketValue('');
  setWarehouseValue('');
  setExprationValue('');
};
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
                                                {searchdrop ? (
                                                <>
                                                <div style={{border:'none',marginLeft:'20px',alignItems:'center',display:'flex'}}>
                                                    <IoIosSearch style={{fontSize:'25px'}} />
                                                    <input type='text' placeholder='Search Here' style={{border:'none',outline:'none',fontSize:'20px'}} />
                                                </div>
                                                </>
                                                ) : (
                                                <>
                                                <button className="toolbar-filter-btn">All</button>
                                                <button style={{marginLeft:"10px"}} className="toolbar-btns">Active</button>
                                                <button className="toolbar-btns">Inactive</button>
                                                <button className="toolbar-btns">+</button>
                                                </>
                                                )}
                                            </div>
                    
                                            <div className="toolbar-action" style={{ marginTop: "4px" }}>
                                                {searchdrop ? (
                                                <></> ) : (<>
                                                <button className="icon-btn " value={searchdrop} onClick={handleSearchDropChange}><IoSearch /> <CgSortAz style={{fontSize:'30px'}} /></button>
                                                </>) }
                                                <button className="icon-btn"><TbArrowsSort /></button>
                                            </div>
                                        </div>
                    
                                        {searchdrop ? (
                                            <>
                                            <div className='' style={{display:'flex',justifyContent:'space-between',padding:'5px',borderBottom:'2px solid #E6E6E6'}}>
                    
                                            <div className="toolbar-titles" style={{ marginTop: "4px",display:'flex',gap:'10px' }}>
                                                <div style={{border:'2px solid #ccc',padding:'1px 5px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}}>
                                                    <button className="icon-btn" style={{outline:'none',border:'none',color:'#555252'}}> Filter <CgSortAz style={{fontSize:'30px'}} /></button>
                                                </div>
                                                
                                                <div 
                                                style={{border: categoryValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                                                value={categoryValue} 
                                                onChange={handleCategoryChange}>
                                                    <select className="icon-btn" style={{outline:'none',border:'none',color: categoryValue ? '#1368EC' : '#555252'}}>
                                                    <option value="" style={{color:'#555252'}}>Category</option>
                                                    <option value="c1" style={{color:'#555252'}}>Category 1</option>
                                                    <option value="c2" style={{color:'#555252'}}>Category 2</option>
                                                </select>
                                                </div>
                    
                                                <div 
                                                style={{border: socketValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                                                value={socketValue} 
                                                onChange={handleSocketChange}>
                                                    <select className="icon-btn" style={{outline:'none',border:'none',color: socketValue ? '#1368EC' : '#555252'}}>
                                                    <option value="" style={{color:'#555252'}}>Socket Level</option>
                                                    <option value="sl1" style={{color:'#555252'}}>Last 7 days</option>
                                                </select>
                                                </div>
                                                
                                                <div 
                                                style={{border: warehouseValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                                                value={warehouseValue} 
                                                onChange={handleWarehouseChange}>
                                                    <select className="icon-btn" style={{outline:'none',border:'none',color: warehouseValue ? '#1368EC' : '#555252'}}>
                                                    <option value="" style={{color:'#555252'}}>Warehouse</option>
                                                    <option value="wh1" style={{color:'#555252'}}>Warehouse 1</option>
                                                </select>
                                                </div>
                    
                                                <div 
                                                style={{border: exprationValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                                                value={exprationValue} 
                                                onChange={handleExprationChange}>
                                                    <select className="icon-btn" style={{outline:'none',border:'none',color: exprationValue ? '#1368EC' : '#555252'}}>
                                                    <option value="" style={{color:'#555252'}}>Expiration</option>
                                                    <option value="e1" style={{color:'#555252'}}>Expiration 1</option>
                                                </select>
                                                </div>
                                            </div>
                    
                                            <div className="toolbar-action" style={{ marginTop: "4px" }}>
                                                <button className="icon-btn " onClick={handleClear}>Clear</button>
                                            </div>
                    
                                        </div>
                                            </>
                                        ) : (<></>)}
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

