import { useEffect, useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { Link, useNavigate } from 'react-router-dom';
import CS_Sidebar from '../Components/CS_Sidebar';



const ComplainCS = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    const fetchData = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/allcomplain");
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res}`);
            }
    
            const response = await res.json();
            console.log("data>>", response.all_complains);
            setData(response.all_complains);
            setCount(response.count)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    
    const columns = useMemo(
        () => [
            {
                accessorKey: 'complain_id',
                header: 'Ticker',
                size: 80,
            },
            {
                accessorKey: 'customer_name', //access nested data with dot notation
                header: 'Customer Name',
                size: 100,
            },
            {
                accessorKey: 'reg_no',
                header: 'Registration #',
                size: 90,
            },
            {
                accessorKey: 'nature_of_complain',
                header: 'Complain',
                size: 100,
            },
            {
                accessorKey: 'date',
                header: 'Date',
                size: 80,
            },
            {
                accessorKey: 'time',
                header: 'Time',
                size: 80,
            },
            {
                accessorKey: 'remarks',
                header: 'Remarks',
                size: 250,
            },
            {
                accessorKey: 'emp_name',
                header: 'Represtative',
                size: 100,
            },
            {
                accessorKey: 'Status',
                header: 'Resolved By',
                size: 100,
            },
            {
                accessorKey: 'Status',
                header: 'Status',
                size: 80,
            },
        ],
        [],
    );
    
    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnActions: false,
        enableColumnFilters: false,
        enableSorting: false,
        muiTableHeadCellProps: {
            sx: {
                fontWeight: 'bold',
                fontSize: '12px',
                border: '1px solid #e0e0e0',
                color: "black"
            },
        },
        muiTableBodyProps: {
            sx: {
                fontSize: "8px"
            }
        },
        muiTableBodyCellProps: {
            sx: {
                fontSize: "11px",
                borderRight: '2px solid #e0e0e0', //add a border between columns
            },
        }
    });
    
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex h-[100vh] bg-black'>
            {isSidebarOpen && (
                <div className="sidebar"><CS_Sidebar /></div>
            )}
            <div className=' rounded-xl m-2 p-2 w-100 overflow-y-scroll bg-gray-300'>
                <button onClick={toggleSidebar}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' className='h-8 w-8' /></button>
                <div className='flex justify-between mt-4'>
                    <div >
                        <h1 className='text-4xl font-bold text-uppercase text-black'>Complain Log</h1>
                        <span className='text-xl font-bold  text-black '>Total Records : </span><sapn className="text-lg">{count}</sapn>
                    </div>
                    <div >
                        <Link to='/cs/logs' className='theme_btn_md p-2'>Add Complain</Link>
                    </div>
                </div>
                <div className=' my-3'> <MaterialReactTable table={table} /> </div>
            </div>
        </div>)
};

export default ComplainCS;
