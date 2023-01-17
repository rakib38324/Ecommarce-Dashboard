import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const UserActivity = () => {

    const data = [
        {
            name: 'Sat',
            uv: 140,
            pv: 100,

        },
        {
            name: 'Sun',
            uv: 130,
            pv: 139,

        },
        {
            name: 'Mon',
            uv: 120,
            pv: 180,

        },
        {
            name: 'Tus',
            uv: 327,
            pv: 190,

        },
        {
            name: 'Wed',
            uv: 118,
            pv: 180,

        },
        {
            name: 'Thu',
            uv: 223,
            pv: 180,

        },
        {
            name: 'Fri',
            uv: 234,
            pv: 130,

        },
    ];

    return (
        <div className=''>
            <div className='flex justify-between'>
                <p className='text-lg font-semibold p-2'>User Activity</p>
                <p className='text-slate-400 p-2'>Weekly</p>
            </div>

            <p className='text-sm text-slate-400 pl-2 font-semibold'>This Month</p>
            <p className='text-2xl font-bold pl-2'>15,234</p>

            <div className='flex justify-end'>
                <p>Privious</p>
                <p>Current</p>
            </div>

            <LineChart
                width={300}
                height={250}
                data={data}
                margin={{
                    top: 10,
                    right: 5,
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
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default UserActivity;