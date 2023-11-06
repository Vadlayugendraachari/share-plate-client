import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureFood from "./FeatureFood";


const FeaturesFoods = () => {
    const [feaFoods, setFeaFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:2003/featurefoods')
            .then(res => res.json())
            .then(data => setFeaFoods(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    feaFoods.map(feafood => <FeatureFood feafood={feafood} key={feafood._id}></FeatureFood>)
                }
            </div>
            <div className="text-center">
            <Link to='avialabe' className="btn btn-ghost bg-[#3a9691] text-white">Show All</Link>
            </div>
        </div>
    );
};

export default FeaturesFoods;