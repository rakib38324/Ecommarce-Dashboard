import React from 'react';
import { FaInfoCircle, FaNewspaper,FaShoppingBag,FaUsers } from "react-icons/fa";

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

                        <div className='bg-white flex justify-around py-5 text-center'>
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
                        <div className=' border-2 mx-5'></div>

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

                            <div>
                                <p className='text-xl font-semibold pl-4 pt-3'>Recent Activity</p>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl'>
                                        <p className='text-xl font-bold'>12</p>
                                        <p className='text-xl font-bold text-slate-400'>Sep</p>
                                    </div>
                                    <div className='pl-2 lg:pl-0'>
                                        <p className='w-full h-10 text-slate-400 pt-3 overflow-hidden'>Responded to need "Volunter Activities".</p>
                                        <button className='font-bold text-blue-600'>Rea More</button>
                                    </div>
                                </div>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl'>
                                        <p className='text-xl font-bold'>11</p>
                                        <p className='text-xl font-bold text-slate-400'>Sep</p>
                                    </div>
                                    <div className='pl-2 lg:pl-0'>
                                        <p className='w-full h-10 text-slate-400 pt-3 overflow-hidden'>Responded to need "Volunter Activities".</p>
                                        <button className='font-bold text-blue-600'>Rea More</button>
                                    </div>
                                </div>

                                <div className='flex lg:justify-between mb-3'>
                                    <div className='bg-base-200 p-2 ml-4 text-center rounded-xl'>
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