import { useState, useEffect } from "react";
import AvailableFood from "./AvailableFood";
import PulseLoader from 'react-spinners/PulseLoader'
import { css } from "@emotion/react";


const AvailableFoods = () => {
    const override = css` // Style for the spinner
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    const [loader, setLoader] = useState(true);
    const [foods, setFoods] = useState([]);
    const [seachQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('low to high')
    const foodUrl = seachQuery ? `http://localhost:2003/foods?food_name=${seachQuery}` : 'http://localhost:2003/foods';

    useEffect(() => {

        fetch(foodUrl)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setLoader(false)
            })
    }, [foodUrl, seachQuery])

    const sortFoods = (sortinOrder) => {
        const sortedFoods = [...foods]
        sortedFoods.sort((a, b) => {
            if (sortinOrder === 'High to Low') {
                return new Date(b.expire_date) - new Date(a.expire_date)
            } else {
                return new Date(a.expire_date) - new Date(b.expire_date)
            }
        })
        setFoods(sortedFoods)
    }
    const handleSelect = (e) => {
        setSortOrder(e.target.value);
        sortFoods(e.target.value);
    }
    return (
        <div className="max-w-6xl mx-auto my-8">
            <h1 className="text-center text-3xl font-extrabold underline my-4">Available Foods</h1>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                <label htmlFor="hs-hidden-select" className="sr-only">Label</label>
                <select id="hs-hidden-select" onChange={handleSelect} value={sortOrder}
                    className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-[tomato] focus:ring-[tomato]">
                    <option value='High to Low'>High to Low</option>
                    <option value='Low to High'>Low to High</option>
                </select>
                <label htmlFor="hs-search-box-with-loading-5" className="block text-sm font-medium mb-2 dark:text-white">Search</label>
                <div className="relative flex rounded-md shadow-sm">
                    <input onChange={e => setSearchQuery(e.target.value)} type="text" id="hs-search-box-with-loading-5" name="serach" className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 outline-none" placeholder="Input search" />
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            {
                loader ? (
                    <div className="text-center relative top-4">
                        <PulseLoader color={'red'} loading={loader} css={override} size={15} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4">
                        {
                            foods.map(food => <AvailableFood food={food} key={food._id}></AvailableFood>)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AvailableFoods;