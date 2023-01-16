import React from 'react';
import { FaInfoCircle, FaNewspaper, FaShoppingBag, FaUsers, FaAngleDown } from "react-icons/fa";

const Ecommerce = () => {

    const value = 2.65
    const order = -0.82
    const coustomer = -1.02

    return (
        <div className=' bg-base-200'>

            <div className='flex  flex-col-reverse lg:grid lg:grid-cols-12'>
                <div className='col-span-9'>
                    <div className='lg:grid lg:grid-cols-3 m-2 gap-2'>
                        <div>
                            <div className='flex justify-between bg-white p-2 rounded-2xl'>
                                <div className='flex'>
                                    <p className='text-3xl bg-blue-400 my-auto p-2 rounded-lg'><FaNewspaper></FaNewspaper></p>
                                    <div className='pl-2'>
                                        <p className='font-semibold  text-slate-400'>Revenue</p>
                                        <p className='font-semibold text-xl'>$21,456</p>
                                    </div>
                                </div>
                                <p className='mt-8 mr-3'>
                                    {
                                        value >= 0 ?
                                            <p className='text-green-600 bg-green-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                +{value}%
                                            </p>
                                            :
                                            <p className='text-red-600  bg-red-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                {value}%
                                            </p>
                                    }
                                </p>
                            </div>

                        </div>
                        <div>
                            <div className='flex justify-between bg-white p-2 rounded-2xl'>
                                <div className='flex'>
                                    <p className='text-3xl bg-blue-400 my-auto p-2 rounded-lg'><FaShoppingBag></FaShoppingBag></p>
                                    <div className='pl-2'>
                                        <p className='font-semibold  text-slate-400'>Order</p>
                                        <p className='font-semibold text-xl'>$45,456</p>
                                    </div>
                                </div>
                                <p className='mt-8 mr-3'>
                                    {
                                        order >= 0 ?
                                            <p className='text-green-600 bg-green-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                +{order}%
                                            </p>
                                            :
                                            <p className='text-red-600  bg-red-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                {order}%
                                            </p>
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between bg-white p-2 rounded-2xl'>
                                <div className='flex'>
                                    <p className='text-3xl bg-blue-400 my-auto p-2 rounded-lg'><FaUsers></FaUsers></p>
                                    <div className='pl-2'>
                                        <p className='font-semibold  text-slate-400'>Coustomer</p>
                                        <p className='font-semibold text-xl'>$21,456</p>
                                    </div>
                                </div>
                                <p className='mt-8 mr-3'>
                                    {
                                        coustomer >= 0 ?
                                            <p className='text-green-600 bg-green-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                +{coustomer}%
                                            </p>
                                            :
                                            <p className='text-red-600  bg-red-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                {coustomer}%
                                            </p>
                                    }
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className='lg:grid lg:grid-cols-12 p-2 bg-white rounded-2xl m-2'>
                        <div className='col-span-3'>

                            {/* Overview and grap start*/}
                            <p className='text-xl mb-4'>Overview</p>
                            <div>

                                <p className='text-sm text-slate-400'>This Month</p>

                                <div className='flex'>
                                    <p className='text-2xl font-bold mr-4'>$24,564</p>
                                    {
                                        value >= 0 ?
                                            <p className='text-green-600 bg-green-200 text-center px-2 text-sm rounded-xl h-5 my-auto'>
                                                +{value}%
                                            </p>
                                            :
                                            <p className='text-red-600  bg-red-200 text-center  px-2 text-sm rounded-xl h-5 my-auto'>
                                                {value}%
                                            </p>
                                    }
                                </div>

                                <div className='mt-10'>
                                    <div className='grid grid-cols-2  text-center'>
                                        <div className='border-r-2 p-2 border-b-2'>
                                            <p className='text-slate-400'>Orders</p>
                                            <p className='text-base font-semibold'>5,643</p>
                                        </div>
                                        <div className='border-b-2 p-2'>
                                            <p className='text-slate-400'>Sales</p>
                                            <p className='text-base font-semibold'>16,643</p>
                                        </div>
                                        <div className='border-r-2 p-2 border-b-2'>
                                            <p className='text-slate-400'>Order Value</p>
                                            <p className='text-base font-semibold'>12.3 %</p>
                                        </div>
                                        <div className='border-b-2 p-2'>
                                            <p className='text-slate-400'>Coustomers</p>
                                            <p className='text-base font-semibold'>21,246</p>
                                        </div>
                                        <div className='border-r-2 p-2'>
                                            <p className='text-slate-400'>Income</p>
                                            <p className='text-base font-semibold'>$35,983</p>
                                        </div>
                                        <div className='p-2'>
                                            <p className='text-slate-400'>Expenses</p>
                                            <p className='text-base font-semibold'>$12,643</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Overview and grap end */}


                        </div>
                        <div className='col-span-9'>
                            hi
                        </div>
                    </div>

                    {/* utility activity and top order */}
                    <div className='lg:grid lg:grid-cols-3 m-2  rounded-2xl p-2 gap-2'>
                        <div className='bg-white rounded-md'>
                            comming soon
                        </div>
                        <div className='bg-white rounded-md'>
                            comming soon
                        </div>
                        <div className='bg-white rounded-md p-3'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold mb-8'>Top Product</p>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <label tabIndex={0} className="text-slate-400 flex">Monthly <p className='my-auto pl-2'><FaAngleDown></FaAngleDown></p>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>January</a></li>
                                        <li><a>February</a></li>
                                        <li><a>March</a></li>
                                        <li><a>April</a></li>
                                        <li><a>May</a></li>
                                        <li><a>June</a></li>
                                        <li><a>July</a></li>
                                        <li><a>August</a></li>
                                        <li><a>September</a></li>
                                        <li><a>October</a></li>
                                        <li><a>November</a></li>
                                        <li><a>December</a></li>
                                    </ul>
                                </div>


                            </div>
                            <div>
                                <div className='flex  justify-between mb-3'>
                                    <div className='flex'>
                                        <p className='text-2xl bg-blue-600 text-white my-auto p-2 rounded-2xl mr-5'>#1</p>
                                        <div>
                                            <p className='text-base text-slate-400'>Polo Blue T-Shirt</p>
                                            <p className='text-lg font-bold text-slate-800'>$ 25.4</p>
                                        </div>

                                    </div>
                                    <p className='px-4 py-2 rounded-xl text-lg font-bold bg-base-200 my-auto'>3.83K</p>
                                </div>
                                
                                <div className='flex  justify-between mb-3'>
                                    <div className='flex'>
                                        <p className='text-2xl bg-blue-600 text-white my-auto p-2 rounded-2xl mr-5'>#2</p>
                                        <div>
                                            <p className='text-base text-slate-400'>Hoodie for men</p>
                                            <p className='text-lg font-bold text-slate-800'>$ 20.4</p>
                                        </div>

                                    </div>
                                    <p className='px-4 py-2 rounded-xl text-lg font-bold bg-base-200 my-auto'>3.46K</p>
                                </div>
                                <div className='flex  justify-between mb-3'>
                                    <div className='flex'>
                                        <p className='text-2xl bg-blue-600 text-white my-auto p-2 rounded-2xl mr-5'>#3</p>
                                        <div>
                                            <p className='text-base text-slate-400'>Red color Cap</p>
                                            <p className='text-lg font-bold text-slate-800'>$ 27.4</p>
                                        </div>

                                    </div>
                                    <p className='px-4 py-2 rounded-xl text-lg font-bold bg-base-200 my-auto'>5.83K</p>
                                </div>
                                <div className='flex  justify-between mb-3'>
                                    <div className='flex'>
                                        <p className='text-2xl bg-blue-600 text-white my-auto p-2 rounded-2xl mr-5'>#4</p>
                                        <div>
                                            <p className='text-base text-slate-400'>Pocket T-shirt</p>
                                            <p className='text-lg font-bold text-slate-800'>$ 25.4</p>
                                        </div>

                                    </div>
                                    <p className='px-4 py-2 rounded-xl text-lg font-bold bg-base-200 my-auto'>3.83K</p>
                                </div>
                                <div className='flex  justify-between mb-3'>
                                    <div className='flex'>
                                        <p className='text-2xl bg-blue-600 text-white my-auto p-2 rounded-2xl mr-5'>#5</p>
                                        <div>
                                            <p className='text-base text-slate-400'>Polo Blue T-Shirt</p>
                                            <p className='text-lg font-bold text-slate-800'>$ 25.4</p>
                                        </div>

                                    </div>
                                    <p className='px-4 py-2 rounded-xl text-lg font-bold bg-base-200 my-auto'>3.83K</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-span-3 bg-base-200'>

                    <div className='m-2 '>
                        <img className='w-full h-36 rounded-t-2xl ' src='https://i.ibb.co/MCgrrPz/download.jpg'></img>

                        <div className=' mt-[-60px] pl-28 bg-white'>
                            <img className="w-28 h-28 lg:w-24 lg:h-24 rounded-full " src="https://i.ibb.co/xzt8fzv/Rakib-1.jpg" alt="Profile Picture" />
                        </div>
                        <div className='bg-white mt-0'>
                            <h1 className="text-center text-2xl  font-bold pt-8 lg:text-xl">Aminul Islam Rakib</h1>
                            <h1 className="text-center text-xl  pt-1 lg:text-base text-slate-400">Web Developer</h1>
                        </div>

                        <div className='bg-white flex justify-around py-5 text-center border-b-2'>
                            <div >
                                <p className='font-bold text-xl'>1,269</p>
                                <p className='font-semibold text-slate-400'>Products</p>
                            </div>
                            <div className='border-2'></div>
                            <div>
                                <p className='font-bold text-xl'>5.2K</p>
                                <p className='font-semibold text-slate-400'>Followers</p>
                            </div>

                        </div>
                        {/* <div className=' border-2 mx-5'></div> */}

                        <div className='bg-white'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold pl-4'>Eaning</p>
                                <p className='pr-3 pt-2'><FaInfoCircle></FaInfoCircle></p>
                            </div>
                            <div className='text-center'>
                                <div className="radial-progress mt-4 text-green-600" style={{ "--value": 70 }}>70%</div>
                                <p className='font-semibold text-xl pt-5'>$26,256</p>
                                <p className='text-slate-400'>Earning this Month</p>
                                <p className='text-slate-400 flex justify-center mb-3'>
                                    {
                                        value >= 0 ?
                                            <p className='text-green-600 bg-green-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                +{value}%
                                            </p>
                                            :
                                            <p className='text-red-600  bg-red-200 text-center mr-2 px-2 text-sm rounded-xl'>
                                                {value}%
                                            </p>
                                    }
                                    From previous period</p>
                            </div>

                            <div className=' border-2 mx-5'></div>

                            <div className='py-2'>
                                <p className='text-xl font-semibold pl-4 py-3 '>Recent Activity</p>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl mr-2'>
                                        <p className='text-lg font-bold'>12</p>
                                        <p className='text-lg font-bold text-slate-400'>Sep</p>
                                    </div>
                                    <div className='pl-2 lg:pl-0'>
                                        <p className='w-full h-10 text-slate-400 pt-3 overflow-hidden'>Responded to need "Volunter Activities".</p>
                                        <button className='font-bold text-blue-600'>Rea More</button>
                                    </div>
                                </div>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl mr-2'>
                                        <p className='text-xl font-bold'>11</p>
                                        <p className='text-xl font-bold text-slate-400'>Sep</p>
                                    </div>
                                    <div className='pl-2 lg:pl-0'>
                                        <p className='w-full h-10 text-slate-400 pt-3 overflow-hidden'>Responded to need "Volunter Activities".</p>
                                        <button className='font-bold text-blue-600'>Rea More</button>
                                    </div>
                                </div>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl mr-2'>
                                        <p className='text-xl font-bold'>10</p>
                                        <p className='text-xl font-bold text-slate-400'>Sep</p>
                                    </div>
                                    <div className='pl-2 lg:pl-0'>
                                        <p className='w-full h-10 text-slate-400 pt-3 overflow-hidden'>Responded to need "Volunter Activities".</p>
                                        <button className='font-bold text-blue-600'>Rea More</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-center ">



                    </div>


                </div>
            </div>
        </div>
    );
};

export default Ecommerce;