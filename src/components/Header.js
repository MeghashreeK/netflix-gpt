import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { useEffect } from 'react';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [arrowState, setArrowState] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    const handleArrowIconFunction = () => {
        setArrowState(!arrowState);
    }



    return (
        <div className='absolute z-10'>
            <div className='flex pt-3 px-10 text-red-600 bg-gradient-to-b from-black w-screen relative justify-between'>
                <p className='font-bold Bebas text-4xl'>NIRVANA</p>
                {window.location.pathname === "/browse" && (
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-1'>
                            <img width="24" height="24" src={arrowState ? "https://img.icons8.com/material-sharp/24/ffffff/sort-up.png" : "https://img.icons8.com/material-sharp/24/ffffff/sort-down.png"} alt="sort-down" onClick={handleArrowIconFunction} />                    <img className='w-8 h-8 cursor-pointer' onClick={handleSignOut} src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="profile-icon" />
                            </div>
                            <div className='border-2 text-white p-2'>
                                <p className='cursor-pointer'>GPT Search</p>
                                <p className='cursor-pointer'>Sign Out</p>
                            </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Header;