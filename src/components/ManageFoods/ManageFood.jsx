import { useMemo } from "react";
import { useTable } from "react-table";
import { useModal } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion"
const ManageFood = ({ userFood }) => {
    // console.log(userFood)

    const data = useMemo(() => userFood, []);
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
    ])
    console.log(data)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <>
            <div>
                <div>
                <table {...getTableProps}>
                 <thead>
                      {
                        headerGroups.map((headerGroup) =>{
                            <tr {...headerGroup.getFooterGroupProps()}>
                              {
                                headerGroup.headers.map((column)=>{
                                    <th {...column.getHeaderProps()}>
                                       {columns.render('Header')}
                                    </th>
                                })
                              }
                            </tr>
                        })
                      }
                 </thead>
                 <tbody></tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default ManageFood;