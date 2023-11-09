import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PageTitle from "../PageTitle";
import MyFoodRequest from "./MyFoodRequest";

const MyFoodCollection = () => {
    const [myfood, setMyFood] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    useEffect(() => {
        axios.get(`https://community-food-sharing-server-ruddy.vercel.app/myfoodrequest?email=${userEmail}`)
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
       <PageTitle title='SharePlate | My Food Requests' ></PageTitle>
       {
        myfood.map(myfood => <MyFoodRequest myFood={myfood} key={myfood._id}></MyFoodRequest>)
       }
       </div>
    );
};

export default MyFoodCollection;