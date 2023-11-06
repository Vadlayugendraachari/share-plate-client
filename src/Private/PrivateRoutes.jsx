import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PulseLoader from 'react-spinners/PulseLoader'
import { css } from "@emotion/react";

const PrivateRoutes = ({ children }) => {
    const override = css` // Style for the spinner
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <>
                <div className="text-center relative top-4">
                    <PulseLoader color={'red'} loading={loading} css={override} size={15} />
                </div>
            </>
        )
    }

    if (user) return children

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;