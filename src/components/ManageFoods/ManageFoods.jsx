import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from "react";
import { useTable } from "react-table";
import { AuthContext } from '../../Provider/AuthProvider';
import PulseLoader from 'react-spinners/PulseLoader'
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';

const ManageFoods = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)
    const uerEmail = user.email;
    // console.log(uerEmail)

    const override = css` // Style for the spinner
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    const [mangeFood, setManageFood] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:2003/manageuserfood?email=${uerEmail}`)
            .then(res => {
                setManageFood(res.data)
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false);
            })
    }, [uerEmail])


    const data = useMemo(() => mangeFood, [mangeFood]);
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

    return (
        <div className='max-w-6xl mx-auto my-8'>
            <div>
                <div>
                    <div className="overflow-x-auto">
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
                                                    <div className="text-center">
                                                        <Link>
                                                            <button type="button" className="py-3 my-4 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-600 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm " data-hs-overlay="#hs-modal-signin">
                                                                Edit
                                                            </button>
                                                        </Link>
                                                    </div>

                                                    <div id="hs-modal-signin" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                                                        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                                                                <div className="p-4 sm:p-7">
                                                                    <div className="mt-5">
                                                                        <form>
                                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                                                <div>
                                                                                    <label htmlFor="food_name" className="block text-sm mb-2">Food Name</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="foodName" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="food_image" className="block text-sm mb-2">Food Image</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="foodImage" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="food+_id" className="block text-sm mb-2">Food ID</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="foodId" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="donator" className="block text-sm mb-2">Donator Name</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="donator" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="donatorEmail" className="block text-sm mb-2">Donator Email</label>
                                                                                    <div className="relative">
                                                                                        <input type="email" name="donatorEmail" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="userEmail" className="block text-sm mb-2">Your Email</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="userEmail" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="requesteddate" className="block text-sm mb-2">Requested Date</label>
                                                                                    <div className="relative">
                                                                                        <input type="date" name="requesteddate" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="pickPoint" className="block text-sm mb-2">Pickup Location</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="pickPoint" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="expireDate" className="block text-sm mb-2">Expire Date</label>
                                                                                    <div className="relative">
                                                                                        <input type="date" name="expireDate" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="note" className="block text-sm mb-2">Additional Notes</label>
                                                                                    <div className="relative">
                                                                                        <input type="text" name="note" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="donationMoney" className="block text-sm mb-2">Donation Amount</label>
                                                                                    <div className="relative">
                                                                                        <input type="number" name="donationMoney" placeholder="0$" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required />
                                                                                    </div>
                                                                                </div>
                                                                                <button type="submit" className="py-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">Request</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="#"
                                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mx-2"
                                                    >
                                                        Delete
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
        </div>
    );
};

export default ManageFoods;