import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from "react";
import { useTable } from "react-table";
import { AuthContext } from '../../Provider/AuthProvider';
import PulseLoader from 'react-spinners/PulseLoader'
import { css } from "@emotion/react";
import Swal from 'sweetalert2';
import ManageSingleFoodRequest from './ManageSingleFoodRequest';
import { Link } from 'react-router-dom';

const ManageFoods = () => {
    const [loading, setLoading] = useState(true);
    const [editedData, setEditedData] = useState(null);
    const { user } = useContext(AuthContext)
    const uerEmail = user.email;


    const override = css` // Style for the spinner
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    const [manageFood, setManageFood] = useState([]);
  
    useEffect(() => {
        axios.get(`http://localhost:2003/manageuserfood?email=${uerEmail}`)
            .then(res => {
                // console.log(res.data)
                setManageFood(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false);
            })
    }, [uerEmail])

  

    const data = useMemo(() => manageFood, [manageFood]);
    const columns = useMemo(() => [

        {
            Header: 'ID',
            accessor: '_id'
        },
        {
            Header: 'Food Name',
            accessor: 'food_name'
        },
        {
            Header: 'Food Quantity',
            accessor: 'quantity'
        },
        {
            Header: 'Expire Date',
            accessor: 'expire_date'
        },
        {
            Header: 'Pickup Location',
            accessor: 'pickup_location'
        },
        {
            Header: 'Additional Note',
            accessor: 'additional_notes'
        }
    ],
        []
    );


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    if (loading) {
        return (
            <div className="text-center relative top-4">
                <PulseLoader color={'red'} loading={loading} css={override} size={15} />
            </div>
        )
    }
    const handleEdit = (row) => {
        setEditedData(row.original)
        setLoading(false);
    }
    const handleFormEdit = () => {
        Swal.fire(
            'Congratulation!',
            'Food Details successfuly Updated',
            'success'
        )
        if (editedData) {
            axios.put(`http://localhost:2003/manageuserfood?email=${editedData.donator_email}`, editedData)
                .then(res => {
                    console.log(res, 'data updated succesfuly')
                })
                .catch(err => console.log(err.message))
        }

    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const email = user.email;
                axios.delete(`http://localhost:2003/manageuserfood?email=${email}`, email)
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Congratulation!',
                                'Data Deleted Successfuly',
                                'success'
                            )
                        }
                        window.location.reload();
                        console.log(data)

                    }).catch((err) => {
                        console.log(err.message)
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }


 
    return (
        <div className='max-w-6xl mx-auto my-8'>
            <div>
                <div>
                    <div className=' overflow-x-auto'>
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm" {...getTableProps}>
                            <thead className="ltr:text-left rtl:text-right">
                                {
                                    headerGroups.map((headerGroup) => (
                                        <tr key={headerGroup.id}{...headerGroup.getHeaderGroupProps()}>
                                            {
                                                headerGroup.headers.map((column) => (
                                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" key={column.id} {...column.getHeaderProps()}>
                                                        {column.render('Header')}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody className="divide-y divide-gray-200" {...getTableBodyProps()}>
                                {
                                    rows.map(row => {
                                        prepareRow(row)
                                        return (
                                            <tr key={row.id} {...row.getRowProps()}>
                                                {
                                                    row.cells.map((cell) => (
                                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                                    ))
                                                }
                                                <td className="whitespace-nowrap px-4 py-2">
                                                    <button
                                                        type='button'
                                                        onClick={() => handleEdit(row)}
                                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mx-2"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleDelete(row)}
                                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mx-2"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link to={`/managesingle/${row.original._id}`}>
                                                        <button
                                                            type='button'
                                                            className="btn inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mx-2"
                                                        >
                                                            Manage
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                 
                </div>
            </div>
            {
                editedData && (
                    <div className="mt-5">
                        <form onSubmit={handleFormEdit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <div>
                                    <label htmlFor="food_name" className="block text-sm mb-2">Food Name</label>
                                    <div className="relative">
                                        <input type="text" name="foodName" value={editedData?.food_name} onChange={e => setEditedData({ ...editedData, food_name: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="food_image" className="block text-sm mb-2">Food Image</label>
                                    <div className="relative">
                                        <input type="text" name="foodImage" value={editedData?.food_image} onChange={e => setEditedData({ ...editedData, food_image: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="food+_id" className="block text-sm mb-2">Food ID</label>
                                    <div className="relative">
                                        <input type="text" name="foodId" value={editedData?._id} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="donator" className="block text-sm mb-2">Donator Name</label>
                                    <div className="relative">
                                        <input type="text" name="donator" value={editedData?.donator} onChange={e => setEditedData({ ...editedData, donator: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="donatorEmail" className="block text-sm mb-2">Donator Email</label>
                                    <div className="relative">
                                        <input type="email" name="donatorEmail" value={editedData?.donator_email} onChange={e => setEditedData({ ...editedData, donator_email: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="userEmail" className="block text-sm mb-2">Your Email</label>
                                    <div className="relative">
                                        <input type="text" name="userEmail" value={user?.email} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="pickPoint" className="block text-sm mb-2">Pickup Location</label>
                                    <div className="relative">
                                        <input type="text" name="pickPoint" value={editedData?.pickup_location} onChange={e => setEditedData({ ...editedData, pickup_location: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="expireDate" className="block text-sm mb-2">Expire Date</label>
                                    <div className="relative">
                                        <input type="date" name="expireDate" value={editedData?.expire_date} onChange={e => setEditedData({ ...editedData, expire_date: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="note" className="block text-sm mb-2">Additional Notes</label>
                                    <div className="relative">
                                        <input type="text" name="note" value={editedData?.additional_notes} onChange={e => setEditedData({ ...editedData, additional_notes: e.target.value })} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <button type="submit" className="py-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">Update</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default ManageFoods;