import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FaBorderAll, FaAngleDown, FaRegCalendarAlt, FaRocketchat, FaRegFileAlt, FaShopify, FaMailBulk, FaFileInvoiceDollar, FaServer, FaWifi, FaUserSecret, FaUnity, FaElementor, FaWpforms } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white bg-gray-900">
                        {/* <!-- Sidebar content here --> */}

                        <div className="dropdown ">
                            <label tabIndex={0} className="w-full flex text-xl font-bold text-white"></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow  rounded-box w-full bg-gray-900 pl-7">

                            </ul>
                        </div>

                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="w-full collapse-title text-xl font-medium flex justify-between pr-4">
                                <span className='my-auto'><FaBorderAll></FaBorderAll></span> <span>Dashboards</span> <span className='my-auto  flex justify-end'><FaAngleDown></FaAngleDown></span>
                            </div>
                            <div className="collapse-content text-white font-semibold flex flex-col ml-7">
                                <label onClick={()=>navigate('/ecommerce')} htmlFor="my-drawer">
                                    Ecommerce
                                    {/* <Link to='/ecommerce' className=''>Ecommerce</Link> */}
                                </label>
                                <Link to='/' className='my-3'>Saas</Link>
                                <Link className=''>Crypto</Link>
                            </div>
                        </div>

                        <p className='pl-4 font-semiblod'>APPLICATIONS</p>
                        <p className='pl-6 my-3 flex flex-col'>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaRegCalendarAlt></FaRegCalendarAlt></spam> Calendar</Link>
                            <Link className='mb-3 flex'> <spma className='my-auto mr-2'><FaRocketchat></FaRocketchat></spma>Chat <spam className='ml-auto  text-red-900 bg-red-400 rounded-lg text-sm px-1  font-bold opacity-50'>Hot</spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaRegFileAlt></FaRegFileAlt></spam>File Manager</Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaShopify></FaShopify></spam>Ecommerce <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaMailBulk></FaMailBulk></spam>Email <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaFileInvoiceDollar></FaFileInvoiceDollar></spam>Invoice <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaServer></FaServer></spam>Projects <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaWifi></FaWifi></spam>Contacts <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>


                        </p>


                        <p className='pl-4 font-semiblod'>LAYOUTS</p>
                        <p className='pl-4 font-semiblod mt-3'>PAGES</p>
                        <p className='pl-6 my-3 flex flex-col'>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaUserSecret></FaUserSecret></spam>Authentication <spam className='ml-auto  text-blue-900 bg-blue-400 opacity-50 rounded-lg text-sm px-1 py-auto  font-bold'>8</spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaUnity></FaUnity></spam>Utility <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                        </p>

                        <p className='pl-4 font-semiblod mt-3'>COMPONENTS</p>
                        <p className='pl-6 my-3 flex flex-col'>

                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaElementor></FaElementor></spam>UI Elements <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                            <Link className='mb-3 flex'> <spam className='my-auto mr-2'><FaWpforms></FaWpforms></spam>Forms <spam className='my-auto ml-auto'><FaAngleDown></FaAngleDown></spam></Link>
                        </p>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Main;