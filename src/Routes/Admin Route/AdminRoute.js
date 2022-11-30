
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import useAdmin from '../../pages/Hook/useAdmin';
import Loader from '../../pages/Loader/Loader';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/order" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;