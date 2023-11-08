import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyFoodRequest from "./MyFoodRequest";

const MyFoodCollection = () => {
    const [myfood, setMyFood] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    useEffect(() => {
        axios.get(`http://localhost:2003/myfoodrequest?email=${userEmail}`)
            .then(res => {
                console.log(res.data)
                setMyFood(res.data)

            })
            .catch(err => {
                console.log(err.message)

            })
    }, [userEmail])
    return (
       <div className="max-w-6xl mx-auto">
       {
        myfood.map(myfood => <MyFoodRequest myFood={myfood} key={myfood._id}></MyFoodRequest>)
       }
       </div>
    );
};

export default MyFoodCollection;