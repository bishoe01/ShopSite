import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { Navigate } from 'react-router-dom';
function ProtectedRoute({ children, requireAdmin }) {
    const { user } = useAuthContext();
    if (!user || (requireAdmin && !user.isAdmin)) return ( //어드민인 사용자이면서 동시에 isadmin이 거짓? 
        <Navigate to={'/'} replace />);
    return (
        <div>
            {children}
        </div>
    );
}

export default ProtectedRoute;