import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../../firebase.init';
import Loading from './../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';



const RequireAuth = ({children}) => {
    const location=useLocation();
    const [user,loading]=useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
        <ToastContainer></ToastContainer>
        return <div>
            <b className='text-danger'>you are not verified</b>
            <p>please verify your to continue</p>
            <button onClick={async ()=>{await sendEmailVerification();
            toast='email verification sent'}} className='btn btn-warning'> verify email</button>
        </div>
    }
    return children;
}
   

export default RequireAuth;