import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ManageFood = () => {
    const {user} = useContext(AuthContext);
    const logedInUser = user.email;

    fetch('')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
    return (
        <div>
            
        </div>
    );
};

export default ManageFood;
