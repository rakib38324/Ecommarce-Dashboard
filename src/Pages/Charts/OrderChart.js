import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const OrderChart = () => {
    const data = [
        { name: "Completed", value: 300 },
        { name: "Others", value: 100 },
        { name: "Pending", value: 200 },
        { name: "Cancle", value: 100 }
    ];

    const COLORS = ['#05d149', '#f9fafc', '#FFBB28', '#e70c0c'];
    return (
        <div className=''>
            <PieChart width={300} height={200}>
                <Pie
                    data={data}
                    cx={120}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip></Tooltip>
                
            </PieChart>  

            <div className='grid grid-cols-3 mt-10'>
                  <div className='text-center border-r-2'>
                    <p className='font-semibold text-lg'>Completed</p>
                    <p className='text-lg font-semibold pt-3'>400</p>
                  </div>
                  <div className='text-center border-r-2'>
                    <p className='font-semibold text-lg'>Cancle</p>
                    <p className='text-lg font-semibold pt-3'>100</p>
                  </div>
                  <div className='text-center'>
                    <p className='font-semibold text-lg'>Pending</p>
                    <p className='text-lg font-semibold pt-3'>300</p>
                  </div>
                </div>     
         </div>
    );
};

export default OrderChart;