import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { removeUser } from '../utils/UserSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";


const Header = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleSignOutEvent = () => {
    //     signOut(auth)
    //       .then(() => {})
    //       .catch((error) => {
    //         navigate("/error");
    //       });
    //   };

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             const { uid, email, displayName, photoURL } = user;
    //             dispatch(
    //                 addUser({
    //                     uid: uid,
    //                     email: email,
    //                     displayName: displayName,
    //                     photoURL: photoURL,
    //                 })
    //             );
    //             navigate("/browse");
    //         } else {
    //             dispatch(removeUser());
    //             navigate("/");
    //         }
    //     });
    // }, [])

  
    return (
        <div className='absolute z-10 w-full'>
            <h1 className='font-bold p-2 text-red-600 Bebas text-4xl bg-gradient-to-b from-black relative'>NIRVANA</h1>
        </div>
    )
}

export default Header;