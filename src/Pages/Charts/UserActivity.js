import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ReferenceLine } from 'recharts';
import { FaAngleDown,FaCircle } from "react-icons/fa";



const UserActivity = () => {
    const data = [
        {
            name: 'SAT',
            uv: 400,
            pv: 240,
            amt: 240,
        },
        {
            name: 'SUN',
            uv: 300,
            pv: 139,
            amt: 221,
        },
        {
            name: 'MON',
            uv: 200,
            pv: 380,
            amt: 229,
        },
        {
            name: 'TUS',
            uv: 278,
            pv: 390,
            amt: 200,
        },
        {
            name: 'WED',
            uv: 189,
            pv: 480,
            amt: 218,
        },
        {
            name: 'THU',
            uv: 239,
            pv: 380,
            amt: 250,
        },
        {
            name: 'FRI',
            uv: 349,
            pv: 430,
            amt: 210,
        },
    ];

    return (
        <div >

            <div className='flex justify-between'>
                <p className='text-lg font-semibold p-2'>User Activity</p>
                <p className='text-slate-400 p-2 flex'>Weekly <span className='my-auto p-2'><FaAngleDown></FaAngleDown></span></p>
            </div>
            

            <p className='text-sm text-slate-400 pl-2 font-semibold'>This Month</p>
            <p className='text-2xl font-bold pl-2'>15,234</p>

            <div className='flex justify-end'>
                <p className='flex'><span className='text-blue-500 my-auto mr-1'><FaCircle></FaCircle></span>Current</p>
                <p className='flex mr-4'><span className='text-red-500 my-auto ml-5 mr-1'><FaCircle></FaCircle></span>Previoius</p>
            </div>

            <div className=' mr-4 mt-10'>

                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id='color' x1='0' y1="0" x2='0' y2='1'>
                                <stop offset="0%" stopColor="#FF0000" stopOpacity={0.9} />
                                <stop offset="75%" stopColor="#065f46" stopOpacity={0.1} />
                            </linearGradient>

                            <linearGradient id='color2' x1='0' y1="0" x2='0' y2='1'>
                                <stop offset="0%" stopColor="#266bd7" stopOpacity={0.9} />
                                <stop offset="75%" stopColor="#065f46" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <Area type="monotone" dataKey="amt" stroke="#FF0000"
                            fill=" url(#color)" />
                        <Area type="monotone" dataKey="uv" stroke="#266bd7
"
                            fill=" url(#color2)" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="pv" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </div >
    );
};

export default UserActivity;
