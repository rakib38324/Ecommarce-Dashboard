import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts";
import { FaAngleDown } from "react-icons/fa";


const Barchart = () => {


    const data = [
        {
            name: "JAN",

            pv: 2400,

        },
        {
            name: "FEB",

            pv: 1398,

        },
        {
            name: "MAR",

            pv: 2800,

        },
        {
            name: "APR",

            pv: 3908,

        },
        {
            name: "MAY",

            pv: 4800,

        },
        {
            name: "JUN",

            pv: 3800,

        }
        ,
        {
            name: "JUL",

            pv: 4300,

        }
        ,
        {
            name: "AUG",

            pv: 4900,

        }
        ,
        {
            name: "SEP",

            pv: 4300,

        }
        ,
        {
            name: "OCT",

            pv: 4500,

        }
        ,
        {
            name: "NOV",

            pv: 4000,

        }
        ,
        {
            name: "DEC",

            pv: 4300,

        }
    ];

    return (
        <div className="">
            <div className="mt-3">
                <p className="flex justify-end"><span className="font-semibold">Short By:</span> <span className="text-slate-400 pl-2">Yearly</span>  <span className='my-auto pr-2 text-slate-400 pl-1'><FaAngleDown></FaAngleDown></span></p>
            </div>
            <ResponsiveContainer width="98%" height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 5,
                        left: 0,
                        bottom: 0
                    }}
                    barSize={15}
                >
                    <defs>

                            <linearGradient id='color2' x1='0' y1="0" x2='0' y2='1'>
                                <stop offset="0%" stopColor="#0853c9" stopOpacity={1.5} />
                                <stop offset="90%" stopColor="#FFFFFF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 20 }} />
                    <YAxis />
                    <Tooltip />
                    
                    <Bar dataKey="pv" fill=" url(#color2)"   />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
