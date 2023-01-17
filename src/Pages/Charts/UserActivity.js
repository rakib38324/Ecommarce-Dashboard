import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {  FaAngleDown } from "react-icons/fa";


const UserActivity = () => {

    const data = [
        {
            name: 'Sat',
            privious: 120,
            current: 60,

        },
        {
            name: 'Sun',
            privious: 130,
            current: 199,

        },
        {
            name: 'Mon',
            privious: 220,
            current: 140,

        },
        {
            name: 'Tus',
            privious: 327,
            current: 190,

        },
        {
            name: 'Wed',
            privious: 118,
            current: 180,

        },
        {
            name: 'Thu',
            privious: 223,
            current: 180,

        },
        {
            name: 'Fri',
            privious: 134,
            current: 230,

        },
    ];

    return (
        <div className=''>
            <div className='flex justify-between'>
                <p className='text-lg font-semibold p-2'>User Activity</p>
                <p className='text-slate-400 p-2 flex'>Weekly <span className='my-auto p-2'><FaAngleDown></FaAngleDown></span></p>
            </div>

            <p className='text-sm text-slate-400 pl-2 font-semibold'>This Month</p>
            <p className='text-2xl font-bold pl-2'>15,234</p>

            

            <LineChart
                width={300}
                height={250}
                data={data}
                margin={{
                    top: 40,
                    right: 2,
                    left: -20,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#23da0a"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="privious" stroke="#e70c0c" />
            </LineChart>

        </div>
    );
};

export default UserActivity;